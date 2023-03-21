import {View, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect, useState, useEffect} from 'react';

import BoxInput from './box_input';
import Box from '../../../base/components/ui_component/box';
import ButtonText from '../../../base/components/ui_component/button_text';
import ButtonStyle from '../../../base/components/ui_component/button_style';
import NumberPad from '../../../base/components/page_component/keyboard/number_pad';

import {styles} from './style';
import stylesGlobal from '../../../base/styles_global';
import secondsToMin from '../../../base/functions/seconds_to_hms';
import {colorGold2, colorGold, colorSkyBlue} from '../../../base/color';

const textOTPAgain = 'ยังไม่ได้รับ SMS OTP ต้องการขออีกครั้ง';

const OTPPage = () => {
  const navigation: any = useNavigation();
  const {params: {phone}} = useRoute<any>();

  const [otp, setOtp] = useState<string>('');
  let [time, setTime] = React.useState<number>(0);
  const [textButton, setTextButton] = useState<string>(textOTPAgain);
  const [state, setState] = useState<'default' | 'pending'>('default');

  const onRequestOtp = () => {
    if (state == 'pending') return;
    setTextButton('ขอ OTP ได้อีกครั้งใน');
    setState('pending');
    setTime(300);
  };

  const goToSuccess = () => {
    if (otp.length < 6) return;
    navigation.replace('VerifySuccess', {state: 'authOtp'});
  };

  const formatPhone = (): string => {
    if (phone.length != 10) return phone;
    return `xxx-xxx-${phone.slice(6, 10)}`;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: colorGold2,
      },
    });
  }, []);

  //! when open page request otp
  useEffect(() => {
    if (state == 'pending') return;
    setTextButton(textOTPAgain);
    setTimeout(() => {
      onRequestOtp();
    }, 300);
  }, [state]);

  //! set time interval
  useEffect(() => {
    if (time == 0) return setState('default');

    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={stylesGlobal.column}>
          <Text style={styles.textTitle}>ยืนยัน OTP ที่ได้รับจาก SMS</Text>
          <Box h={5} />
          <Text style={styles.textSubTitle}>{formatPhone()}</Text>
          <Box h={5} />
          <Text style={styles.textSubTitle}>(Ref code: 2X1XX)</Text>
        </View>

        <View style={stylesGlobal.column}>
          <BoxInput number={otp} />
          <Box h={10} />
          <Text style={styles.textSubTitle}>
            กรุณากรอก OTP ภายใน 05:00 นาที
          </Text>
          <Box h={30} />
          <ButtonText
            fontSize={16}
            color={colorSkyBlue}
            title={
              state === 'default'
                ? textButton
                : `${textButton} ${secondsToMin(time)}`
            }
          />
        </View>

        <ButtonStyle
          height={45}
          width={'100%'}
          title={'ยืนยัน'}
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
