import {renderLabel} from '..';
import React, {useLayoutEffect} from 'react';
import {View, Text, Switch} from 'react-native';
import stylesGlobal from '../../../../../../base/styles_global';
import {useNavigation, useRoute} from '@react-navigation/native';
import {colorGold, colorTextLabel} from '../../../../../../base/color';

import Box from '../../../../../../base/components/ui_component/box';
import Row from '../../../../../../base/components/ui_component/row';
import Divider from '../../../../../../base/components/ui_component/divider';
import Column from '../../../../../../base/components/ui_component/column';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';

const AddressInfo = () => {
  const {params: {state}} = useRoute<any>();
  const navigation: any = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title:
        state === 'card'
          ? 'ที่อยู่บนบัตรประจำตัวประชาชน'
          : state === 'current'
          ? 'ที่พักอาศัย'
          : 'สถานที่ทำงาน',
    });
  }, []);

  function renderSwitch(text: string) {
    return (
      <>
        <Row style={[stylesGlobal.alignItemsCenter, {marginLeft: -7}]}>
          <Switch
            value={false}
            thumbColor="white"
            trackColor={{true: colorGold, false: 'lightgrey'}}
          />
          <Box w={10} />
          <Text style={{color: colorTextLabel, fontSize: 13}}>{text}</Text>
        </Row>
        <Box h={10} />
      </>
    );
  }

  return (
    <Column
      style={[
        stylesGlobal.containerWhite,
        {padding: 15, justifyContent: 'space-between'},
      ]}>
      <View>
        {(state === 'card' || state === 'work') && renderSwitch('ใช้ที่อยู่ตามที่พักอาศัย')}
        {(state === 'current' || state === 'work') && renderSwitch('ใช้ที่อยู่ตามบัตรประชาชน')}
        {(state === 'work') && renderSwitch('ระบุที่อยู่ที่ทำงานเอง')}

        <Box h={20} />
        {renderInput('รหัสไปรษณีย์', 'รหัสไปรษณีย์')}

        <Box h={20} />
        {renderInput('จังหวัด', 'จังหวัด')}

        <Box h={20} />
        {renderInput('เขต/อำเภอ', 'เขต/อำเภอ')}

        <Box h={20} />
        {renderInput('แขวง, ตำบล', 'แขวง, ตำบล')}

        <Box h={20} />
        {renderInput('ที่อยู่', 'ที่อยู่ (ถนน, ซอย, บ้านเลขที่)')}
      </View>

      <ButtonStyle
        height={45}
        title={'บันทึก'}
        width={'100%'}
        colorTxt={'white'}
        backgroundColor={colorGold}
      />
    </Column>
  );
};


export function renderInput(label: string, value: string) {
  return (
    <View>
      {renderLabel(label)}
      <Box h={15} />
      <Text>{value}</Text>
      <Box h={15} />
      <Divider />
    </View>
  );
}

export default AddressInfo;
