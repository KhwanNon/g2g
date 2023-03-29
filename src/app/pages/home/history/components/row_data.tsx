import React from 'react';
import {View, Text} from 'react-native';
import {colorTextTitle} from '../../../../../base/color';
import Row from '../../../../../base/components/ui_component/row';
import stylesGlobal from '../../../../../base/styles_global';

type Props = {
  title: string;
  value: string;
  color?: string;
  isBold?: boolean;
};

function RowData({title, value, color, isBold}: Props) {
  return (
    <Row style={[stylesGlobal.between, {marginBottom: 10}]}>
      <Text
        style={{
          fontSize: 16,
          color: colorTextTitle,
          fontWeight: isBold ? 'bold' : 'normal',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: color ?? colorTextTitle,
          fontWeight: isBold ? 'bold' : 'normal',
        }}>
        {value}
      </Text>
    </Row>
  );
}

export default RowData;
