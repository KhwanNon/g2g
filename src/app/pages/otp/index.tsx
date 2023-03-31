import {View, Text} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  colorGold,
  colorGreen,
  colorGold2,
  colorSkyBlue,
} from '../../../base/color';
import {styles} from './style';
import {Otp, Pin} from '../../../generated/state';
import stylesGlobal from '../../../base/styles_global';
import {useLoading} from '../../../hooks/use_loading';
import {timeDelay} from '../../../base/functions/delay';
import useOtpTimer from '../../../hooks/use_otp_timer';

import BoxInput from './box_input';
import Box from '../../../base/components/ui_component/box';
import Column from '../../../base/components/ui_component/column';
import Loading from '../../../base/components/page_component/loading';
import ButtonText from '../../../base/components/ui_component/button_text';
import ButtonStyle from '../../../base/components/ui_component/button_style';
import DialogAlert from '../../../base/components/page_component/dialog/dialog_alert';
import NumberPad from '../../../base/components/page_component/keyboard/number_pad';

function OTPPage() {
  const navigation: any = useNavigation();
  const { params: {phone, state} } = useRoute<any>();

  const [otp, setOtp] = useState<string>('');
  const {renderTextButton} = useOtpTimer();
  const {isLoading, changeLoading} = useLoading();
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: true,
      headerStyle: {
        backgroundColor: colorGold2,
      },
    });
  }, []);

  async function onSubmit() {
    if (otp.length < 6) return;
    changeLoading(true);
    await timeDelay(500);
    changeLoading(false);
    handleConfirm();
  }

  function formatPhone(): string {
    if (phone.length != 10) return phone;
    return `xxx-xxx-${phone.slice(6, 10)}`;
  }

  function handleConfirm() {
    switch (state) {
      case Otp.AUTHEN:
        return navigation.replace('Pin', {state: Pin.AUTHEN});
      case Otp.CHANGE_PIN:
        return navigation.replace('Pin', {state: Pin.CHANGE_PIN});
      default:
        return;
    }
  }

  return (
    <>
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
            onTap={onSubmit}
            colorTxt={'white'}
            backgroundColor={colorGold}
          />
        </View>

        <NumberPad setNumber={setOtp} number={otp} maxLength={6} />

        <DialogAlert
          txtButton={'ปิด'}
          open={openAlert}
          title={'ยืนยันสำเร็จ'}
          iconColor={colorGreen}
          setOpen={setOpenAlert}
          onConfirm={handleConfirm}
          icon={'ios-checkmark-circle'}
        />
      </View>

      {isLoading && <Loading color={colorGold} />}
    </>
  );
}

export default OTPPage;
