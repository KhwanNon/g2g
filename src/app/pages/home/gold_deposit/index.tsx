import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './style';
import useTab from '../../../../hooks/use_tab';
import stylesGlobal from '../../../../base/styles_global';
import {colorDarkGold2, colorGold} from '../../../../base/color';

import MyCard from '../components/card';
import {styleButtonTap} from '../gold_trade';
import ModalTerm from './components/modal_term';
import CardRepurchase from './components/card_repurchase';
import InputValueDepositGold from './components/input_value';
import Box from '../../../../base/components/ui_component/box';
import CardSummaryDeposit from './components/card_summary';
import ButtonText from '../../../../base/components/ui_component/button_text';
import ButtonStyle from '../../../../base/components/ui_component/button_style';
import ModalSummaryRepurchase from './components/modal_summary_repurchase';
import Row from '../../../../base/components/ui_component/row';

const GoldDepositPage = () => {
  const {index, toggleValue} = useTab(0);
  const [openTerm, setOpenTerm] = useState<boolean>(false);
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const renderDeposit = () => (
    <>
      <MyCard isDeposit={true} />
      <Box h={40} />
      <InputValueDepositGold />
      <Box h={10} />
      <View style={{padding: 15}}>
        <CardSummaryDeposit done={false} />
        <Box h={20} />
        <Row>
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
        </Row>
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

  const renderListTile = () =>
    [1, 2, 3].map(item => (
      <CardRepurchase onPress={() => setOpenDetails(true)} />
    ));

  const renderRepurchase = () => (
    <View style={styles.containerRepurchase}>
      <Box h={10} />
      <Text style={{fontSize: 16}}>รายการที่ต้องซื้อคืน</Text>
      {renderListTile()}
    </View>
  );

  return (
    <View style={[stylesGlobal.containerWhite]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box h={20} />
        <Row style={stylesGlobal.evenly}>
          {styleButtonTap('ฝากทอง', index == 0, () => toggleValue(0))}
          {styleButtonTap('ซื้อคืน', index == 1, () => toggleValue(1))}
        </Row>
        <Box h={index == 0 ? 20 : 30} />
        {index == 0 ? renderDeposit() : renderRepurchase()}
      </ScrollView>

      <ModalTerm open={openTerm} setOpen={setOpenTerm} />
      <ModalSummaryRepurchase open={openDetails} setOpen={setOpenDetails} />
    </View>
  );
};

export default GoldDepositPage;
