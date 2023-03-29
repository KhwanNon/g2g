import React from 'react';
import {styles} from './style';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../base/styles_global';
import Row from '../../../base/components/ui_component/row';

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

  return <Row style={[stylesGlobal.around, {width: '100%'}]}>{boxes}</Row>;
};

export default BoxInput;
