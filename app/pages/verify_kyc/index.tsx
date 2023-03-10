//? react
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

//? component
import Box from '../../../base/components/ui_component/box';
import Divider from '../../../base/components/ui_component/divider';

//? base
import {
  colorGold,
  colorGold2,
  colorDarkGold,
  colorTextLabel,
  colorBlue,
} from '../../../base/color';
import styleSetting from '../home/settings/style';
import stylesGlobal from '../../../base/styles_global';
import ButtonStyle from '../../../base/components/ui_component/button_style';

const VerifyKYCPage = (props: any) => {
  const navigation: any = useNavigation();

  const onConfirm = () => {
    const state = props.route.params.state;

    switch (state) {
      case 'profile':
        return navigation.push('FormProfile');
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text20}>กรุณาตรวจสอบการยืนยันตัวตน 1 รายการ</Text>
      <Box h={30} />
      <Text style={styles.text18}>1. ยืนตัวตนโดยทำการ KYC</Text>
      <Box h={20} />
      <View style={stylesGlobal.rowBetween}>
        <View style={stylesGlobal.row}>
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
        </View>
        <Text style={styles.textBlue}>ยังไม่ทำการยืนยัน</Text>
      </View>
      <Box h={15} />
      <Divider />
      <Box h={35} />
      <ButtonStyle
        height={45}
        width={'100%'}
        onTap={onConfirm}
        colorTxt={'white'}
        title={'ยืนยันตัวตน'}
        backgroundColor={colorGold}
      />
    </View>
  );
};

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
