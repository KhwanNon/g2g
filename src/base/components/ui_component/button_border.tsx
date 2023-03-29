import Box from './box';
import React from 'react';
import {colorTextTitle} from '../../color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  title: string;
  width: number | string;
  height: number | string;
  colorBorder?: string;
};

function ButtonBorder({title, width, height, colorBorder}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: width,
          height: height,
          borderColor: colorBorder ?? 'lightgrey',
        },
      ]}>
      <Ionicons size={22} color={'black'} name={'add'} />
      <Box w={5} />
      <Text style={styles.textTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    color: colorTextTitle,
  },
  container: {
    borderWidth: 1,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default ButtonBorder;
