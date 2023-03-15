import React from 'react';
import {View} from 'react-native';
import RowData from '../row_data';
import {styles} from '../../style';

const CardDepositGold = () => {
  return (
    <View style={styles.card}>
      <RowData title={'วันที่ทำรายการ'} value={'29/06/2022'} />
      <RowData title={'เวลา'} value={'17:30:00'} />
      <RowData title={'ช่องทางบริการ'} value={'ธนาคาร'} />
      <RowData title={'น้ำหนักทองที่ฝาก'} value={'1 บาท'} />
      <RowData title={'ราคาทองที่ฝาก'} value={'20,000 ฿'} />
      <RowData title={'ระยะเวลาที่ต้องซื้อคืน'} value={'5 เดือน'} />
      <RowData title={'อัตตราดอกเบี้ย 1.25% '} value={'1,250 ฿'} />
      <RowData title={'รวมราคาสุทธิ'} value={'21,250 ฿'} />
    </View>
  );
};

export default CardDepositGold;
