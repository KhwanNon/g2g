import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {colorGrey} from '../../../../../base/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../style';
import stylesGlobal from '../../../../../base/styles_global';
import Box from '../../../../../base/components/ui_component/box';

const InputValueDepositGold = () => {
  return (
    <View style={{minHeight: 200, backgroundColor: colorGrey, padding: 15}}>
      <View style={[stylesGlobal.row]}>
        <View style={{flex: 5}}>
          <Text style={styles.textLabel}>จำนวนทองที่ต้องการฝาก</Text>
          <Box h={5} />
          <TextInput
            style={styles.cardBorder}
            placeholder="กรอกจำนวนทองคำที่ต้องการฝากทอง"></TextInput>
        </View>
        <Box w={10} />
        <View style={{flex: 4}}>
          <Text style={styles.textLabel}>หน่วยทอง</Text>
          <Box h={5} />
          <TouchableOpacity style={styles.cardBorder} onPress={() => {}}>
            <Text>เลือกหน่วยทองคำ</Text>
            <Ionicons size={22} color={'grey'} name={'ios-chevron-down'} />
          </TouchableOpacity>
        </View>
      </View>
      <Box h={15} />
      <View style={[{width: '55%'}]}>
        <Text style={styles.textLabel}>ระยะเวลาการฝากทอง</Text>
        <Box h={5} />
        <TouchableOpacity style={styles.cardBorder} onPress={() => {}}>
          <Text>เลือกระยะเวลาการฝากทอง</Text>
          <Ionicons size={22} color={'grey'} name={'ios-chevron-down'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputValueDepositGold;
