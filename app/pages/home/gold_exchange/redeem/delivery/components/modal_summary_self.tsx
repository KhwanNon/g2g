import React from 'react';
import {View, Text, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import RowData from '../../../../history/components/row_data';
import Box from '../../../../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../../../../base/components/ui_component/button_style';

import {styles} from '../../../style';
import stylesGlobal from '../../../../../../../base/styles_global';
import {colorGold, colorLightGrey} from '../../../../../../../base/color';

type Props = {
  open: boolean;
  setOpen: Function;
};

const ModalSummarySelf = ({open, setOpen}: Props) => {
  const navigation: any = useNavigation();
  const close = () => setOpen(false);

  const onConfirm = () => {
    close();
    navigation.push('OTP', {phone: '0989878764'});
  };

  return (
    <Modal visible={open} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000080',
        }}>
        <View style={styles.containerModal}>
          <View style={stylesGlobal.rowCenter}>
            <Text style={styles.textBtn}>สรุปรายละเอียด</Text>
          </View>

          <Box h={20} />
          <RowData title={'รหัสสินค้า'} value={'xxxxxxxxx'} />
          <Box h={7} />
          <RowData title={'ชื่อสินค้า'} value={'xxxxxxxxx'} />
          <Box h={7} />
          <RowData title={'ผู้ให้จำหน่าย'} value={'Aurora'} />
          <Box h={7} />
          <RowData title={'น้ำหนักทอง'} value={'1 บาททอง'} />
          <Box h={7} />
          <RowData title={'ราคาทอง'} value={'00,000.00 ฿'} />
          <Box h={7} />
          <RowData title={'คำกำเหน็จ'} value={'000.00 ฿'} />
          <Box h={7} />
          <RowData title={'ค่าธรรมเนียมให้บริการ'} value={'000.00 ฿'} />
          <Box h={7} />
          <RowData title={'ค่าธรรมเนียมพิเศษ(ลายทอง)'} value={'000.00 ฿'} />
          <Box h={7} />
          <RowData title={'รับได้ตั้งแต่วันที่'} value={'29/06/2022'} />
          <Box h={7} />
          <RowData title={'เลือกรับสินค้า'} value={'รับด้วยตนเอง'} />
          <Box h={7} />
          <RowData title={'จังหวัด'} value={'กรุงเทพ'} />
          <Box h={7} />
          <RowData title={'สาขา'} value={'xxxxxx'} />
          <Box h={7} />
          <RowData title={'รหัสยืนยันรับสินค้า'} value={''} />
          <RowData title={'xx16145xxx15612xxx0156x'} value={''} />
          <Box h={30} />

          <ButtonStyle
            height={45}
            width={'100%'}
            title={'ยืนยัน'}
            onTap={onConfirm}
            colorTxt={'white'}
            backgroundColor={colorGold}
          />

          <Box h={15} />
          <ButtonStyle
            height={45}
            onTap={close}
            width={'100%'}
            title={'ยกเลิก'}
            colorTxt={'black'}
            backgroundColor={colorLightGrey}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalSummarySelf;
