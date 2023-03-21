import React from 'react';
import {styles} from './style';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../base/styles_global';

type Props = {
  number: string;
};

const BoxInput = ({number}: Props) => {
  const BoxStyle = (value?: string) => {
    return (
      <View style={styles.boxInput}>
        <Text style={styles.textTitle}>{value?.toString()}</Text>
      </View>
    );
  };

  const boxes = [...Array(6).keys()].map(i => BoxStyle(number[i]));

  return <View style={[stylesGlobal.rowAround, {width: '100%'}]}>{boxes}</View>;
};

export default BoxInput;
