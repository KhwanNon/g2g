import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, ScrollView} from 'react-native';

import Box from '../../../../../base/components/ui_component/box';
import Row from '../../../../../base/components/ui_component/row';
import Divider from '../../../../../base/components/ui_component/divider';
import ButtonText from '../../../../../base/components/ui_component/button_text';
import ButtonIcon from '../../../../../base/components/ui_component/button_icon';
import ButtonStyle from '../../../../../base/components/ui_component/button_style';

import {styles} from './style';
import stylesGlobal from '../../../../../base/styles_global';
import {colorGold, colorYellow} from '../../../../../base/color';

function ProfilePage() {
  const isFocused = useIsFocused();
  const navigation: any = useNavigation();
  const [indexTab, setIndexTab] = useState<number>(0);

  useEffect(() => {
    if (isFocused) {
      //means on this page
      //refresh info
    }
  }, [isFocused]);

  function renderInput(
    label: string,
    placeholder: string,
    onTap: () => void,
    editable?: boolean,
    state?: string,
    icon?: string,
  ) {
    return (
      <View>
        <Box h={15} />
        {renderLabel(label)}
        <TextInput placeholder={placeholder} editable={editable} />
        {state === 'icon' && (
          <ButtonIcon
            size={23}
            color={'grey'}
            onTap={onTap}
            name={icon ?? ''}
            style={{position: 'absolute', bottom: 20, right: 0}}
          />
        )}
        {state === 'edit' && (
          <View style={{position: 'absolute', bottom: 20, right: 0}}>
            <ButtonText
              title={'แก้ไข'}
              fontSize={14}
              onTap={onTap}
              color={colorYellow}
            />
          </View>
        )}
        <Divider />
      </View>
    );
  }

  function renderSelectGender(text: string, isSelect: boolean, index: number) {
    return (
      <Row>
        <ButtonIcon
          size={17}
          name={'square'}
          onTap={() => setIndexTab(index)}
          color={isSelect ? colorYellow : 'lightgrey'}
        />
        <Box w={7} />
        <Text>{text}</Text>
        <Box w={15} />
      </Row>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[stylesGlobal.containerWhite, {padding: 15}]}>
      <View style={styles.boxImage}></View>
      <Box h={20} />
      <Divider />

      {renderInput('เลขบัตรประชาชน', '0 0000 00000 00 0', () => {})}

      {renderInput('หมายเลขหลังบัตรประจำตัวประชาชน', 'ME0000000000', () => {})}

      <Box h={20} />
      <Row>
        {renderSelectGender('นาย', indexTab === 0, 0)}
        {renderSelectGender('นาง', indexTab === 1, 1)}
        {renderSelectGender('นางสาว', indexTab === 2, 2)}
      </Row>

      {renderInput('ชื่อ ', 'ชื่อ ', () => {})}

      {renderInput('นามสกุล', 'นามสกุล', () => {})}

      {renderInput(
        'วัน/เดือน/ปี',
        'วัน/เดือน/ปี',
        () => {},
        false,
        'icon',
        'chevron-down',
      )}

      {renderInput('หมายเลขโทรศัพท์', '000 000 0000', () => {})}

      {renderInput('อีเมล', 'อีเมล', () => {})}

      {renderInput(
        'อาชีพ',
        'เลือกอาชีพ',
        () => {},
        false,
        'icon',
        'chevron-forward',
      )}

      {renderInput(
        'ที่อยู่ตามบัตรประจำตัวประชาชน',
        'ไม่มีข้อมูล',
        () => navigation.push('AddressInfo', {state: 'card'}),
        false,
        'icon',
        'chevron-forward',
      )}

      {renderInput(
        'ที่พักอาศัย',
        'ไม่มีข้อมูล',
        () => navigation.push('AddressInfo', {state: 'current'}),
        false,
        'icon',
        'chevron-forward',
      )}

      {renderInput(
        'สถานที่ทำงาน',
        'ไม่มีข้อมูล',
        () => navigation.push('AddressInfo', {state: 'work'}),
        false,
        'icon',
        'chevron-forward',
      )}

      {renderInput('ยืนยันตัวตน', 'ยืนยันตัวตนแล้ว', () => {}, false)}

      {renderInput(
        'ยืนยันหมายเลขโทรศัพท์',
        '0000000000',
        () => navigation.push('MyPhone'),
        false,
        'edit',
      )}

      <Box h={40} />
      <ButtonStyle
        height={45}
        title={'บันทึก'}
        width={'100%'}
        colorTxt={'white'}
        backgroundColor={colorGold}
      />
      <Box h={40} />
    </ScrollView>
  );
}

export function renderLabel(text: string) {
  return <Text style={styles.label}>{text}</Text>;
}

export default ProfilePage;
