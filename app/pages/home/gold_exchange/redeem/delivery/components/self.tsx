import React from 'react';
import {styles} from '../../../style';
import {View, Text, TouchableOpacity} from 'react-native';
import Box from '../../../../../../../base/components/ui_component/box';

const Self = () => {
  return (
    <View>
      <Text style={styles.text}>เลือกรับสินค้าที่นี่</Text>
      <Box h={20} />

      <Text style={styles.text}>จังหวัด</Text>
      <Box h={10} />

      <TouchableOpacity
        style={{...styles.cardBorder, justifyContent: 'center'}}>
        <Text style={styles.text}>เลือกจังหวัดที่ต้องการไปรับ</Text>
      </TouchableOpacity>

      <Box h={20} />
      <Text style={styles.text}>โรบินสัน สาขามหาชัย ชั้น 3</Text>

      <Box h={10} />

      <TouchableOpacity
        style={{...styles.cardBorder, justifyContent: 'center'}}>
        <Text style={styles.text}>เลือกสาขา</Text>
      </TouchableOpacity>

      <Box h={20} />
    </View>
  );
};

export default Self;
