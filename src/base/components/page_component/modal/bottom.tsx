import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

import Box from '../../ui_component/box';
import Row from '../../ui_component/row';
import Divider from '../../ui_component/divider';
import ButtonIcon from '../../ui_component/button_icon';

import stylesGlobal from '../../../styles_global';

export interface ModelDataModalBottom {
  state: string;
  title: string;
}

type Props = {
  title: string;
  open: boolean;
  setOpen: Function;
  state: 'redeem' | 'editPhone';
  items: ModelDataModalBottom[];
};

function ModalBottom({open, setOpen, items, state, title}: Props) {
  const navigation: any = useNavigation();

  function onSelectFilter(item: string) {
    setOpen(false);
    if (state === 'redeem') {
      navigation.push('DetailsRedeem', {state: item});
    }
  }

  return (
    <Modal visible={open} transparent animationType="fade">
      <View style={{flex: 1, backgroundColor: '#00000080'}}>
        <View style={styles.modalBottom}>
          <Row style={stylesGlobal.between}>
            <Text style={{fontSize: 16, color: 'black'}}>{title}</Text>

            <ButtonIcon
              size={25}
              color={'black'}
              name={'close'}
              onTap={() => setOpen(false)}
            />
          </Row>

          <Box h={10} />
          {items.map((item, idx) => {
            return (
              <TouchableOpacity
                key={`#${idx}`}
                onPress={() => onSelectFilter(item.state)}>
                <Box h={20} />
                <Row style={stylesGlobal.between}>
                  <Text style={{color: 'black'}}>{item.title}</Text>
                  <Ionicons size={22} color={'grey'} name={'chevron-forward'} />
                </Row>
                <Box h={12} />
                <Divider />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBottom: {
    flex: 1,
    bottom: 0,
    padding: 15,
    width: '100%',
    minHeight: 200,
    position: 'absolute',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: 'white',
  },
});

export default ModalBottom;
