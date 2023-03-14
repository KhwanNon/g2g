import React from 'react';
import {View, Text} from 'react-native';
import {colorTextTitle} from '../../../../../base/color';
import stylesGlobal from '../../../../../base/styles_global';

type Props = {
  title: string;
  value: string;
  color?: string;
};

const RowData = ({title, value, color}: Props) => {
  return (
    <View style={{...stylesGlobal.rowBetween, marginBottom: 10}}>
      <Text style={{color: colorTextTitle, fontSize: 15}}>{title}</Text>
      <Text style={{color: color ?? colorTextTitle, fontSize: 15}}>
        {value}
      </Text>
    </View>
  );
};

export default RowData;
