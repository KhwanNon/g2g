import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import stylesGlobal from '../../styles_global';

import Box from './box';
import Row from './row';
import Divider from './divider';

type Props = {
  title: string;
  onPress: () => void;
  state: 'bank' | 'other';
};

function ListTileBank({state, title, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box h={15} />
      <Row style={stylesGlobal.between}>
        <Row>
          <Text>{title}</Text>
        </Row>
        <Ionicons size={20} color={'lightgrey'} name={'chevron-forward'} />
      </Row>
      <Box h={15} />
      <Divider />
    </TouchableOpacity>
  );
}

export default ListTileBank;
