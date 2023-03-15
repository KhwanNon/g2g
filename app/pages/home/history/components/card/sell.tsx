import React from 'react';
import {View} from 'react-native';
import RowData from '../row_data';
import {styles} from '../../style';

const CardSell = () => {
  return (
    <View style={styles.card}>
      <RowData title={'วันที่ทำรายการ'} value={'29/06/2022'} />
      <RowData title={'เวลา'} value={'17:30:00'} />
      <RowData title={'น้ำหนักทองที่ขาย'} value={'2 บาททอง'} />
      <RowData title={'มูลค่า E-Gold ที่ขายออก'} value={'2 E-Gold'} />
      <RowData title={'ราคา ณ ขณะทำการขายออก'} value={'50,200.00 ฿'} />
      <RowData title={'รวม'} value={'50,200.00 ฿'} />
    </View>
  );
};

export default CardSell;
