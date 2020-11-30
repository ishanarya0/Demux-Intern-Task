import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import list from '../screens/List';
import questionDetails from '../screens/questionDetails';

const QuestionStackNav = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function QuestionsScreenStack() {
  return (
    <QuestionStackNav.Navigator initialRouteName="List">
      <QuestionStackNav.Screen
        name="List"
        component={list}
        options={navOptionHandler}
      />
      <QuestionStackNav.Screen
        name="Question Details"
        component={questionDetails}
        options={navOptionHandler}
      />
    </QuestionStackNav.Navigator>
  );
}

export default QuestionsScreenStack;
