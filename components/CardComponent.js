import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

const CardComponent = ({ result }) => {
  


  const icons = {
    star_100: require('../assets/rating_star_100.png'),
    star_0: require('../assets/rating_star_0.png'),
  };
  const stars = [];

  const findStars = () => {
    let star = 0;
    const floorVal = Math.floor(result.score) / 5 - 14;

    while (star < floorVal) {
      stars.push(
        <Image style={styles.starStyle} key={star} source={icons.star_100} />
      );
      star += 1;
    }
    while (star < 5) {
      stars.push(
        <Image style={styles.starStyle} key={star} source={icons.star_0} />
      );
      star += 1;
    }
  }

  findStars();

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.titleStyle}>{result.title}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>{stars}</View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{
            width: 20,
            height: 20,
            borderRadius: (20) / 2,
            borderColor: 'green',
            borderWidth: 10,
            opacity: result.difficulty == 'Easy' ? 1 : 0.15
          }}>
          </View>
          <View style={{
            width: 20,
            height: 20,
            borderRadius: (20) / 2,
            borderColor: 'orange',
            borderWidth: 10,
            opacity : result.difficulty == 'Medium' ? 1 : 0.3
          }}>
          </View>
          <View style={{
            width: 20,
            height: 20,
            borderRadius: (20) / 2,
            borderColor: 'red',
            borderWidth: 10,
            opacity : result.difficulty == 'Hard' ? 1 : 0.2
          }}>
          </View>
        </View>
      </View>
      <Text style={styles.nameStyle}>{result.company}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    width: SCREEN_WIDTH * 0.85 ,
    height: SCREEN_HEIGHT / 6,
  },
  titleStyle: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  nameStyle: {
    fontSize: 16,
    color: '#38B0DE',
    marginTop: 10
  },
  starStyle:{
    width: 20,
    height: 20,
  },
  CircleShape: {
    width: 20,
    height: 20,
    borderRadius: (20) / 2,
    borderColor: 'red',
    color: 'red',
    borderWidth: 10,
    marginLeft: 0
  }
});

export default CardComponent;