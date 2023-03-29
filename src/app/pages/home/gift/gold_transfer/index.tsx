import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import Row from '../../../../../base/components/ui_component/row';
import Box from '../../../../../base/components/ui_component/box';
import Divider from '../../../../../base/components/ui_component/divider';
import ButtonStyle from '../../../../../base/components/ui_component/button_style';

import {styles} from '../style';
import {colorGold} from '../../../../../base/color';
import stylesGlobal from '../../../../../base/styles_global';
import ModalSummaryGift from './components/modal_summary';

function GoldTransferPage() {
  const [openSummary, setOpenSummary] = useState<boolean>(false);

  function renderTextAlert() {
    return (
      <Row style={stylesGlobal.between}>
        <Text style={styles.textAlert}>น้ำหนักทองคำของคุณสามารถโอนได้</Text>
        <Text style={styles.textAlert}>1.2 บาท/ทองคำ</Text>
      </Row>
    );
  }

  return (
    <View
      style={[
        stylesGlobal.containerWhite,
        {padding: 15, justifyContent: 'space-between'},
      ]}>
      <View>
        <Box h={20} />
        <Text style={styles.text}>น้ำหนักทองคำที่ต้องการโอน</Text>
        <TextInput placeholder="กรอกน้ำหนักทองคำที่ต้องการโอน" />
        <Divider />

        <Box h={20} />
        {renderTextAlert()}

        <Box h={20} />
        <Text style={styles.text}>ชื่อ</Text>
        <TextInput placeholder="กรอกชื่อผู้รับ" />
        <Divider />

        <Box h={20} />
        <Text style={styles.text}>นามสกุล</Text>
        <TextInput placeholder="กรอกนามสกุลผู้รับ" />
        <Divider />
      </View>

      <ButtonStyle
        title={'ต่อไป'}
        height={45}
        width={'100%'}
        colorTxt={'white'}
        backgroundColor={colorGold}
        onTap={() => setOpenSummary(true)}
      />

      <ModalSummaryGift open={openSummary} setOpen={setOpenSummary} />
    </View>
  );
}

export default GoldTransferPage;
