import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Modal, TextInput, KeyboardAvoidingView} from 'react-native';

import Box from '../../../../../../../base/components/ui_component/box';
import Divider from '../../../../../../../base/components/ui_component/divider';
import ButtonIcon from '../../../../../../../base/components/ui_component/button_icon';
import ButtonStyle from '../../../../../../../base/components/ui_component/button_style';

import {styles} from '../../../style';
import stylesGlobal from '../../../../../../../base/styles_global';
import {colorGold, colorGrey, colorRed} from '../../../../../../../base/color';

type Props = {
  open: boolean;
  setOpen: Function;
};

const DeliveryAddress = ({open, setOpen}: Props) => {
  const close = () => setOpen(false);

  return (
    <Modal visible={open} animationType="fade">
      <KeyboardAvoidingView
        style={{justifyContent: 'space-between', flex: 1, padding: 10}}>
        <View>
          <View style={stylesGlobal.rowBetween}>
            <ButtonIcon
              size={30}
              onTap={close}
              color={'grey'}
              name={'chevron-back'}
            />
            <Text style={stylesGlobal.textHeader}>ที่อยู่จัดส่ง</Text>
            <Box w={20} />
          </View>

          <View style={{padding: 10}}>
            <Box h={10} />
            <View style={stylesGlobal.row}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>
                ข้อมูลติดต่อ
              </Text>
              <Text style={{color: 'red'}}>*</Text>
            </View>

            <Box h={20} />
            <Text style={styles.text}>ชื่อ</Text>
            <TextInput placeholder="ชื่อ" />
            <Divider />

            <Box h={20} />
            <Text style={styles.text}>เบอร์ติดต่อ</Text>
            <TextInput placeholder="เบอร์โทรศัพท์ติดต่อ" />
            <Divider />

            <Box h={20} />
            <Text style={styles.text}>สถานที่จัดส่ง</Text>
            <Box h={10} />
            <View
              style={[
                stylesGlobal.rowBetween,
                {
                  padding: 10,
                  elevation: 1,
                  minHeight: 60,
                  borderRadius: 10,
                  backgroundColor: colorGrey,
                },
              ]}>
              <Ionicons size={25} color={colorRed} name={'location-sharp'} />
              <View style={{width: '80%'}}>
                <Text numberOfLines={3}>
                  188/10 ซอย ลาดไทย 24 แยก 5-1 แขวง พิทักโลก เขต บ้านฉัน กรุงเทพ
                  1978
                </Text>
              </View>
              <Ionicons size={20} color={'grey'} name={'chevron-forward'} />
            </View>

            <Box h={20} />
            <Text style={styles.text}>รายละเอียดที่อยู่เพิ่มเติม</Text>
            <TextInput placeholder="กรอกรายละเอียดช่องทางจัดส่งเพิ่มเติม" />
            <Divider />
          </View>
        </View>

        <ButtonStyle
          height={45}
          onTap={close}
          width={'100%'}
          title={'ยืนยัน'}
          colorTxt={'white'}
          backgroundColor={colorGold}
        />
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default DeliveryAddress;
