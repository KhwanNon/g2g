//? react
import React from 'react';
import {View, ScrollView, Text} from 'react-native';

//? component
import InputTrade from './components/input';
import MyCard from '../components/card';
import ButtonFilter from './components/button_filter';
import RowData from '../history/components/row_data';
import LineChartComponemt from '../components/line_chart';
import Box from '../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../base/components/ui_component/button_style';

//? base
import {
  colorGold3,
  colorDarkGold2,
  colorLightGrey,
  colorGold,
} from '../../../../base/color';
import stylesGlobal from '../../../../base/styles_global';
import {DEVICE_WIDTH} from '../../../../base/constant';
import {styles} from './style';
import CardSummary from './components/card_summary';

const GoldTradePage = () => {
  return (
    <ScrollView
      style={stylesGlobal.containerWhite}
      showsVerticalScrollIndicator={false}>
      <Box h={20} />
      <View style={stylesGlobal.rowEvenly}>
        {styleButton('ซื้อ', true)}
        {styleButton('ขาย', false)}
      </View>

      <Box h={25} />
      <MyCard />

      <Box h={25} />
      <InputTrade />

      <Box h={25} />
      <ButtonFilter />

      <Box h={30} />
      <View style={{paddingHorizontal: 15}}>
        <LineChartComponemt width={DEVICE_WIDTH * 0.8} />
      </View>

      <CardSummary />

      <Box h={20} />
      <View style={{padding: 15}}>
        <ButtonStyle
          height={45}
          width={'100%'}
          title={'ซื้อ'}
          colorTxt={'white'}
          backgroundColor={colorGold}
        />
      </View>
      <Box h={20} />
    </ScrollView>
  );
};

const styleButton = (name: string, isSelect: boolean) => {
  return (
    <ButtonStyle
      height={45}
      width={'40%'}
      title={name}
      colorTxt={isSelect ? colorDarkGold2 : 'black'}
      backgroundColor={isSelect ? colorGold3 : colorLightGrey}
    />
  );
};

export default GoldTradePage;
