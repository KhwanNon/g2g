import React from 'react';
import styleSetting from '../style';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../../../base/styles_global';

import {useNavigation} from '@react-navigation/native';
import Box from '../../../../../base/components/ui_component/box';
import ListTileBank from '../../../../../base/components/ui_component/list_tile_bank';
import ButtonBorder from '../../../../../base/components/ui_component/button_border';

const AddBankPage = () => {
  const navigation: any = useNavigation();

  const listBank = [
    {
      name: 'SCB Easy App',
    },
    {
      name: 'Bualuang mBanking',
    },
    {
      name: 'K PLUS',
    },
    {
      name: 'Krungsri Mobile App',
    },
    {
      name: 'Krungthai NEXT App',
    },
  ];

  const goToForm = () => navigation.push('FormAddBank');

  const renderItem = () => {
    return listBank.map((item, idx) => {
      return (
        <ListTileBank
          state={'bank'}
          key={`#${idx}`}
          title={item.name}
          onPress={goToForm}
        />
      );
    });
  };

  return (
    <View style={[stylesGlobal.containerWhite, {padding: 15}]}>
      <Text style={styleSetting.textTitle}>เลือกเพิ่มธนาคาร</Text>
      <Box h={10} />
      {renderItem()}
      <Box h={30} />
      <Text style={styleSetting.textTitle}>ช่องทางบริการอื่นๆ</Text>
      <Box h={15} />
      <ButtonBorder title={'เพิ่มบัตร'} width={'100%'} height={35} />
    </View>
  );
};

export default AddBankPage;
