import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity} from 'react-native';

import LineChartComponemt from './line_chart';
import Row from '../../../../base/components/ui_component/row';
import Box from '../../../../base/components/ui_component/box';

import {
  colorRed,
  colorGold2,
  colorTextTitle,
  colorDarkGold,
} from '../../../../base/color';
import {styles} from '../style';
import {DEVICE_WIDTH} from '../../../../base/constant';
import stylesGlobal from '../../../../base/styles_global';

function GraphGold() {
  const [data, setData] = useState<any>(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetchGold();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // function fetchGold() {
  //   var myHeaders = new Headers();
  //   myHeaders.append('x-access-token', 'goldapi-b8arrlftl74vk-io');
  //   myHeaders.append('Content-Type', 'application/json');

  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow',
  //   };
  

  //   fetch('https://www.goldapi.io/api/XAU/THB', requestOptions)
  //     .then(response => response)
  //     .then(async result => {
  //       const json = await result.json();
  //       setData(json);
  //     })
  //     .catch(error => console.log('error', error));
  // }

  function buttonBuySell(state: 'buy' | 'sell', value: string) {
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
  }

  function rowBuySell(title: string, value: string) {
    return (
      <Row style={[stylesGlobal.between, {paddingHorizontal: 15}]}>
        <Row style={[{alignItems: 'flex-end'}]}>
          <View
            style={{
              width: 3,
              height: 40,
              backgroundColor: colorTextTitle,
            }}
          />
          <Box w={10} />
          <Text style={{color: colorTextTitle}}>{title}</Text>
        </Row>
        <Row style={[{alignItems: 'flex-end'}]}>
          <Text style={{color: colorTextTitle}}>{value}</Text>
          <Box w={10} />
          <Text style={{color: colorTextTitle, fontWeight: 'bold'}}>฿</Text>
          <Box w={10} />
          <Text style={{color: colorTextTitle}}>บาททอง</Text>
        </Row>
      </Row>
    );
  }

  return (
    <View>
      <Box h={10} />
      {rowBuySell('รับซื้อ', '25,100.00')}
      <Box h={10} />
      {rowBuySell('ขายออก ', '25,100.00')}
      <Box h={25} />
      <Row style={[stylesGlobal.between, {paddingLeft: 30, paddingRight: 15}]}>
        <Text style={{color: colorTextTitle}}>ราคาเปลี่ยนแปลงวันนี้</Text>
        <Row>
          <Ionicons size={22} color={colorRed} name={'caret-down-sharp'} />
          <Box w={5} />
          <Text style={{color: colorRed}}>{`-50`}</Text>
        </Row>
      </Row>
      <View style={{padding: 15}}>
        <LineChartComponemt width={DEVICE_WIDTH * 0.8} />
      </View>
      <Row style={[stylesGlobal.evenly, {marginTop: -10}]}>
        {buttonBuySell('buy', '25,000.00')}
        {buttonBuySell('sell', '25,000.00')}
      </Row>
      <Box h={50} />
    </View>
  );
}

export default GraphGold;
