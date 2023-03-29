import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import stylesGlobal from '../../../../../base/styles_global';
import {colorDarkGold2, colorGold, colorGrey} from '../../../../../base/color';

import ModalTerm from './modal_term';
import CardSummaryDeposit from './card_summary';
import Box from '../../../../../base/components/ui_component/box';
import Row from '../../../../../base/components/ui_component/row';
import ButtonIcon from '../../../../../base/components/ui_component/button_icon';
import ButtonText from '../../../../../base/components/ui_component/button_text';
import ButtonStyle from '../../../../../base/components/ui_component/button_style';

type Props = {
  open: boolean;
  setOpen: Function;
};

function ModalSummaryRepurchase({open, setOpen}: Props) {
  const close = () => setOpen(false);
  const [openTerm, setOpenTerm] = useState<boolean>(false);

  function renderAppBar() {
    return (
      <Row style={[stylesGlobal.between, {padding: 10}]}>
        <ButtonIcon
          size={30}
          color={'grey'}
          onTap={close}
          name={'chevron-back'}
        />
        <Text style={stylesGlobal.textHeader}>
          ทำรายการเมื่อวันที่ 00 ก.ก. 0000
        </Text>
        <Box w={20} />
      </Row>
    );
  }

  return (
    <Modal visible={open} animationType="fade">
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        {renderAppBar()}
        <View style={{flex: 1, backgroundColor: colorGrey, padding: 15}}>
          <Box h={5} />
          <CardSummaryDeposit done={true} />
        </View>
        <View style={{padding: 15, backgroundColor: colorGrey}}>
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
            title={'ซื้อคืน'}
            colorTxt={'white'}
            backgroundColor={colorGold}
          />
        </View>
      </View>
      <ModalTerm open={openTerm} setOpen={setOpenTerm} />
    </Modal>
  );
}

export default ModalSummaryRepurchase;
