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
  const Tabs = [
    'Top-Up',
    'Buy',
    'Sell',
    'ฝากทอง',
    'Redeem',
    'Gift',
    'Withdraw',
  ];

  const onTap = (index: number) => {
    setIndex(index);
  };

  return (
    <View style={{height: 30, width: '100%', backgroundColor: 'white'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Tabs.map((item, idx) => (
          <TouchableOpacity
            key={`#${idx}`}
            onPress={() => onTap(idx)}
            style={{...stylesGlobal.columnCenter, width: 70}}>
            <View>
              <Text
                style={{color: index == idx ? colorOrange : colorTextSubTitle}}>
                {item}
              </Text>
            </View>
            <Box h={4} />
            {index == idx ? (
              <View style={styles.divider} />
            ) : (
              <View style={styles.dividerGrey} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TabMenu;
