import React from 'react';
import styleSetting from '../style';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../../../base/styles_global';

import {useNavigation} from '@react-navigation/native';
import Box from '../../../../../base/components/ui_component/box';
import ListTileBank from '../../../../../base/components/ui_component/list_tile_bank';

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

  return (
    <View style={{...stylesGlobal.containerWhite, padding: 15}}>
      <Text style={styleSetting.textTitle}>เลือกเพิ่มธนาคาร</Text>
      <Box h={10} />
      {listBank.map((item, idx) => {
        return (
          <ListTileBank
            state={'bank'}
            key={`#${idx}`}
            title={item.name}
            onPress={goToForm}
          />
        );
      })}
    </View>
  );
};

export default AddBankPage;
