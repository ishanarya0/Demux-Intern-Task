import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icons from 'react-native-vector-icons/AntDesign';
import { dataSource } from '../constantValues/dummyFilter';

const ChipComponent = () => {
  const [data, setData] = useState(dataSource);
  return (
    <View style={styles.chips}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onPress={() =>
              setData([
                ...data.slice(0, index),
                { name: data[index].name, isSelected: !data[index].isSelected },
                ...data.slice(index + 1),
              ])
            }
          >
            <View style={[item.isSelected ? styles.containerRed : styles.containerWhite]}>
              <Text style={[item.isSelected ? styles.textWhite : styles.text]}>{item.name}</Text>
              {item.isSelected ? (
                <TouchableOpacity>
                  <Icons style={styles.icon} color="white" size={10} name="closecircle" />
                </TouchableOpacity>
              ) : null}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ChipComponent;

const styles = StyleSheet.create({
  containerWhite: {
    flexDirection: 'row',
    height: 'auto',
    backgroundColor: 'white',
    padding: 25 / 5,
    paddingHorizontal: 25 / 5,
    margin: 25 / 7,
    borderRadius: 6 * 5,
  },
  containerRed: {
    flexDirection: 'row',
    height: 'auto',
    backgroundColor: 'red',
    width: 'auto',
    padding: 25 / 5,
    margin: 25 / 7,
    borderRadius: 6 * 5,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textWhite: {
    color: 'white',
    fontSize: 18 / 2,
  },
  text: {
    fontSize: 18 / 2,
  },
  icon: {
    padding: 25 / 25,
  },
});
