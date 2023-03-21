import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity} from 'react-native';

import LineChartComponemt from './line_chart';
import Box from '../../../../base/components/ui_component/box';

import {
  colorRed,
  colorGold2,
  colorDarkGold,
  colorTextTitle,
} from '../../../../base/color';
import {styles} from '../style';
import {DEVICE_WIDTH} from '../../../../base/constant';
import stylesGlobal from '../../../../base/styles_global';

const GraphGold = () => {
  const buttonBuySell = (state: 'buy' | 'sell', value: string) => {
    return (
      <TouchableOpacity
        style={[
          styles.buttonBuySell,
          {
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: state == 'buy' ? colorDarkGold : colorGold2,
          },
        ]}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>฿ {value}</Text>
        <Text style={{color: 'white', fontSize: 10}}>
          {state == 'buy' ? 'รับซื้อทองคำ' : 'ขายออกทองคำ'}
        </Text>
      </TouchableOpacity>
    );
  };

  const rowBuySell = (title: string, value: string) => {
    return (
      <View style={[stylesGlobal.rowBetween, {paddingHorizontal: 15}]}>
        <View style={[stylesGlobal.row, {alignItems: 'flex-end'}]}>
          <View
            style={{
              width: 3,
              height: 40,
              backgroundColor: colorTextTitle,
            }}
          />
          <Box w={10} />
          <Text style={{color: colorTextTitle}}>{title}</Text>
        </View>
        <View style={[stylesGlobal.row, {alignItems: 'flex-end'}]}>
          <Text style={{color: colorTextTitle}}>{value}</Text>
          <Box w={10} />
          <Text style={{color: colorTextTitle, fontWeight: 'bold'}}>฿</Text>
          <Box w={10} />
          <Text style={{color: colorTextTitle}}>บาททอง</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Box h={10} />
      {rowBuySell('รับซื้อ', '25,100.00')}
      <Box h={10} />
      {rowBuySell('ขายออก ', '25,100.00')}
      <Box h={25} />
      <View
        style={[stylesGlobal.rowBetween, {paddingLeft: 30, paddingRight: 15}]}>
        <Text style={{color: colorTextTitle}}>ราคาเปลี่ยนแปลงวันนี้</Text>
        <View style={stylesGlobal.row}>
          <Ionicons size={22} color={colorRed} name={'caret-down-sharp'} />
          <Box w={5} />
          <Text style={{color: colorRed}}>- 50</Text>
        </View>
      </View>
      <View style={{padding: 15}}>
        <LineChartComponemt width={DEVICE_WIDTH * 0.8} />
      </View>
      <View style={[stylesGlobal.rowEvenly, {marginTop: -10}]}>
        {buttonBuySell('buy', '25,000.00')}
        {buttonBuySell('sell', '25,000.00')}
      </View>
      <Box h={50} />
    </View>
  );
};

export default GraphGold;
