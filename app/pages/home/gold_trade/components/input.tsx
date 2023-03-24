import React from 'react';
import {styles} from '../style';
import {View, Text, TextInput} from 'react-native';
import {colorDarkGold2} from '../../../../../base/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stylesGlobal from '../../../../../base/styles_global';
import Box from '../../../../../base/components/ui_component/box';
import Row from '../../../../../base/components/ui_component/row';

const InputTrade = () => {
  return (
    <View style={styles.cardTrade}>
      <Row style={stylesGlobal.evenly}>
        <View>
          <Text style={styles.textLabel}>E-Gold</Text>
          <Box h={4} />
          <View style={styles.inputGold}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>1</Text>
          </View>
        </View>

        <Ionicons
          size={30}
          name={'md-repeat'}
          color={colorDarkGold2}
          style={{marginTop: 20}}
        />

        <View>
          <Text style={styles.textLabel}>จำนวนเงิน</Text>
          <Box h={4} />
          <TextInput style={styles.inputAmount} placeholder="กรอกจำนวนเงิน" />
        </View>
      </Row>

      <View>
        <Row style={stylesGlobal.center}>
          <Text style={styles.textLabel}>1 E-Gold = 1 บาททองคำ</Text>
        </Row>
        <Row style={stylesGlobal.center}>
          <Text style={styles.textLabel}>
            ราคาซื้อ ณ ปัจุบัน 25,100.00 บาท = 1 บาททองคำ
          </Text>
        </Row>
      </View>
    </View>
  );
};

export default InputTrade;
