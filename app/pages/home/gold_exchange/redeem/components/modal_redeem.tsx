import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

import Box from '../../../../../../base/components/ui_component/box';
import ButtonIcon from '../../../../../../base/components/ui_component/button_icon';
import Divider from '../../../../../../base/components/ui_component/divider';

import stylesGlobal from '../../../../../../base/styles_global';
import {useNavigation} from '@react-navigation/native';

type Props = {
  open: boolean;
  setOpen: Function;
};

const ModalRedeem = ({open, setOpen}: Props) => {
  const navigation: any = useNavigation();

  const store = [
    {
      state: 'self',
      title: 'รับด้วยตนเองที่ร้าน',
    },
    {
      state: 'ems',
      title: 'บริการจัดส่ง',
    },
  ];

  const onSelectFilter = (item: string) => {
    setOpen(false);
    navigation.push('DetailsRedeem', {state: item});
  };

  return (
    <Modal visible={open} transparent animationType="fade">
      <View style={{flex: 1, backgroundColor: '#00000080'}}>
        <View style={styles.modalRedeem}>
          <View style={stylesGlobal.rowBetween}>
            <Text style={{fontSize: 16, color: 'black'}}>
              เลือกวิธีรับทองคำ
            </Text>

            <ButtonIcon
              size={25}
              name={'close'}
              color={'black'}
              onTap={() => setOpen(false)}
            />
          </View>

          <Box h={15} />
          {store.map((item, idx) => {
            return (
              <TouchableOpacity
                key={`#${idx}`}
                onPress={() => onSelectFilter(item.state)}>
                <Box h={12} />
                <View style={stylesGlobal.rowBetween}>
                  <Text style={{color: 'black'}}>{item.title}</Text>
                  <Ionicons size={22} color={'grey'} name={'chevron-forward'} />
                </View>
                <Box h={12} />
                <Divider />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default ModalRedeem;

const styles = StyleSheet.create({
  modalRedeem: {
    flex: 1,
    bottom: 0,
    padding: 15,
    width: '100%',
    minHeight: 240,
    position: 'absolute',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: 'white',
  },
});
