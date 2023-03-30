import React, {useState} from 'react';
import {styles} from '../../style';
import {View, Text, TouchableOpacity} from 'react-native';

import Box from '../../../../../../base/components/ui_component/box';

import {colorGold, colorTextTitle} from '../../../../../../base/color';
import ModalBottom, {ModelDataModalBottom} from '../../../../../../base/components/page_component/modal/bottom';

type Props = {
  item: number;
};

function CardRedeem({item}: Props) {
  const [openRedeem, setOpenRedeem] = useState<boolean>(false);

  const store: ModelDataModalBottom[] = [
    {
      state: 'self',
      title: 'รับด้วยตนเองที่ร้าน',
    },
    {
      state: 'ems',
      title: 'บริการจัดส่ง',
    },
  ];

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

      <ModalBottom
        items={store}
        state={'redeem'}
        title='เลือกวิธีรับทองคำ'
        open={openRedeem}
        setOpen={setOpenRedeem}
      />
    </View>
  );
}

export default CardRedeem;
