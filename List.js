import styles from './styles';
import { fetchResults,fetchResultsFilter } from './data';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Button,FlatList, View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CardComponent from './components/CardComponent';
import { BlurView } from 'expo-blur';
import FilterComponent from './components/FilterComponent';
import delay from 'delay';
import {fetchFilter, updateFilter} from './reducers/filter/filterActions';
import { useNavigation } from '@react-navigation/native';

export default function listFun () {
  const icons = {
    filter_btn: require('./assets/filter3.png'),
  };

  const [isFilter, setisFilter] = useState(false);
  const dispatch = useDispatch();
  const listItems = useSelector(state => state.list.items);
  const filters = useSelector(state => state.filter);
  const [totalItems, setTotal] = useState(0);
  const [totalItemsFilter, setTotalFilter] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const navigation = useNavigation();
  const [filterUse, setFilterUse] = useState(false);

  useEffect(() => {
    filterUse? initialiseListFiltered() : initialiseList();
    //dispatch(updateFilter(filters.company,filters.topic, filters.typeOfInterview, filters.college, filters.natureOfJob));
  }, [filterUse, filters]);

function applyFilterHelper(data, filters, filter){
  var result = [];
  console.log("LOLOLOL");
  console.log(filters[filter]);
  data.forEach(function (x) {
    if(filters[filter].length > 0 && filters[filter].includes(x[filter])){
          result.push(x); 
    }
});
return filters[filter].length > 0 ? result : data;
}


function applyFilter(jso, filters){
    var result = [];
  result = applyFilterHelper(jso, filters, 'company');
  result = applyFilterHelper(result, filters, 'college');
  result = applyFilterHelper(result, filters, 'typeOfInterview');
  result = applyFilterHelper(result, filters, 'natureOfJob');

    return result;
  }

  function clearfilter(){
    dispatch(updateFilter([],[],[],[],[]));
  }

  const initialiseList = async () => {
    await AsyncStorage.removeItem('saved_list');
    const curItems = await AsyncStorage.getItem('saved_list');
    console.log("MAI");
    console.log("1 "+totalItems);
    await setTotal(0);
    console.log("2 "+ totalItems);
    if (curItems === null) {
      json = fetchResults(0);

      await AsyncStorage.setItem('saved_list', JSON.stringify(json));
      setTotal(totalItems+5);
    } else {
      json = JSON.parse(curItems);
    }
    dispatch({
      type: 'UPDATE_LIST',
      items: json
    });
  }

const initialiseListFiltered = async () => {
/*     console.log("lodu"); */
    json = fetchResultsFilter();
    filtered = await applyFilter(json, filters);    
    setTotalFilter(filtered.length);
 /*    console.log(filtered); */
    dispatch({
      type: 'UPDATE_LIST',
      items: filtered
    });
  }

  const persistResults = async (newItems) => {

    const curItems = await AsyncStorage.getItem('saved_list');

    let json = curItems === null
      ? {}
      : JSON.parse(curItems);

    for (let item of newItems) {
      json.push(item);
    }

    await AsyncStorage.setItem('saved_list', JSON.stringify(json));
    console.log("NAHI MAI");
    setTotal(totalItems+5);
    dispatch({
      type: 'UPDATE_LIST',
      items: json
    });
  }

  const loadMoreResults = async info => {

    if (loadingMore || allLoaded)
      return

    setLoadingMore(true);

    const newItems = fetchResults(totalItems);

    await delay(1000);

    if (newItems.length === 0) {
      setAllLoaded(true);
    } else {
      await persistResults(newItems);
    }
    setLoadingMore(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <FlatList
        contentContainerStyle={styles.list}
        ListHeaderComponent={ 
          <View style={styles.header}> 
            {filterUse && <View>
            <Text style={styles.title}> {filterUse? totalItemsFilter: totalItems} Items</Text>
            <Button
              onPress={() => {
              setFilterUse(false);
              clearfilter();
            }}
            title={"Remove Filters"}
            />
            </View>}
            <TouchableOpacity onPress={() => {setisFilter(true); setFilterUse(true);}}>
              <Image style={{
                height: 50,
                width: 50,
                alignSelf: 'center',
                }} source={icons.filter_btn} />
            </TouchableOpacity>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            {loadingMore &&
              <Text style={styles.footerText}>Loading More...</Text>
            }
          </View>
        }
        scrollEventThrottle={250}
        onEndReached={info => {
          if(filterUse==false){
          loadMoreResults(info);
          }
        }}
        onEndReachedThreshold={0.01}
        data={listItems}
        keyExtractor={(item) => "item_" + item._id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
            onPress={() => navigation.navigate('Question Details', {item : item})}
          >
            <React.Fragment key={index}>
              <View style={styles.item}>
              <CardComponent
              result={{
                _id: item._id,
                title: item.title,
                difficulty: item.difficulty,
                company: item.company,
                score: item.score,
              }}
            />
              </View>
            </React.Fragment>
            </TouchableOpacity>
          )
        }}
      />
      {isFilter && (
        <BlurView
          intensity={100}
          style={[StyleSheet.absoluteFill, { justifyContent: 'center', backgroundColor: 'red' }]}
          tint="dark"
        >
          <FilterComponent isFilter={isFilter} setisFilter={setisFilter} />
        </BlurView>
      )}
    </SafeAreaView>
  );
}

