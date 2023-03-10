//? react
import React from 'react';
import {View, Text, ScrollView} from 'react-native';

//? components
import MyCard from './components/card';
import MenuHome from './components/menu';
import GraphGold from './components/graph';
import Notification from './components/notification';
import Box from '../../../base/components/ui_component/box';
import ButtonIcon from '../../../base/components/ui_component/button_icon';

//? base
import {styles} from './style';
import {colorGold} from '../../../base/color';
import stylesGlobal from '../../../base/styles_global';

const HomePage = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Box h={15} />
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
      <Box h={10} />
      <MenuHome />
      {divider()}
      <Box h={20} />
      {styleTextTitle('ราคาทองวันนี้')}
      <GraphGold />
    </ScrollView>
  );
};

const styleTextTitle = (text: string) => {
  return <Text style={styles.textTitle}>{text}</Text>;
};

const divider = () => {
  return (
    <View
      style={{
        height: 5,
        backgroundColor: '#EFEFEF',
      }}
    />
  );
};

export default HomePage;
