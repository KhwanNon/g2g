import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardRedeem from './components/card';
import {styleButtonTap} from '../../gold_trade';
import ModalFilter from './components/modal_filter';
import Box from '../../../../../base/components/ui_component/box';

import {styles} from '../style';
import stylesGlobal from '../../../../../base/styles_global';

const RedeemPage = () => {
  const [index, setIndex] = useState<number>(0);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const onChangeTab = () => {
    return index == 0 ? setIndex(1) : setIndex(0);
  };

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

  return (
    <View style={stylesGlobal.containerWhite}>
      <View style={stylesGlobal.rowEvenly}>
        {styleButtonTap('ทองรูปพรรณ', index == 0, onChangeTab)}
        {styleButtonTap('ทองคำแท่ง', index == 1, onChangeTab)}
      </View>

      <Box h={15} />
      <View style={{...stylesGlobal.rowBetween, paddingHorizontal: 15}}>
        <Text style={styles.textBtn}>All (20)</Text>
        <TouchableOpacity
          style={stylesGlobal.row}
          onPress={() => setOpenFilter(true)}>
          <Ionicons size={22} color={'black'} name={'ios-options'} />
          <Box w={5} />
          <Text style={styles.textBtn}>Filter</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          ListFooterComponent={<Box h={30} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `#${item}`}
          style={{paddingVertical: 15}}
          numColumns={2}
          data={list}
          renderItem={({item}) => {
            return <CardRedeem item={item} />;
          }}
        />
      </View>

      <ModalFilter open={openFilter} setOpen={setOpenFilter} />
    </View>
  );
};

export default RedeemPage;
