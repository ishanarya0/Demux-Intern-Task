import React, { useState} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {items} from '../constantValues/FilterComponentConfig';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {updateFilter} from '../reducers/filter/filterActions';

const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

const Modal = () => {
  const dispatch = useDispatch();
  const [currentFilter, setCurrent] = useState([]);

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

  dispatch(updateFilter(newFilter.company, newFilter.topic, newFilter.typeOfInterview, newFilter.college, newFilter.natureOfJob));
}

const updateFilters = (currentFil) => {
    setCurrent(currentFil);
    makeNewFilter(currentFil,items);
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent:'flex-end', marginLeft: 5}}>
      <LinearGradient
        colors={['#240704', 'black', 'black']}
        style={styles.modal}
      >
        <View style={{ flexDirection: 'row', justifyContent:'flex-start', flexWrap:'wrap' }}>
          <View style={{ flexDirection: 'row', justifyContent:'flex-start', marginLeft: 5, flexWrap:'wrap'}}>
            
          <Text style={[styles.text, { paddingTop: 16 }]}>Select a filter</Text>
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
    minHeight : SCREEN_HEIGHT * 0.15,
    height: 'auto',
    minWidth: SCREEN_WIDTH * 0.7,
    width: 'auto',
    marginRight: 25 / 5,
    borderRadius: 6,
    marginTop: 25 * 3,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    padding: 25 / 5,
  },
  text: {
    color: 'white',
    padding: 25 / 5,
    paddingLeft: 25 / 2,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
