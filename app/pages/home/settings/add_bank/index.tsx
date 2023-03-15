import React from 'react';
import styleSetting from '../style';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesGlobal from '../../../../../base/styles_global';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

      <Box h={30} />
      <Text style={styleSetting.textTitle}>ช่องทางบริการอื่นๆ</Text>
      <Box h={15} />
      <TouchableOpacity style={styleSetting.boxAddCard}>
        <Ionicons size={22} color={'black'} name={'add'} />
        <Box w={5} />
        <Text style={styleSetting.textTitle}>เพิ่มบัตร</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddBankPage;
