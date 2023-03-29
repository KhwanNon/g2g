import React from 'react';
import {colorGrey} from '../../../color';
import Box from '../../ui_component/box';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Row from '../../ui_component/row';

type Props = {
  items: any[];
  open: boolean;
  title: string;
  setOpen: Function;
  onPress: () => void;
};

const Dropdown = ({open, setOpen, items, onPress, title}: Props) => {
  const renderItem = () =>
    items.map((item, idx) => {
      return (
        <TouchableOpacity onPress={onPress} key={`#${idx}`} style={styles.row}>
          <Box h={12} />
          <Text style={{color: 'black'}}>{item}</Text>
          <Box h={12} />
        </TouchableOpacity>
      );
    });

  return (
    <Modal visible={open} transparent animationType="fade">
      <View style={styles.container}>
        <View style={styles.card}>
          <Box h={12} />
          <Row style={[{paddingLeft: 20}]}>
            <Text style={{fontSize: 18, color: 'black'}}>{title}</Text>
          </Row>
          <Box h={10} />
          <View style={styles.divider} />
          {renderItem()}
        </View>
      </View>
    </Modal>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    minWidth: '80%',
    backgroundColor: colorGrey,
  },
  row: {
    minWidth: '80%',
    borderRadius: 10,
    paddingLeft: 20,
  },
  card: {
    maxHeight: 400,
    minWidth: '80%',
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000020',
  },
});
