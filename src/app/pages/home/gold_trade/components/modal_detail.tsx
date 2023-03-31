import React from 'react';
import {View, Text, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import RowData from '../../history/components/row_data';
import Box from '../../../../../base/components/ui_component/box';
import Row from '../../../../../base/components/ui_component/row';
import ButtonStyle from '../../../../../base/components/ui_component/button_style';

import {styles} from '../style';
import stylesGlobal from '../../../../../base/styles_global';
import {Otp} from '../../../../../generated/state';
import {colorGold, colorLightGrey} from '../../../../../base/color';

type Props = {
  isBuy: boolean;
  open: boolean;
  setOpen: Function;
};

function ModalDetail({open, setOpen, isBuy}: Props) {
  const navigation: any = useNavigation();

  function goToOTP() {
    setOpen(false);
    navigation.push('OTP', {phone: '0008887765', state: Otp.DETAIL_TRADE});
  }

  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#00000060',
        }}>
        <View style={styles.card}>
          <Text style={styles.textLabel2}>
            ตรวจสอบให้แน่ใจว่าคุณป้อนข้อมูลของคุณถูกต้อง
          </Text>
          <Box h={30} />
          <RowData title={'จำนวนเงิน'} value={'25,100.00'} />
          <RowData
            title={isBuy ? 'น้ำหนักทองที่ซื้อ' : 'น้ำหนักทองที่ขายออก'}
            value={'2 บาททอง'}
          />
          <RowData title={'E-Gold'} value={'1 E-Gold'} />
          <RowData title={'ราคาทอง/บาท'} value={'25,100.00 ฿'} />
          <RowData title={'รวม'} value={'25,100.00 ฿'} isBold={true} />
          <Box h={20} />
          <Row style={stylesGlobal.evenly}>
            <ButtonStyle
              height={40}
              width={'45%'}
              title={'ยกเลิก'}
              colorTxt={'black'}
              onTap={() => setOpen(false)}
              backgroundColor={colorLightGrey}
            />
            <ButtonStyle
              height={40}
              width={'45%'}
              title={'ยืนยัน'}
              onTap={goToOTP}
              colorTxt={'white'}
              backgroundColor={colorGold}
            />
          </Row>
          <Box h={10} />
        </View>
      </View>
    </Modal>
  );
}

export default ModalDetail;
