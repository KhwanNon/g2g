import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import CardRedeem from './components/card';
import {styleButtonTap} from '../../gold_trade';
import ModalFilter from './components/modal_filter';
import Row from '../../../../../base/components/ui_component/row';
import Box from '../../../../../base/components/ui_component/box';

import {styles} from '../style';
import stylesGlobal from '../../../../../base/styles_global';
import useTab from '../../../../../hooks/use_tab';

const RedeemPage = () => {
  const {index, toggleValue} = useTab(0);
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

  const renderItem = ({item}: any) => <CardRedeem item={item} />;

  return (
    <View style={stylesGlobal.containerWhite}>
      <Row style={stylesGlobal.evenly}>
        {styleButtonTap('ทองรูปพรรณ', index == 0, () => toggleValue(0))}
        {styleButtonTap('ทองคำแท่ง', index == 1, () => toggleValue(1))}
      </Row>

      <Box h={15} />
      <Row style={[stylesGlobal.between, {paddingHorizontal: 15}]}>
        <Text style={styles.textBtn}>All (20)</Text>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => setOpenFilter(true)}>
          <Ionicons size={22} color={'black'} name={'ios-options'} />
          <Box w={5} />
          <Text style={styles.textBtn}>Filter</Text>
        </TouchableOpacity>
      </Row>

      <View style={{flex: 1}}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          style={{paddingVertical: 15}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => `#${item}`}
          ListFooterComponent={<Box h={30} />}
        />
      </View>

      <ModalFilter open={openFilter} setOpen={setOpenFilter} />
    </View>
  );
};

export default RedeemPage;
