import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ButtonStyle from '../../../base/components/ui_component/button_style';
import NumberPad from '../../../base/components/page_component/keyboard/number_pad';
import DialogAlert from '../../../base/components/page_component/dialog/dialog_alert';

import stylesGlobal from '../../../base/styles_global';
import {colorGold, colorGreen} from '../../../base/color';
import BoxInput from './box_input';

const PinPage = () => {
  const navigation: any = useNavigation();
  const [pincode, setPincode] = useState<string>('');
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [state, setState] = useState<'success' | 'fails'>('success');

  const onNext = () => {
    if (pincode.length < 6) return;
    setOpenAlert(true);
  };

  const onConfirm = () => {
    if (state == 'fails') return setOpenAlert(false);
    navigation.replace('VerifySuccess', {state: 'authPin'});
  };

  return (
    <View style={stylesGlobal.containerWhite}>
      <View style={[stylesGlobal.columnBetween, {flex: 1, padding: 15}]}>
        <View style={stylesGlobal.columnCenter}>
          <Text style={{fontSize: 20}}>ใส่รหัสผ่าน</Text>
          <Text>ตั้งรหัสผ่าน</Text>
        </View>
        <BoxInput number={pincode} />
        <ButtonStyle
          onTap={onNext}
          height={45}
          width={'100%'}
          title={'ต่อไป'}
          colorTxt={'white'}
          backgroundColor={colorGold}
        />
      </View>

      <NumberPad number={pincode} maxLength={6} setNumber={setPincode} />

      {openAlert ? (
        <DialogAlert
          txtButton={'ปิด'}
          open={openAlert}
          onConfirm={onConfirm}
          setOpen={setOpenAlert}
          iconColor={colorGreen}
          icon={'checkmark-circle'}
          title={'ตั้งรหัสพินโค้ดสำเร็จ'}
        />
      ) : null}
    </View>
  );
};

export default PinPage;
