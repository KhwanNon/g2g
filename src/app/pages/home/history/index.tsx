import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import TabMenu from './components/tab';
import CardBuy from './components/card/buy';
import CardSell from './components/card/sell';
import CardGift from './components/card/gift';
import CardTopUp from './components/card/top_up';
import CardRedeem from './components/card/redeem';
import CardWithdraw from './components/card/withdraw';
import CardDepositGold from './components/card/deposit_gold';
import Box from '../../../../base/components/ui_component/box';

import stylesGlobal from '../../../../base/styles_global';

function HistoryPage() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const DATA = [1, 2, 3, 4, 5, 6];

  function renderCard() {
    switch (activeTabIndex) {
      case 0:
        return <CardTopUp />;
      case 1:
        return <CardBuy />;
      case 2:
        return <CardSell />;
      case 3:
        return <CardDepositGold />;
      case 4:
        return <CardRedeem />;
      case 5:
        return <CardGift />;
      case 6:
        return <CardWithdraw />;
      default:
        return <View />;
    }
  }

  return (
    <View style={stylesGlobal.containerWhite}>
      <Box h={10} />
      <TabMenu index={activeTabIndex} setIndex={setActiveTabIndex} />
      <View style={{flex: 1}}>
        <FlatList
          data={DATA}
          style={{paddingVertical: 15}}
          keyExtractor={item => `#${item}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => renderCard()}
        />
      </View>
    </View>
  );
}

export default HistoryPage;
