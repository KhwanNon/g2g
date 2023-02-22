//? react
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//? components
import Box from '../../../base/components/ui_component/box';
import ButtonStyle from '../../../base/components/ui_component/button_style';
import DialogAlert from '../../../base/components/page_component/dialog/dialog_alert';

//? base
import {colorGold, colorGreen} from '../../../base/color';

const PinPage = () => {
  const navigation: any = useNavigation();
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const onNext = () => {
    setOpenAlert(true);
  };

  const onConfirm = () => {
    navigation.replace('VerifySuccess', {state: 'authPin'});
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <Box h={100} />
      <ButtonStyle
        onTap={onNext}
        height={45}
        width={'100%'}
        title={'ต่อไป'}
        colorTxt={'white'}
        backgroundColor={colorGold}
      />
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
