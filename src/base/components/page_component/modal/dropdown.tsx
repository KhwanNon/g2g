import React from 'react';
import {colorGrey} from '../../../color';
import Box from '../../ui_component/box';
import Row from '../../ui_component/row';
import ButtonIcon from '../../ui_component/button_icon';

import {
  Text,
  View,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import stylesGlobal from '../../../styles_global';

type Props = {
  title: string;
  items: any[];
  state?: string;
  open: boolean;
  setOpen: Function;
  setData: Function;
  maxHeight?: number;
};

function Dropdown({title, open, state, items, setOpen, setData}: Props) {
  function onSetData(data: any) {
    setData(data);
    setOpen(false);
  }

  function renderItem() {
    return items.map((item, idx) => {
      return (
        <TouchableOpacity
          onPress={() => onSetData(item)}
          key={`#${idx}`}
          style={styles.row}>
          <Box h={12} />
          <Text style={{color: 'black'}}>
            {state === 'address' ? item.name_th : item}
          </Text>
          <Box h={12} />
        </TouchableOpacity>
      );
    });
  }

  return (
    <Modal visible={open} transparent animationType="fade">
      <View style={styles.container}>
        <View style={{...styles.card, maxHeight: items.length * 40 + 70}}>
          <Box h={12} />
          <Row
            style={[stylesGlobal.between, {paddingLeft: 20, paddingRight: 10}]}>
            <Text style={{fontSize: 18, color: 'black'}}>{title}</Text>
            <ButtonIcon
              size={25}
              color={'grey'}
              name={'close'}
              onTap={() => setOpen(false)}
            />
          </Row>
          <Box h={10} />
          <View style={styles.divider} />
          <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            {renderItem()}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    minWidth: '90%',
    backgroundColor: colorGrey,
  },
  row: {
    minWidth: '80%',
    borderRadius: 10,
    paddingLeft: 20,
  },
  card: {
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

export default Dropdown;
