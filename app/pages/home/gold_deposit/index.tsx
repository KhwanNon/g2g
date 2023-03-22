import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colorDarkGold2, colorGold, colorGrey} from '../../../../base/color';
import Box from '../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../base/components/ui_component/button_style';
import ButtonText from '../../../../base/components/ui_component/button_text';
import {DEVICE_HEIGHT} from '../../../../base/constant';
import stylesGlobal from '../../../../base/styles_global';
import MyCard from '../components/card';
import {styleButtonTap} from '../gold_trade';
import CardRepurchase from './components/card_repurchase';
import CardSummaryDeposit from './components/card_summary';
import InputValueDepositGold from './components/input_value';
import ModalSummaryRepurchase from './components/modal_summary_repurchase';
import ModalTerm from './components/modal_term';

const GoldDepositPage = () => {
  const [openTerm, setOpenTerm] = useState<boolean>(false);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const setIndexTab = (idx: number) => {
    setIndex(idx);
  };

  const renderDeposit = () => (
    <>
      <MyCard isDeposit={true} />
      <Box h={40} />
      <InputValueDepositGold />
      <Box h={10} />
      <View style={{padding: 15}}>
        <CardSummaryDeposit />
        <Box h={20} />
        <View style={[stylesGlobal.row]}>
          <Ionicons
            size={25}
            color={colorDarkGold2}
            name={'ios-alert-circle-outline'}
          />
          <Box w={5} />
          <Text>ข้อกำหนดและเงื่อนไขการฝากทอง</Text>
          <Box w={3} />
          <ButtonText
            fontSize={14}
            underLine={true}
            title={'คลิกเพื่ออ่าน'}
            color={colorDarkGold2}
            onTap={() => setOpenTerm(true)}
          />
        </View>
        <Box h={10} />
        <ButtonStyle
          height={45}
          width={'100%'}
          colorTxt={'white'}
          title={'ยืนยันฝากทอง'}
          backgroundColor={colorGold}
        />
      </View>
    </>
  );

  const renderRepurchase = () => (
    <View
      style={{
        padding: 15,
        minHeight: DEVICE_HEIGHT * 0.8,
        backgroundColor: colorGrey,
      }}>
      <Box h={10} />
      <Text style={{fontSize: 16}}>รายการที่ต้องซื้อคืน</Text>
      {[1, 2, 3].map(item => (
        <CardRepurchase onPress={() => setOpenDetails(true)} />
      ))}
    </View>
  );

  return (
    <View style={[stylesGlobal.containerWhite]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box h={20} />
        <View style={stylesGlobal.rowEvenly}>
          {styleButtonTap('ฝากทอง', index == 0, () => setIndexTab(0))}
          {styleButtonTap('ซื้อคืน', index == 1, () => setIndexTab(1))}
        </View>
        <Box h={index == 0 ? 10 : 30} />
        {index == 0 ? renderDeposit() : renderRepurchase()}
      </ScrollView>

      <ModalTerm open={openTerm} setOpen={setOpenTerm} />
      <ModalSummaryRepurchase open={openDetails} setOpen={setOpenDetails} />
    </View>
  );
};

export default GoldDepositPage;
