import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../style';
import stylesGlobal from '../../../../../base/styles_global';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Box from '../../../../../base/components/ui_component/box';
import {colorRed, colorRed2} from '../../../../../base/color';

type Props = {
  onPress: () => void;
};

const CardRepurchase = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.cardRepurchase} onPress={onPress}>
      <Text>ฝากทองเมื่อวันที่ 00 ก.ก. 0000</Text>
      <View style={[stylesGlobal.rowBetween]}>
        <View style={{borderWidth: 1, borderColor: colorRed2, padding: 3}}>
          <Text style={{fontSize: 7, color: colorRed2}}>
            ครบกำหมดซื้อคืนแล้ว
          </Text>
        </View>
        <View style={[stylesGlobal.row]}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            21,250฿
          </Text>
          <Box w={10} />
          <Ionicons name={'chevron-forward'} size={20} color={'grey'} />
        </View>
      </View>
      <Text>วันครบกำหนดซื้อคืนทอง 00 ก.ก. 0000</Text>
    </TouchableOpacity>
  );
};

export default CardRepurchase;
