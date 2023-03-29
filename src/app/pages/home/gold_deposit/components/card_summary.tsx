import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../style';

import RowData from '../../history/components/row_data';
import Box from '../../../../../base/components/ui_component/box';

type Props = {
  done: boolean;
};

function CardSummaryDeposit({done}: Props) {
  function renderHeaderDone() {
    return (
      <>
        <Box h={10} />
        <Text style={styles.textHeader}>21,250฿</Text>
        <Box h={10} />
        <Text style={{alignSelf: 'center'}}>
          วันครบกำหนดซื้อคืนทอง 00 ก.ก. 0000
        </Text>
        <Box h={20} />
      </>
    );
  }

  function renderRowDone() {
    return (
      <>
        <Box h={5} />
        <RowData title={'ดอกเบี้ยเมื่อครบกำหนด'} value={'+1,250 ฿'} />
        <Box h={5} />
        <RowData title={'ดอกเบี้ย ณ ปัจจุบัน'} value={'+125 ฿'} />
      </>
    );
  }

  return (
    <View style={[styles.cardBorderSummary]}>
      {done ? renderHeaderDone() : null}

      <Text style={[styles.textLabel16]}>สรุปรายการฝากทอง</Text>

      <Box h={20} />
      <RowData title={'น้ำหนักทองที่ฝาก'} value={'1 บาท'} />

      <Box h={5} />
      <RowData title={'ราคาทองที่ฝาก'} value={'20,000 ฿'} />

      <Box h={5} />
      <RowData title={'ระยะเวลาที่ต้องซื้อคืน'} value={'5 เดือน'} />

      <Box h={5} />
      <RowData title={'อัตตราดอกเบี้ย 1.25% ต่อเดือน'} value={'1,250 ฿'} />

      {done ? renderRowDone() : null}

      <Box h={5} />
      <RowData title={'รวมราคาสุทธิ'} value={'21,250 ฿'} />
      <Box h={10} />

      <Text style={[styles.textLabel16]}>สรุปรายการที่ต้องซื้อคืน</Text>

      <Box h={10} />
      <RowData title={'ยอดที่ต้องชำระ'} value={'21,250 ฿'} />
      <Box h={5} />
    </View>
  );
}

export default CardSummaryDeposit;
