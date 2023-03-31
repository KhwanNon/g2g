import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, TouchableOpacity} from 'react-native';

import stylesGlobal from '../../styles_global';

import Box from './box';
import Row from './row';
import Divider from './divider';
import {colorTextLabel} from '../../color';

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
          <Text style={{color: colorTextLabel}}>{title}</Text>
        </Row>
        <Ionicons size={20} color={'grey'} name={'chevron-forward'} />
      </Row>
      <Box h={15} />
      <Divider />
    </TouchableOpacity>
  );
}

export default ListTileBank;
