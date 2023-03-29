import {View} from 'react-native';
import React from 'react';

type Props = {
  h?: number;
  w?: number;
};

function Box(props: Props) {
  const {h, w} = props;
  return <View style={{height: h, width: w}} />;
}

export default Box;
