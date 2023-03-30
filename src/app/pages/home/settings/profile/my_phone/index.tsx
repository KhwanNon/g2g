import React from 'react';
import {styles} from '../style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Switch} from 'react-native';

import Row from '../../../../../../base/components/ui_component/row';
import Box from '../../../../../../base/components/ui_component/box';

import {colorTextTitle} from '../../../../../../base/color';
import stylesGlobal from '../../../../../../base/styles_global';

function MyPhonePage() {
  const navigation: any = useNavigation();

  function renderPhone() {
    return (
      <>
        <Box h={5} />
        <View style={{...styles.border, paddingVertical: 17}}>
          <Row>
            <Ionicons size={20} color={colorTextTitle} name={'call'} />
            <Box w={10} />
            <Text style={{color: colorTextTitle}}>
              แก้ไขหมายเลขโทรศัพท์ของคุณ
            </Text>
          </Row>
        </View>
      </>
    );
  }

  function renderButtonEdit() {
    return (
      <>
        <Box h={15} />
        <TouchableOpacity
          style={styles.border}
          onPress={() => navigation.push('EditPhone')}>
          <Text style={{color: colorTextTitle}}>
            แก้ไขหมายเลขโทรศัพท์ของคุณ
          </Text>
          <Ionicons size={20} color={'grey'} name={'chevron-forward'} />
        </TouchableOpacity>
      </>
    );
  }

  function renderSwitch() {
    return (
      <>
        <Box h={20} />
        <Row style={stylesGlobal.between}>
          <View>
            <Text style={{color: colorTextTitle}}>แสดงเบอร์โทรศัพท์มือถือ</Text>
            <Box h={5} />
            <Text style={{fontSize: 12}}>
              ตกลงที่จะแสดงเบอร์โทรศัพท์มือถือของผู้ใช้
            </Text>
          </View>
          <Switch value={false} thumbColor="white" />
        </Row>
      </>
    );
  }

  return (
    <View style={{padding: 15}}>
      {renderPhone()}
      {renderButtonEdit()}
      {renderSwitch()}
    </View>
  );
}

export default MyPhonePage;
