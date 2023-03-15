import React from 'react';
import {styles} from '../style';
import {View, Text} from 'react-native';
import RowData from '../../history/components/row_data';
import Box from '../../../../../base/components/ui_component/box';

const CardSummary = () => {
  return (
    <View style={styles.card}>
      <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
        สรุปรายการซื้อ
      </Text>
      <Box h={10} />
      <RowData title={'จำนวนเงิน'} value={'25,100.00'} />
      <RowData title={'น้ำหนักทองที่ซื้อ'} value={'2 บาททอง'} />
      <RowData title={'E-Gold'} value={'1 E-Gold'} />
      <RowData title={'ราคาทอง/บาท'} value={'25,100.00 ฿'} />
      <RowData title={'รวม'} value={'25,100.00 ฿'} />
    </View>
  );
};

export default CardSummary;
