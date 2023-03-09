//? react
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity} from 'react-native';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';

//? component
import Box from '../../../../base/components/ui_component/box';

//? base
import {
  colorDarkGold,
  colorGold2,
  colorRed,
  colorTextTitle,
} from '../../../../base/color';
import {styles} from '../style';
import stylesGlobal from '../../../../base/styles_global';
import {DEVICE_WIDTH} from '../../../../base/constant';

const GraphGold = () => {
  const data: any = [
    {value: 30000},
    {value: 29000},
    {value: 27000},
    {value: 25000},
    {value: 25000},
    {value: 22000},
    {value: 22000},
    {value: 25000},
    {value: 27000},
    {value: 28000},
  ];
  return (
    <View>
      <Box h={10} />
      {rowBuySell('รับซื้อ', '25,100.00')}
      <Box h={10} />
      {rowBuySell('ขายออก ', '25,100.00')}
      <Box h={25} />
      <View
        style={{...stylesGlobal.rowBetween, paddingLeft: 30, paddingRight: 15}}>
        <Text style={{color: colorTextTitle}}>ราคาเปลี่ยนแปลงวันนี้</Text>
        <View style={stylesGlobal.row}>
          <Ionicons size={22} color={colorRed} name={'caret-down-sharp'} />
          <Box w={5} />
          <Text style={{color: colorRed}}>- 50</Text>
        </View>
      </View>
      <View style={{padding: 15}}>
        <LineChart
          width={DEVICE_WIDTH * 0.8}
          height={130}
          curved={true}
          areaChart
          data={data}
          yAxisColor="#999999"
          xAxisColor="#999999"
          noOfSections={5}
          hideDataPoints
          startOpacity={0.6}
          endOpacity={0.6}
          color="#D5BD90"
          spacing={40}
          showVerticalLines
          rulesType="solid"
          initialSpacing={0}
          rulesColor="#E2E2E2"
          endFillColor={'#FFF0D2'}
          startFillColor={'#FFF0D2'}
          yAxisTextStyle={{color: colorTextTitle, fontSize: 10}}
        />
      </View>
      <View style={{...stylesGlobal.rowEvenly, marginTop: -10}}>
        {buttonBuySell('buy', '25,000.00')}
        {buttonBuySell('sell', '25,000.00')}
      </View>
      <Box h={50} />
    </View>
  );
};

const buttonBuySell = (state: 'buy' | 'sell', value: string) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        ...styles.buttonBuySell,
        justifyContent: 'space-evenly',
        backgroundColor: state == 'buy' ? colorDarkGold : colorGold2,
      }}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>฿ {value}</Text>
      <Text style={{color: 'white', fontSize: 10}}>
        {state == 'buy' ? 'รับซื้อทองคำ' : 'ขายออกทองคำ'}
      </Text>
    </TouchableOpacity>
  );
};

const rowBuySell = (title: string, value: string) => {
  return (
    <View style={{...stylesGlobal.rowBetween, paddingHorizontal: 15}}>
      <View
        style={{
          ...stylesGlobal.row,
          alignItems: 'flex-end',
        }}>
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
      <View
        style={{
          ...stylesGlobal.row,
          alignItems: 'flex-end',
        }}>
        <Text style={{color: colorTextTitle}}>{value}</Text>
        <Box w={10} />
        <Text style={{color: colorTextTitle, fontWeight: 'bold'}}>฿</Text>
        <Box w={10} />
        <Text style={{color: colorTextTitle}}>บาททอง</Text>
      </View>
    </View>
  );
};

export default GraphGold;
