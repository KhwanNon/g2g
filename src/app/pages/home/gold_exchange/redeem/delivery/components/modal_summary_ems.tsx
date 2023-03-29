import React from 'react';
import {View, Text, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colorGold, colorLightGrey} from '../../../../../../../base/color';

import RowData from '../../../../history/components/row_data';
import Box from '../../../../../../../base/components/ui_component/box';
import Row from '../../../../../../../base/components/ui_component/row';
import ButtonStyle from '../../../../../../../base/components/ui_component/button_style';

import {styles} from '../../../style';
import stylesGlobal from '../../../../../../../base/styles_global';

type Props = {
  open: boolean;
  setOpen: Function;
};

const ModalSummaryEms = ({open, setOpen}: Props) => {
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
          <Row style={stylesGlobal.center}>
            <Text style={styles.textBtn}>สรุปรายละเอียด</Text>
          </Row>

          <Box h={20} />
          <RowData title={'รหัสสินค้า'} value={'xxxxxxxxx'} />
          <Box h={7} />
          <RowData title={'ชื่อสินค้า'} value={'xxxxxxxxx'} />
          <Box h={7} />
          <RowData title={'น้ำหนักทอง'} value={'1 บาททอง'} />
          <Box h={7} />
          <RowData title={'ราคาทอง'} value={'00,000.00 ฿'} />
          <Box h={7} />
          <RowData title={'คำกำเหน็จ'} value={'000.00 ฿'} />
          <Box h={7} />
          <RowData title={'เลือกรับสินค้า'} value={'บริการจัดส่ง'} />
          <Box h={7} />
          <RowData title={'แทรคกิ้ง'} value={'XXXXXXXXXXXXXXXX'} />
          <Box h={7} />
          <RowData title={'ที่อยู่จัดส่ง'} value={''} />
          <RowData
            title={
              '188/10 ซอย ลาดไทย 24 แยก 5-1 แขวง พิทักโลก เขต บ้านฉัน กรุงเทพ 1978 '
            }
            value={''}
          />
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

export default ModalSummaryEms;
