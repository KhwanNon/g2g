import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import stylesGlobal from '../../styles_global';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Divider from './divider';
import Box from './box';

type Props = {
  title: string;
  onPress: () => void;
  state: 'bank' | 'other';
};

const ListTileBank = ({state, title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box h={10} />
      <View style={stylesGlobal.rowBetween}>
        <View style={stylesGlobal.row}>
          <Text>{title}</Text>
        </View>
        <Ionicons size={20} color={'lightgrey'} name={'chevron-forward'} />
      </View>
      <Box h={10} />
      <Divider />
    </TouchableOpacity>
  );
};

export default ListTileBank;

const styles = StyleSheet.create({});
