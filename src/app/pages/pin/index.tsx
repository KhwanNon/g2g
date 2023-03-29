import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BoxInput from './box_input';
import Column from '../../../base/components/ui_component/column';
import ButtonStyle from '../../../base/components/ui_component/button_style';
import NumberPad from '../../../base/components/page_component/keyboard/number_pad';
import DialogAlert from '../../../base/components/page_component/dialog/dialog_alert';

import stylesGlobal from '../../../base/styles_global';
import {colorGold, colorGreen} from '../../../base/color';

function PinPage() {
  const navigation: any = useNavigation();
  const [pincode, setPincode] = useState<string>('');
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [state, setState] = useState<'success' | 'fails'>('success');

  function onNext() {
    if (pincode.length < 6) return;
    setOpenAlert(true);
  }

  function onConfirm() {
    if (state == 'fails') return setOpenAlert(false);
    navigation.replace('VerifySuccess', {state: 'authPin'});
  }

  return (
    <View style={stylesGlobal.containerWhite}>
      <Column style={[stylesGlobal.between, {flex: 1, padding: 15}]}>
        <Column style={stylesGlobal.center}>
          <Text style={{fontSize: 20}}>ใส่รหัสผ่าน</Text>
          <Text>ตั้งรหัสผ่าน</Text>
        </Column>
        <BoxInput number={pincode} />
        <ButtonStyle
          height={45}
          title={'ต่อไป'}
          width={'100%'}
          onTap={onNext}
          colorTxt={'white'}
          backgroundColor={colorGold}
        />
      </Column>

      <NumberPad number={pincode} maxLength={6} setNumber={setPincode} />

      {openAlert ? (
        <DialogAlert
          txtButton={'ปิด'}
          open={openAlert}
          iconColor={colorGreen}
          onConfirm={onConfirm}
          setOpen={setOpenAlert}
          icon={'checkmark-circle'}
          title={'ตั้งรหัสพินโค้ดสำเร็จ'}
        />
      ) : null}
    </View>
  );
}

export default PinPage;
