//? react
import React from 'react';
import {View, Text} from 'react-native';

//? components
import MyCard from './components/card';
import MenuHome from './components/menu';
import GraphGold from './components/graph';
import Notification from './components/notification';
import Box from '../../../base/components/ui_component/box';
import ButtonIcon from '../../../base/components/ui_component/button_icon';

//? base
import {styles} from './style';
import stylesGlobal from '../../../base/styles_global';
import {colorGold, colorTextTitle} from '../../../base/color';

const HomePage = () => {
  return (
    <View style={styles.container}>
      {styleTextTitle('ยอดคงเหลือ')}
      <View style={stylesGlobal.row}>
        <Text style={styles.textAmount}>{`฿ 0.00`}</Text>
        <Box w={15} />
        <ButtonIcon
          size={24}
          onTap={() => {}}
          color={colorGold}
          name={'add-circle-outline'}
        />
      </View>
      <Box h={15} />
      <MyCard />
      <Box h={15} />
      <Notification />
      <Box h={15} />
      {styleTextTitle('บริการของเรา')}
      <MenuHome />
      <View
        style={{
          height: 5,
          marginHorizontal: -15,
          backgroundColor: '#EFEFEF',
        }}
      />
      <Box h={20} />
      {styleTextTitle('ราคาทองวันนี้')}
      <GraphGold />
    </View>
  );
};

const styleTextTitle = (text: string) => {
  return (
    <Text style={{fontSize: 18, color: colorTextTitle, fontWeight: 'bold'}}>
      {text}
    </Text>
  );
};

export default HomePage;
