import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../style';
import Box from '../../../../../base/components/ui_component/box';
import RowData from '../../history/components/row_data';
import stylesGlobal from '../../../../../base/styles_global';

const CardSummaryDeposit = () => {
  return (
    <View style={[styles.cardBorderSummary]}>
      <Text style={[styles.textLabel, {fontSize: 17}]}>สรุปรายการฝากทอง</Text>
      <Box h={20} />
      <RowData title={'น้ำหนักทองที่ฝาก'} value={'1 บาท'} />
      <Box h={5} />
      <RowData title={'ราคาทองที่ฝาก'} value={'20,000฿'} />
      <Box h={5} />
      <RowData title={'ระยะเวลาที่ต้องซื้อคืน'} value={'5 เดือน'} />
      <Box h={5} />
      <RowData title={'อัตตราดอกเบี้ย 1.25% ต่อเดือน'} value={'1,250฿'} />
      <Box h={5} />
      <RowData title={'รวมราคาสุทธิ'} value={'21,250฿'} />
      <Box h={10} />
      <Text style={[styles.textLabel, {fontSize: 17}]}>
        สรุปรายการที่ต้องซื้อคืน
      </Text>
      <Box h={10} />
      <RowData title={'ยอดที่ต้องชำระ'} value={'21,250฿'} />
      <Box h={5} />
    </View>
  );
};

export default CardSummaryDeposit;
