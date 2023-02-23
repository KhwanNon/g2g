import React from 'react';
import {styles} from './style';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../base/styles_global';

type Props = {
  number: string;
};

const BoxInput = ({number}: Props) => {
  return (
    <View style={{...stylesGlobal.rowAround, width: '100%'}}>
      {BoxStyle(number[0])}
      {BoxStyle(number[1])}
      {BoxStyle(number[2])}
      {BoxStyle(number[3])}
      {BoxStyle(number[4])}
      {BoxStyle(number[5])}
    </View>
  );
};

const BoxStyle = (value?: string) => {
  return (
    <View style={styles.boxInput}>
      <Text style={styles.textTitle}>{value ? `${value}` : ''}</Text>
    </View>
  );
};

export default BoxInput;
