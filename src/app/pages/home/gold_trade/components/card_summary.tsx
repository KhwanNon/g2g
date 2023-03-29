import React from 'react';
import {styles} from '../style';
import {View, Text} from 'react-native';
import RowData from '../../history/components/row_data';
import Box from '../../../../../base/components/ui_component/box';

type Props = {
  isBuy: boolean;
};

function CardSummary({isBuy}: Props) {
  return (
    <View style={styles.card}>
      <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
        {`สรุปรายการ${isBuy ? 'ซื้อ' : 'ขาย'}`}
      </Text>
      <Box h={10} />
      <RowData title={'จำนวนเงิน'} value={'25,100.00'} />
      <RowData
        title={isBuy ? 'น้ำหนักทองที่ซื้อ' : 'น้ำหนักทองที่ขายออก'}
        value={'2 บาททอง'}
      />
      <RowData title={'E-Gold'} value={'1 E-Gold'} />
      <RowData title={'ราคาทอง/บาท'} value={'25,100.00 ฿'} />
      <RowData title={'รวม'} value={'25,100.00 ฿'} isBold={true} />
    </View>
  );
}

export default CardSummary;
