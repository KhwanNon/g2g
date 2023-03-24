import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from '../style';
import {colorRed2} from '../../../../../base/color';
import stylesGlobal from '../../../../../base/styles_global';

import Box from '../../../../../base/components/ui_component/box';
import Row from '../../../../../base/components/ui_component/row';

type Props = {
  onPress: () => void;
};

const CardRepurchase = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.cardRepurchase} onPress={onPress}>
      <Text>ฝากทองเมื่อวันที่ 00 ก.ก. 0000</Text>

      <Row style={[stylesGlobal.between]}>
        <View style={styles.cardWarning}>
          <Text style={{fontSize: 7, color: colorRed2}}>
            ครบกำหมดซื้อคืนแล้ว
          </Text>
        </View>

        <Row>
          <Text style={styles.listTileRepurchase}>21,250฿</Text>
          <Box w={10} />
          <Ionicons name={'chevron-forward'} size={20} color={'grey'} />
        </Row>
      </Row>

      <Text>วันครบกำหนดซื้อคืนทอง 00 ก.ก. 0000</Text>
    </TouchableOpacity>
  );
};

export default CardRepurchase;
