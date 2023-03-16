import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';

import Box from '../../../../../../base/components/ui_component/box';
import Divider from '../../../../../../base/components/ui_component/divider';

import {
  colorGold,
  colorLightGrey,
  colorTextLabel,
  colorTextTitle,
} from '../../../../../../base/color';
import styleSetting from '../../style';
import stylesGlobal from '../../../../../../base/styles_global';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';

const FormAddBankPage = () => {
  return (
    <ScrollView
      style={{...stylesGlobal.containerWhite, padding: 15}}
      showsVerticalScrollIndicator={false}>
      <Text style={styleSetting.textTitle}>ธนาคาร</Text>
      <Box h={15} />

      <Text>ธนาคารกสิกรไทย</Text>
      <Box h={10} />
      <Divider />

      <Box h={15} />
      <Text style={styleSetting.textTitle}>สาขา</Text>
      <TextInput placeholder="กรอกชื่อสาขา" />
      <Divider />

      <Box h={15} />
      <Text style={styleSetting.textTitle}>หมายเลขบัญชีธนาคาร</Text>
      <TextInput placeholder="กรอกตัวเลขบัญชีธนาคาร" />
      <Divider />

      <Box h={15} />
      <Text style={styleSetting.textTitle}>ชื่อบัญชีธนาคาร</Text>
      <TextInput placeholder="ชื่อ - นามสกุล" />
      <Divider />

      <Box h={40} />
      <Text style={styleSetting.textTitle}>รูปบัตรสมุดบัญชีธนาคาร</Text>
      <Box h={20} />
      <View
        style={{
          height: 240,
          width: '100%',
          borderRadius: 10,
          backgroundColor: colorTextTitle,
        }}
      />
      <Box h={15} />
      <View style={stylesGlobal.rowBetween}>
        <ButtonStyle
          height={45}
          width={'43%'}
          title={'อัพโหลด'}
          colorTxt={'white'}
          backgroundColor={colorGold}
        />
        <ButtonStyle
          height={45}
          width={'43%'}
          title={'ถ่ายภาพ'}
          colorTxt={'white'}
          backgroundColor={colorGold}
        />
      </View>

      <Box h={30} />
      <Text style={{fontWeight: 'bold', color: colorTextTitle}}>
        โปรดตรวจสอบดังนี้
      </Text>
      <Box h={10} />
      {radio('หมายเลขบัญชีธนาคารตรงกับที่กรอกเพิ่มบัญชี')}
      {radio('มองเห็นข้อความบนสมุดบัญชีธนาคารได้อย่างชัดเจน')}
      {radio('ไม่มีส่วนใดที่ถูกนิ้วบังหรือสะท้อนแสงจนมองไม่เห็น')}

      <Box h={30} />
      <ButtonStyle
        height={45}
        width={'100%'}
        title={'ต่อไป'}
        colorTxt={'white'}
        backgroundColor={colorLightGrey}
      />
      <Box h={40} />
    </ScrollView>
  );
};

const radio = (text: string) => {
  return (
    <View style={{...stylesGlobal.row, marginBottom: 4}}>
      <View
        style={{
          width: 5,
          height: 5,
          borderRadius: 5,
          backgroundColor: colorTextLabel,
        }}
      />
      <Box w={10} />
      <Text style={{fontSize: 12}}>{text}</Text>
    </View>
  );
};

export default FormAddBankPage;
