import React, {useLayoutEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Ems from './components/ems';
import Self from './components/self';
import RowData from '../../../history/components/row_data';
import ModalSummaryEms from './components/modal_summary_ems';
import ModalSummarySelf from './components/modal_summary_self';
import Box from '../../../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';

import {
  colorGold,
  colorGrey,
  colorTextTitle,
} from '../../../../../../base/color';
import {styles} from '../../style';
import stylesGlobal from '../../../../../../base/styles_global';

const DeliveryPage = () => {
  // Destructure the state from the route params
  const { params: { state } } = useRoute<any>();

  //State is Self
  const isSelf = state == 'self';

    // Use explicit types instead of `any`
  const navigation: any = useNavigation();

    // Use the ternary operator to set the title
    useLayoutEffect(() => {
      navigation.setOptions({
        title: state === 'self' ? 'รับด้วยตนเอง' : 'บริการจัดส่ง',
      });
    }, []);
    
  // Use destructuring to declare the states
  const [openSummarySelf, setOpenSummarySelf] = useState<boolean>(false);
  const [openSummaryEms, setOpenSummaryEms] = useState<boolean>(false);

  const onNext = () => {
    // Use the ternary operator to conditionally set the state
    isSelf ? setOpenSummarySelf(true) : setOpenSummaryEms(true);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[stylesGlobal.containerWhite, {padding: 15}]}>
        {!isSelf ? null : <Self />}

        <Text style={styles.text}>รับสินค้าจำนวน 1 รายการ</Text>
        <Box h={10} />

        <View style={[styles.cardBorder, {paddingVertical: 10}]}>
          <View style={{height: 60, width: 60}}></View>
          <Box w={20} />
          <View style={{flex: 1}}>
            <Text style={{color: colorTextTitle}}>
              MINI GLAM ข้อมือคอคริสตัลสมายลี่สีทอง ชุบทองคำขาว
            </Text>
            <Text style={styles.text}>x 1</Text>
          </View>
        </View>

        <Box h={22} />
        <Text style={styles.textBtn}>รายละเอียดสินค้า</Text>

        <Box h={20} />
        <RowData title={'น้ำหนักทอง '} value={'1 บาททอง'} />
        <Box h={10} />
        <RowData title={'รหัสสินค้า '} value={'xxxxxxxxx'} />
        <Box h={10} />
        <RowData title={'ชื่อสินค้า  '} value={'xxxxxxxxx'} />
        <Box h={10} />
        <RowData title={'ราคาทอง/บาท '} value={'00,000.00 ฿'} />
        <Box h={10} />
        <RowData title={'คำกำเหน็จ '} value={'000.00 ฿'} />
        <Box h={10} />
        <RowData title={'ค่าธรรมเนียมให้บริการ '} value={'000.00 ฿'} />
        <Box h={10} />
        <RowData title={'ค่าธรรมเนียมพิเศษ(ลายทอง) '} value={'000.00 ฿'} />
        <Box h={10} />
        <RowData title={'รวม '} value={'00,000.00 ฿'} />
        <Box h={10} />

        <View
          style={{
            marginHorizontal: -15,
            paddingHorizontal: 15,
            backgroundColor: isSelf ? 'white' : colorGrey,
          }}>
          {isSelf ? null : <Ems />}
          <Box h={!isSelf ? 60 : 20} />

          <ButtonStyle
            height={45}
            width={'100%'}
            onTap={onNext}
            title={'ต่อไป'}
            colorTxt={'white'}
            backgroundColor={colorGold}
          />
        </View>

        <ModalSummarySelf open={openSummarySelf} setOpen={setOpenSummarySelf} />
        <ModalSummaryEms open={openSummaryEms} setOpen={setOpenSummaryEms} />
      </View>
    </ScrollView>
  );
};

export default DeliveryPage;
