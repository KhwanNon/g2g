import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Box from '../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../base/components/ui_component/button_style';
import DialogConfirm from '../../../../base/components/page_component/dialog/dialog_confirm';

import {styles} from '../style';
import {colorGold, colorTextLabel} from '../../../../base/color';

const InputPhonePage = () => {
  const navigation: any = useNavigation();
  const [phone, setPhone] = useState<string>('');
  const [openAlert, setOpenAlert] = useState<boolean>(false);


  const onConfirm = () => {
    setOpenAlert(false);
    navigation.push('OTP', {phone: phone});
  };


  const formatPhone = (): string => {
    if (phone.length !== 10) return phone;

    const start = `${phone.slice(0, 3)}`;
    const mid = `${phone.slice(3, 6)}`;
    const end = `${phone.slice(6, 10)}`;

    return `${start}-${mid}-${end}`;
  };

  
  return (
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
        height={45}
        width={'100%'}
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
  );
};

export default InputPhonePage;
