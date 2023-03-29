import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';

import MyCard from '../components/card';
import InputTrade from './components/input';
import ModalDetail from './components/modal_detail';
import CardSummary from './components/card_summary';
import ButtonFilter from './components/button_filter';
import LineChartComponemt from '../components/line_chart';
import Box from '../../../../base/components/ui_component/box';
import Row from '../../../../base/components/ui_component/row';
import ButtonStyle from '../../../../base/components/ui_component/button_style';

import {
  colorGold3,
  colorGold,
  colorDarkGold2,
  colorLightGrey,
} from '../../../../base/color';
import useTab from '../../../../hooks/use_tab';
import {DEVICE_WIDTH} from '../../../../base/constant';
import stylesGlobal from '../../../../base/styles_global';

function GoldTradePage() {
  const {index, toggleValue} = useTab(0);
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  return (
    <ScrollView
      style={stylesGlobal.containerWhite}
      showsVerticalScrollIndicator={false}>
      <Box h={20} />
      <Row style={stylesGlobal.evenly}>
        {styleButtonTap('ซื้อ', index == 0, () => toggleValue(0))}
        {styleButtonTap('ขาย', index == 1, () => toggleValue(1))}
      </Row>

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
}

export const styleButtonTap = (
  name: string,
  isSelect: boolean,
  onTap: () => void,
) => {
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
