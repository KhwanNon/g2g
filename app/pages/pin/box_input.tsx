import React from 'react';
import {styles} from './style';
import {View} from 'react-native';
import stylesGlobal from '../../../base/styles_global';
import Box from '../../../base/components/ui_component/box';
import {colorGold, colorLightGrey} from '../../../base/color';

type Props = {
  number: string;
};

const BoxInput = ({number}: Props) => {
  return (
    <View style={{...stylesGlobal.rowCenter, width: '100%'}}>
      {BoxStyle(number[0])}
      <Box w={25} />
      {BoxStyle(number[1])}
      <Box w={25} />
      {BoxStyle(number[2])}
      <Box w={25} />
      {BoxStyle(number[3])}
      <Box w={25} />
      {BoxStyle(number[4])}
      <Box w={25} />
      {BoxStyle(number[5])}
    </View>
  );
};

const BoxStyle = (value?: string) => {
  return (
    <View
      style={{
        ...styles.boxCircle,
        backgroundColor: value ? colorGold : colorLightGrey,
      }}
    />
  );
};

export default BoxInput;
