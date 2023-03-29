import React, {useState} from 'react';
import {styles} from '../../style';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import ModalRedeem from './modal_redeem';
import Box from '../../../../../../base/components/ui_component/box';

import {colorGold, colorTextTitle} from '../../../../../../base/color';

type Props = {
  item: number;
};

const CardRedeem = ({item}: Props) => {
  const [openRedeem, setOpenRedeem] = useState<boolean>(false);

  return (
    <View style={styles.cardRedeem}>
      <View style={styles.boxImageGold}></View>

      <View style={{padding: 10}}>
        <Text style={{fontSize: 18, color: colorTextTitle}}>
          {item % 2 == 0 ? 'สร้อยคอ' : 'แหวน'}
        </Text>

        <Box h={5} />
        <Text>น้ำหนัก: 1-5 บาททอง</Text>
        <Box h={25} />

        <TouchableOpacity
          style={styles.btnRedeem}
          onPress={() => setOpenRedeem(true)}>
          <Text style={{fontWeight: 'bold', color: colorGold}}>Redeem</Text>
        </TouchableOpacity>
      </View>

      <ModalRedeem open={openRedeem} setOpen={setOpenRedeem} />
    </View>
  );
};

export default CardRedeem;
