import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';

import InputTrade from './components/input';
import MyCard from '../components/card';
import CardSummary from './components/card_summary';
import ButtonFilter from './components/button_filter';
import LineChartComponemt from '../components/line_chart';
import Box from '../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../base/components/ui_component/button_style';

import {
  colorGold3,
  colorGold,
  colorDarkGold2,
  colorLightGrey,
} from '../../../../base/color';
import {DEVICE_WIDTH} from '../../../../base/constant';
import stylesGlobal from '../../../../base/styles_global';
import ModalDetail from './components/modal_detail';

const GoldTradePage = () => {
  const [index, setIndex] = useState<number>(0);
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const onChangeTab = () => {
    return index == 0 ? setIndex(1) : setIndex(0);
  };

  return (
    <ScrollView
      style={stylesGlobal.containerWhite}
      showsVerticalScrollIndicator={false}>
      <Box h={20} />
      <View style={stylesGlobal.rowEvenly}>
        {styleButton('ซื้อ', index == 0, onChangeTab)}
        {styleButton('ขาย', index == 1, onChangeTab)}
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

      <CardSummary isBuy={index == 0} />
      <Box h={20} />

      <View style={{padding: 15}}>
        <ButtonStyle
          height={45}
          width={'100%'}
          colorTxt={'white'}
          backgroundColor={colorGold}
          title={index == 0 ? 'ซื้อ' : 'ขาย'}
          onTap={() => setOpenDetails(true)}
        />
      </View>

      <Box h={20} />
      <ModalDetail
        isBuy={index == 0}
        open={openDetails}
        setOpen={setOpenDetails}
      />
    </ScrollView>
  );
};

const styleButton = (name: string, isSelect: boolean, onTap: () => void) => {
  return (
    <ButtonStyle
      height={45}
      width={'40%'}
      title={name}
      onTap={onTap}
      colorTxt={isSelect ? colorDarkGold2 : 'black'}
      backgroundColor={isSelect ? colorGold3 : colorLightGrey}
    />
  );
};

export default GoldTradePage;
