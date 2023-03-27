import {View, Text} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {styles} from './style';
import stylesGlobal from '../../../base/styles_global';
import useOtpTimer from '../../../hooks/use_otp_timer';
import {colorGold2, colorGold, colorSkyBlue} from '../../../base/color';

import BoxInput from './box_input';
import Box from '../../../base/components/ui_component/box';
import Column from '../../../base/components/ui_component/column';
import ButtonText from '../../../base/components/ui_component/button_text';
import ButtonStyle from '../../../base/components/ui_component/button_style';
import NumberPad from '../../../base/components/page_component/keyboard/number_pad';

const OTPPage = () => {
  const navigation: any = useNavigation();
  const { params: {phone} } = useRoute<any>();

  const [otp, setOtp] = useState<string>('');
  const {renderTextButton} = useOtpTimer();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: colorGold2,
      },
    });
  }, []);

  const goToSuccess = () => {
    if (otp.length < 6) return;
    navigation.replace('VerifySuccess', {state: 'authOtp'});
  };

  const formatPhone = (): string => {
    if (phone.length != 10) return phone;
    return `xxx-xxx-${phone.slice(6, 10)}`;
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Column style={stylesGlobal.center}>
          <Text style={styles.textTitle}>ยืนยัน OTP ที่ได้รับจาก SMS</Text>
          <Box h={5} />
          <Text style={styles.textSubTitle}>{formatPhone()}</Text>
          <Box h={5} />
          <Text style={styles.textSubTitle}>(Ref code: 2X1XX)</Text>
        </Column>

        <Column style={stylesGlobal.center}>
          <BoxInput number={otp} />
          <Box h={10} />
          <Text style={styles.textSubTitle}>
            กรุณากรอก OTP ภายใน 05:00 นาที
          </Text>
          <Box h={30} />
          <ButtonText
            fontSize={16}
            color={colorSkyBlue}
            title={renderTextButton()}
          />
        </Column>

        <ButtonStyle
          height={45}
          title={'ยืนยัน'}
          width={'100%'}
          colorTxt={'white'}
          onTap={goToSuccess}
          backgroundColor={colorGold}
        />
      </View>

      <NumberPad setNumber={setOtp} number={otp} maxLength={6} />
    </View>
  );
};

export default OTPPage;
