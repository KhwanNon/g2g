import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';

import Row from '../../../base/components/ui_component/row';
import Box from '../../../base/components/ui_component/box';
import Divider from '../../../base/components/ui_component/divider';
import ButtonStyle from '../../../base/components/ui_component/button_style';

import {
  colorBlue,
  colorGold,
  colorGold2,
  colorDarkGold,
  colorTextLabel,
} from '../../../base/color';
import styleSetting from '../home/settings/style';
import stylesGlobal from '../../../base/styles_global';

function VerifyKYCPage() {
  const navigation: any = useNavigation();
  const { params: {state} } = useRoute<any>();

  function onConfirm() {
    switch (state) {
      case 'profile':
        navigation.push('FormProfile');
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text20}>กรุณาตรวจสอบการยืนยันตัวตน 1 รายการ</Text>
      <Box h={30} />

      <Text style={styles.text18}>1. ยืนตัวตนโดยทำการ KYC</Text>
      <Box h={20} />

      <Row style={stylesGlobal.between}>
        <Row>
          <LinearGradient
            style={styleSetting.boxIcon}
            colors={[colorGold2, colorDarkGold]}>
            <Ionicons name={'home'} size={22} color={'white'} />
          </LinearGradient>
          <Box w={10} />
          <View>
            <Text style={styles.text16}>การยืนยันตัวตน</Text>
            <Text>ยืนยันตัวตน</Text>
          </View>
        </Row>
        <Text style={styles.textBlue}>ยังไม่ทำการยืนยัน</Text>
      </Row>

      <Box h={15} />
      <Divider />
      <Box h={35} />

      <ButtonStyle
        height={45}
        width={'100%'}
        colorTxt={'white'}
        title={'ยืนยันตัวตน'}
        onTap={onConfirm}
        backgroundColor={colorGold}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textBlue: {
    color: colorBlue,
    fontSize: 16,
  },
  text16: {
    color: colorTextLabel,
    fontSize: 16,
  },
  text18: {
    color: colorTextLabel,
    fontSize: 18,
  },
  text20: {
    color: colorTextLabel,
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default VerifyKYCPage;
