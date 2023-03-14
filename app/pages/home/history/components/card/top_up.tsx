import React from 'react';
import {styles} from '../../style';
import RowData from '../row_data';
import {StyleSheet, View} from 'react-native';

const CardTopUp = () => {
  return (
    <View style={styles.card}>
      <RowData title={'ช่องทางบริการ'} value={'ธนาคาร'} />
      <RowData title={'จำนวนเงินเติมเข้า'} value={'00,000.00 ฿'} />
      <RowData title={'วันที่ทำรายการ'} value={'29/06/2022'} />
      <RowData title={'เวลา'} value={'17:30:00'} />
    </View>
  );
};

export default CardTopUp;

const myStyles = StyleSheet.create({});
