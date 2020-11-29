import React, { useState } from 'react';
import { StyleSheet, View, Picker, Text} from 'react-native';
import { pickerValues } from '../constantValues/FilterComponentConfig';

const PickerComponent = ({pickerValues}) => {
  const [state, setstate] = useState(pickerValues[1]);
  var items = []
  const getItems = () =>{
    for(var i=0;i<pickerValues.length; i++){
      items.push(<Picker.Item label={pickerValues[i].label} value={pickerValues[i].value} />);
    }
  }
  getItems();
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={state}
        style={{
          height: 16 * 2,
          width: 16 * 9,
          color: 'white',
          opacity: 0.5,
          transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        }}
        mode="dropdown"
        itemStyle={{ fontSize: 14 / 2.1 }}
        onValueChange={(itemValue) => setstate(itemValue)}
      >
        {items}
      </Picker>
    </View>
  );
};

export default PickerComponent;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    padding: (25 / 5) * 2,
  },
  dropdown: {
    width: 'auto',
  },
  pickerStyle: {
    height: 16 * 9,
    width: '80%',
    justifyContent: 'center',
  },
});
