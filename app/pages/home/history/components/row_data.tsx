import React from 'react';
import {View, Text} from 'react-native';
import {colorTextTitle} from '../../../../../base/color';
import stylesGlobal from '../../../../../base/styles_global';

type Props = {
  title: string;
  value: string;
  color?: string;
  isBold?: boolean;
};

const RowData = ({title, value, color, isBold}: Props) => {
  return (
    <View style={[stylesGlobal.rowBetween, {marginBottom: 10}]}>
      <Text
        style={{
          fontSize: 17,
          color: colorTextTitle,
          fontWeight: isBold ? 'bold' : 'normal',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: color ?? colorTextTitle,
          fontWeight: isBold ? 'bold' : 'normal',
        }}>
        {value}
      </Text>
    </View>
  );
};

export default RowData;
