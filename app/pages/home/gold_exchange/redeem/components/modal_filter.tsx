import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

import Box from '../../../../../../base/components/ui_component/box';
import ButtonIcon from '../../../../../../base/components/ui_component/button_icon';
import Divider from '../../../../../../base/components/ui_component/divider';

import stylesGlobal from '../../../../../../base/styles_global';

type Props = {
  open: boolean;
  setOpen: Function;
};

const ModalFilter = ({open, setOpen}: Props) => {
  const store = ['ร้านที่เข้าร่วมทั้งหมด', 'AURORA', 'GCAP'];

  const onSelectFilter = () => {
    setOpen(false);
  };

  const renderItem = () => {
    return store.map((item, idx) => {
      return (
        <TouchableOpacity onPress={onSelectFilter} key={`#${idx}`}>
          <Box h={12} />
          <Text style={{color: 'black'}}>{item}</Text>
          <Box h={12} />
          <Divider />
        </TouchableOpacity>
      );
    });
  };

  return (
    <Modal visible={open} transparent animationType="fade">
      <View style={{flex: 1, backgroundColor: '#00000020'}}>
        <View style={styles.modalFilter}>
          <View style={stylesGlobal.rowBetween}>
            <Box w={20} />

            <Text style={{fontSize: 16, color: 'black'}}>
              เลือกร้านที่ต้องการแลก
            </Text>

            <ButtonIcon
              size={25}
              name={'close'}
              color={'black'}
              onTap={() => setOpen(false)}
            />
          </View>

          <Box h={5} />
          {renderItem()}
          <Box h={20} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
  modalFilter: {
    flex: 1,
    top: 150,
    right: 10,
    padding: 15,
    elevation: 5,
    width: '80%',
    minHeight: 200,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'white',
  },
});
