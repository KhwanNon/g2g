import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {Pin} from '../../../generated/state';
import stylesGlobal from '../../../base/styles_global';
import {useLoading} from '../../../hooks/use_loading';
import {timeDelay} from '../../../base/functions/delay';
import {colorGold, colorGreen, colorRed} from '../../../base/color';

import BoxInput from './box_input';
import Column from '../../../base/components/ui_component/column';
import Loading from '../../../base/components/page_component/loading';
import ButtonStyle from '../../../base/components/ui_component/button_style';
import DialogAlert from '../../../base/components/page_component/dialog/dialog_alert';
import NumberPad from '../../../base/components/page_component/keyboard/number_pad';

type DataAlertModel = {
  title: string;
  icon: string;
  color: string;
};

const successAlert: DataAlertModel = {
  color: colorGreen,
  icon: 'checkmark-circle',
  title: 'ตั้งรหัสพินโค้ดสำเร็จ',
};

const failAlert: DataAlertModel = {
  color: colorRed,
  icon: 'checkmark-circle',
  title: 'กรุณาใส่รหัสพินให้ตรงกัน',
};

function PinPage() {
  const {params: {state}} = useRoute<any>();
  const navigation: any = useNavigation();
  const {isLoading, changeLoading} = useLoading();

  const [pincode, setPincode] = useState<string>('');
  const [prevPincode, setPrevPincode] = useState<string>('');

  const [title, setTitle] = useState<string>('ใส่รหัสผ่าน');
  const [subtitle, setSubtitle] = useState<string>('ตั้งรหัสผ่าน');

  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [statusPage, setStatusPage] = useState<Pin>(state);
  const [dataAlert, setDataAlert] = useState<DataAlertModel>(successAlert);

  //! start use effect
  useEffect(() => {
    if (state == Pin.CHANGE_PIN) return setTitle('ใส่รหัสผ่านใหม่');
  }, []);

  //! on click button next
  async function onNext() {
    if (pincode.length < 6) return;
    handleAction();
  }

  //! reuse set text in page =>  title, subtitle
  function setTextInPage(t: string, s: string) {
    setTitle(t);
    setSubtitle(s);
  }

  //! reuse set text for state confirm
  function setTextConfirm() {
    setTextInPage('ยืนยันรหัสผ่านอีกครั้ง', 'โปรดใส่รหัสผ่าน');
  }

  //! reuse set text when pin and prev pin not match
  function setTextNotMatch() {
    setTextInPage('รหัสไม่ถูกต้อง', 'โปรดใส่รหัสผ่านอีกครั้ง');
  }
  
  //! handle action when on click submit
  async function handleAction() {
    switch (statusPage) {
      case Pin.AUTHEN:
        setStatusPage(Pin.AUTHEN_CONFIRM);
        setTextConfirm();
        setPrevPincode(pincode);
        break;
      case Pin.AUTHEN_CONFIRM:
        if (prevPincode == pincode) return onRequestPin();
        setTextNotMatch();
        break;
      case Pin.CHANGE_PIN:
        setStatusPage(Pin.CHANGE_PIN_CONFIRM);
        setTextConfirm();
        setPrevPincode(pincode);
        break;
      case Pin.CHANGE_PIN_CONFIRM:
        if (prevPincode == pincode) return onRequestPin();
        setTextNotMatch();
        break;
      default:
        break;
    }
    setPincode('');
  }

  //!  on request pin
  async function onRequestPin() {
    changeLoading(true);
    await timeDelay(500);
    changeLoading(false);
    setOpenAlert(true);
  }

  //! on click button in alert
  function onConfirm() {
    switch (statusPage) {
      case Pin.AUTHEN_CONFIRM:
        navigation.replace('Home');
        break;
      case Pin.CHANGE_PIN_CONFIRM:
        navigation.goBack();
        break;
      default:
        break;
    }
  }

  //! this is render
  return (
    <>
      <View style={stylesGlobal.containerWhite}>
        <Column style={[stylesGlobal.between, {flex: 1, padding: 15}]}>
          <Column style={stylesGlobal.center}>
            <Text style={{fontSize: 20}}>{title}</Text>
            <Text>{subtitle}</Text>
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
            title={dataAlert.title}
            icon={dataAlert.icon}
            onConfirm={onConfirm}
            setOpen={setOpenAlert}
            iconColor={dataAlert.color}
          />
        ) : null}
      </View>

      {isLoading && <Loading />}
    </>
  );
}

export default PinPage;
