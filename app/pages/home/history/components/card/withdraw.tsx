import React from 'react';
import {View} from 'react-native';
import RowData from '../row_data';
import {styles} from '../../style';
import {colorBlue, colorRed, colorYellow} from '../../../../../../base/color';

const CardWithdraw = () => {
  const changeColorText = (status: string): string => {
    let map: any = {
      reject: colorRed,
      pending: colorBlue,
      success: colorYellow,
    };
    return map[status] || colorBlue;
  };

  return (
    <View style={styles.card}>
      <RowData title={'ช่องทางบริการ'} value={'ธนาคาร'} />
      <RowData title={'เลขบัญชี'} value={'000 000 0000'} />
      <RowData title={'จำนวนเงินถอนออก'} value={'00,000.00 ฿'} />
      <RowData title={'วันที่ทำรายการ'} value={'29/06/2022'} />
      <RowData title={'เวลา'} value={'17:30:00'} />
      <RowData
        title={'สถานะ'}
        value={'รอดำนเนิการ'}
        color={changeColorText('pending')}
      />
    </View>
  );
};

export default CardWithdraw;
