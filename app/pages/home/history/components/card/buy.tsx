import React from 'react';
import {View} from 'react-native';
import {styles} from '../../style';
import RowData from '../row_data';

const CardBuy = () => {
  return (
    <View style={styles.card}>
      <RowData title={'วันที่ทำรายการ'} value={'29/06/2022'} />
      <RowData title={'เวลา'} value={'17:30:00'} />
      <RowData title={'น้ำหนักทองที่ซื้อ'} value={'2 บาททอง'} />
      <RowData title={'มูลค่า E-Gold ที่ได้รับ'} value={'2 E-Gold'} />
      <RowData title={'ราคา ณ ขณะทำการซื้อ'} value={'50,200.00 ฿'} />
      <RowData title={'รวม'} value={'50,200.00 ฿'} />
    </View>
  );
};

export default CardBuy;
