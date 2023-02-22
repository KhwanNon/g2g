//? react
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

//? components
import Box from '../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../base/components/ui_component/button_style';
import DialogConfirm from '../../../../base/components/page_component/dialog/dialog_confirm';

//? base
import {styles} from '../style';
import {colorGold, colorTextLabel} from '../../../../base/color';

const InputPhonePage = () => {
  const navigation: any = useNavigation();
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const onConfirm = () => navigation.push('OTP');

  return (
    <View style={styles.containerWhite}>
      <View>
        <View style={{flex: 1}}></View>
        <Box h={100} />
        <ButtonStyle
          height={45}
          width={'100%'}
          title={'ต่อไป'}
          colorTxt={'white'}
          backgroundColor={colorGold}
          onTap={() => setOpenAlert(true)}
        />
      </View>
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
          caption={'000-000-0000'}
          iconColor={colorTextLabel}
          subTitle={'หมายเลขโทรศัพท์ของคุณ'}
          icon={'information-circle-outline'}
        />
      ) : null}
    </View>
  );
};

export default InputPhonePage;
