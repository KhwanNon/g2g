import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Box from '../../../base/components/ui_component/box';
import Row from '../../../base/components/ui_component/row';
import ButtonStyle from '../../../base/components/ui_component/button_style';

import {colorGold} from '../../../base/color';
import stylesGlobal from '../../../base/styles_global';
import {assetVerifySuccess} from '../../../generated/assets';

const VerifySuccessPage = () => {
  const navigation: any = useNavigation();
  const {params: {state}} = useRoute<any>()


  const onClickButton = () => {
    if (state === 'authOtp') return navigation.replace('Pin');
    if (state === 'authPin') return navigation.replace('Home');
  };

  
  const caption = (): string => {
    let mapText: any = {
      authOtp: 'เสร็จสิ้นการยืนยันเบอร์โทรศัพท์แล้ว',
      authPin: 'เสร็จสิ้นการยืนยันรหัสพินโค้ดแล้ว',
    };

    return mapText[state] || '';
  };

  
  return (
    <View style={styles.container}>
      <Row style={[stylesGlobal.center, {height: 60}]}>
        <Text style={stylesGlobal.textHeader}>ยืนยันตัวตน</Text>
      </Row>

      <View style={styles.box}>
        <Image style={styles.img} source={assetVerifySuccess} />
        <Box h={30} />
        <Text style={stylesGlobal.textHeader}>{caption()}</Text>
      </View>

      <View style={{padding: 15, width: '100%'}}>
        <ButtonStyle
          height={45}
          width={'100%'}
          colorTxt={'white'}
          onTap={onClickButton}
          backgroundColor={colorGold}
          title={state == 'authPin' ? 'สำเร็จ' : 'ต่อไป'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 140,
    height: 120,
    resizeMode: 'stretch',
  },
});

export default VerifySuccessPage;
