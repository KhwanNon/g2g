import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';

import Box from '../../../../../base/components/ui_component/box';

import {styles} from '../style';
import stylesGlobal from '../../../../../base/styles_global';
import {colorOrange, colorTextSubTitle} from '../../../../../base/color';

type Props = {
  index: number;
  setIndex: Function;
};

const TabMenu = ({index, setIndex}: Props) => {
  const tabs = [
    'Top-Up',
    'Buy',
    'Sell',
    'ฝากทอง',
    'Redeem',
    'Gift',
    'Withdraw',
  ];

  const renderDivider = (idx: number) => {
    const isActiveTab = index === idx;
    return <View style={isActiveTab ? styles.divider : styles.dividerGrey} />;
  };

  const renderItem = () => {
    return tabs.map((item, idx) => (
      <TouchableOpacity
        key={`#${idx}`}
        onPress={() => setIndex(idx)}
        style={[stylesGlobal.columnCenter, {width: 70}]}>
        <Text style={{color: index === idx ? colorOrange : colorTextSubTitle}}>
          {item}
        </Text>
        <Box h={4} />
        {renderDivider(idx)}
      </TouchableOpacity>
    ));
  };

  return (
    <View style={{height: 30, width: '100%', backgroundColor: 'white'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderItem()}
      </ScrollView>
    </View>
  );
};

export default TabMenu;
