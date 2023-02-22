//? react
import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

//? components
import Box from '../../../base/components/ui_component/box';
import ButtonStyle from '../../../base/components/ui_component/button_style';

//? base
import {colorGold2, colorGold} from '../../../base/color';

const OTPPage = () => {
  const navigation: any = useNavigation();
  
  const goToSuccess = () => {
    navigation.replace('VerifySuccess', {state: 'authOtp'});
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colorGold2,
      },
    });
  }, []);

  return (
    <View>
      <Box h={100} />
      <ButtonStyle
        height={45}
        width={'100%'}
        title={'ยืนยัน'}
        colorTxt={'white'}
        onTap={goToSuccess}
        backgroundColor={colorGold}
      />
    </View>
  );
};

export default OTPPage;
