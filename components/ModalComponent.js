import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ChipComponent from './ChipComponent';
import PickerComponent from './PickerComponent';
import {items} from '../constantValues/FilterComponentConfig';
import { useDispatch,useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {updateFilter} from '../reducers/filter/filterActions'



const Modal = () => {
  const dispatch = useDispatch();
  
  const filters = useSelector(state => state.filter);
  const [currentFilter, setCurrent] = useState([]);


  //items => 1  currentFil => 3  newFilter=>2
  const makeNewFilter = async (currentFil, items) => {
    
    const newFilter = {
      company: [],
      topic: [],
      typeOfInterview: [],
      college: [],
      natureOfJob: []
    };
    
    currentFil.forEach(id => {
      items.forEach((o) => {
        o.children.forEach(child => {
          if(child.id === id){
            newFilter[o.name].push(child.name)
          }
        })
      })
    });
  console.log(newFilter);
  console.log("************");
  dispatch(updateFilter(newFilter.company, newFilter.topic, newFilter.typeOfInterview, newFilter.college, newFilter.natureOfJob));
  console.log(filters);
}

  updateFilters = (currentFil) => {
    console.log(filters);
    console.log(items);
    console.log("LODU");
    setCurrent(currentFil);
    console.log("kya aya" + currentFil);
    console.log("kya bana" + currentFilter);
    console.log('##############################');
    makeNewFilter(currentFil,items);
    //console.log(currentFilter);
  }
/* 
  useEffect(() => {
    console.log("hello");
  }, [currentFilter]); */


  return (
    <View>
      <LinearGradient
        colors={['#240704', 'black', 'black']}
        style={styles.modal}
      >
        <Text style={[styles.text, { paddingTop: 16 }]}>Filter By</Text>
        <View style={{ flexDirection: 'row', justifyContent:'flex-start', flexWrap:'wrap' }}>
          <View style={{ flexDirection: 'row', justifyContent:'flex-start', marginLeft: 5}}>
          <SectionedMultiSelect
          items={items}
          IconRenderer={Icon}
          uniqueKey="id"
          subKey="children"
          selectText="Choose More Filters"
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={updateFilters}
          selectedItems={currentFilter}
        />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modal: {
    height: 'auto',
    minWidth: 300,
    width: 'auto',
    marginRight: 25 / 5,
    borderRadius: 6,
    marginTop: 25 * 3,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    padding: 25 / 5,
  },
  text: {
    color: '#FCBE02',
    padding: 25 / 5,
    paddingLeft: 25 / 2,
    fontSize: 14 * 0.85,
    fontWeight: 'bold',
  },
  show: {
    color: '#9DA3B4',
    paddingTop: (25 * 2) / 5,
    paddingLeft: 25 / 2,
    fontSize: 14 * 0.57,
  },
  chips: {
    paddingLeft: (25 * 8) / 25,
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    margin: (25 * 2) / 5,
  },
  filter: {
    flexDirection: 'row',
    paddingTop: (25 * 4) / 5,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});
