import {View, Text, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';

import ListTileMyBank from './components/list_tile_my_bank';
import Box from '../../../../base/components/ui_component/box';
import ButtonText from '../../../../base/components/ui_component/button_text';
import ButtonBorder from '../../../../base/components/ui_component/button_border';

import {colorTextLabel} from '../../../../base/color';
import stylesGlobal from '../../../../base/styles_global';

const WithdrawPage = () => {
  const myAccount = [1, 2];
  const navigation: any = useNavigation();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonText
          fontSize={14}
          title={'แก้ไข'}
          onTap={swapEdit}
          color={colorTextLabel}
        />
      ),
    });
  }, [isEdit]);

  const goToWithdraw = () => {
    if (isEdit) return navigation.push('OTP', {phone: '0000000000'});
    navigation.push('WithdrawBank');
  };

  const swapEdit = () => {
    setIsEdit(prev => !prev);
  };

  return (
    <View>
      {myAccount.map((item, idx) => {
        return (
          <ListTileMyBank
            key={`#${idx}`}
            onPress={goToWithdraw}
            icon={isEdit ? 'ios-trash-outline' : 'chevron-forward'}
          />
        );
      })}

      <Box h={50} />
      <View style={[stylesGlobal.rowBetween]}>
        <View>
          <Text>แสดงเลขบัญชีธนาคาร</Text>
          <Text>ตกลงที่จะแสดงเลขบัญชีธนาคารของผู้ใช้</Text>
        </View>
        <Switch ios_backgroundColor="#3e3e3e" value={false} />
      </View>
      <Box h={50} />

      <View style={{paddingHorizontal: 15}}>
        <ButtonBorder
          height={50}
          width={'100%'}
          colorBorder={'black'}
          title={'เพิ่มช่องทางการชำระเงิน'}
        />
      </View>
    </View>
  );
};

export default WithdrawPage;
