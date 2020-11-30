import { Button, View, Image, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
export default function questionDetails ({ route }) {
  result = route.params.item;
  const icons = {
    star_100: require('./assets/rating_star_100.png'),
    star_0: require('./assets/rating_star_0.png'),
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
  const [showTopic, setShowTopic] = useState(false);
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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={styles.tagStyle}>Company: </Text>
        <Text style={styles.nameStyle}>{result.company}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={styles.tagStyle}>Mode: </Text>
        <Text style={styles.nameStyle}>{result.typeOfInterview}</Text>
      </View>   
      </View>
      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={styles.tagStyle}>College: </Text>
        <Text style={styles.nameStyle}>{result.college}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <Text style={styles.tagStyle}>Nature: </Text>
        <Text style={styles.nameStyle}>{result.natureOfJob}</Text>
      </View>   
      </View>
       <View style={{marginTop: 20}}>   
            <Button
                onPress={() => {
                setShowTopic(!showTopic);
            }}
                title={showTopic ? "Hide Topic" : "Show Topic"}
            />
    {  showTopic &&
      <Text style={styles.topicStyle}>{result.topic}</Text>
    }
    </View>
      <Text style={styles.detailStyle}>{result.description}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 15,
    width: 350,
    height: 100,
  },
  titleStyle: {
    fontSize: 40,
    color: 'black',
    marginBottom: 10,
  },
  nameStyle: {
    fontSize: 16,
    color: '#38B0DE',
    marginTop: 10
  },
  tagStyle: {
    fontSize: 16,
    color: 'black',
    marginTop: 10
  },
  detailStyle: {
    fontSize: 20,
    color: 'black',
    marginTop: 30
  },
  topicStyle: {
    fontSize: 16,
    color: 'black',
    marginTop: 30
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
