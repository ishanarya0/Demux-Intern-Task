import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ChipComponent from './ChipComponent';
import PickerComponent from './PickerComponent';
import{natureOfJob, typeOfInterview, college, company} from '../constantValues/FilterComponentConfig';

const Modal = () => {
  return (
    <View>
      <LinearGradient
        colors={['#240704', 'black', 'black']}
        style={styles.modal}
      >
        <Text style={[styles.text, { paddingTop: 16 }]}>Filter By</Text>
        <View style={{ flexDirection: 'row', justifyContent:'flex-start', flexWrap:'wrap' }}>
          <View style={{ flexDirection: 'row', justifyContent:'flex-start', marginLeft: 5}}>
            <Text style={{color:'white'}} >Job type</Text>
            <PickerComponent pickerValues={natureOfJob} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent:'flex-start', marginLeft: 5}}>
            <Text style={{color:'white'}} >Interview</Text>
            <PickerComponent pickerValues={typeOfInterview} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent:'flex-start', marginLeft: 5}}>
            <Text style={{color:'white'}} >Company</Text>
            <PickerComponent pickerValues={company} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent:'flex-start', marginLeft: 5}}>
            <Text style={{color:'white'}} >College</Text>
            <PickerComponent pickerValues={college} />
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
    width: 30 * 10,
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
