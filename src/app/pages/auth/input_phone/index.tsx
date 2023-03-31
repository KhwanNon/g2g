import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Box from '../../../../base/components/ui_component/box';
import Loading from '../../../../base/components/page_component/loading';
import ButtonStyle from '../../../../base/components/ui_component/button_style';
import DialogConfirm from '../../../../base/components/page_component/dialog/dialog_confirm';

import {styles} from '../style';
import {Otp} from '../../../../generated/state';
import {useLoading} from '../../../../hooks/use_loading';
import {timeDelay} from '../../../../base/functions/delay';
import {colorGold, colorTextLabel} from '../../../../base/color';

function InputPhonePage() {
  const navigation: any = useNavigation();
  const [phone, setPhone] = useState<string>('');
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const {isLoading, changeLoading} = useLoading();

  async function onConfirm() {
    setOpenAlert(false);
    changeLoading(true);
    await timeDelay(500);
    changeLoading(false);
    navigation.push('OTP', {phone: phone, state: Otp.AUTHEN});
  }

  function formatPhone(): string {
    if (phone.length !== 10) return phone;

    const start = `${phone.slice(0, 3)}`;
    const mid = `${phone.slice(3, 6)}`;
    const end = `${phone.slice(6, 10)}`;

    return `${start}-${mid}-${end}`;
  }

  return (
    <>
      <View style={[styles.containerWhite, {padding: 15}]}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18, color: colorTextLabel}}>
            หมายเลขเบอร์โทรศัพท์
          </Text>
          <TextInput
            maxLength={10}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="000-000-0000"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey',
            }}
          />
        </View>
        <Box h={100} />
        <ButtonStyle
          width={'100%'}
          height={45}
          title={'ต่อไป'}
          colorTxt={'white'}
          backgroundColor={colorGold}
          onTap={() => setOpenAlert(true)}
        />
        {openAlert ? (
          <DialogConfirm
            txtR={'ยืนยัน'}
            txtL={'ยกเลิก'}
            title={'ยืนยัน'}
            open={openAlert}
            txtColorL={'white'}
            txtColorR={'white'}
            onConfirm={onConfirm}
            setOpen={setOpenAlert}
            caption={formatPhone()}
            iconColor={colorTextLabel}
            subTitle={'หมายเลขโทรศัพท์ของคุณ'}
            icon={'information-circle-outline'}
          />
        ) : null}
      </View>
      {isLoading && <Loading />}
    </>
  );
}

export default InputPhonePage;
