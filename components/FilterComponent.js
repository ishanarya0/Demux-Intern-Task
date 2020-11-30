import React from 'react';
import { View, Modal, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import ModalComponent from './ModalComponent';

const FilterComponent = ({ isFilter, setisFilter }) => {
  return(
  <View>
    <Modal
      visible={isFilter}
      animationType="fade"
      transparent
      onRequestClose={() => {
        setisFilter(false);
      }}
    >
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        onPressOut={() => {
          setisFilter(false);
        }}
      >
        <ScrollView directionalLockEnabled>
          <TouchableWithoutFeedback>
            <ModalComponent />
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  </View>
);

};

export default FilterComponent;

