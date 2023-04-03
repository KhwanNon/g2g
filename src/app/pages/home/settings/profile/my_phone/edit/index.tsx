import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {renderInput} from '../../address';
import ModalBottom, {
  ModelDataModalBottom,
} from '../../../../../../../base/components/page_component/modal/bottom';
import Box from '../../../../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../../../../base/components/ui_component/button_style';

import {colorGold} from '../../../../../../../base/color';
import stylesGlobal from '../../../../../../../base/styles_global';

function EditPhonePage() {
  const [openChanel, setOpenChanel] = useState<boolean>(false);

  const chanel: ModelDataModalBottom[] = [
    {
      state: 'pin',
      title: 'พินโค้ด',
    },
    {
      state: 'line',
      title: 'ติดต่อฝ่ายบริการลูกค้า',
    },
  ];

  return (
    <View
      style={[
        {padding: 15},
        stylesGlobal.between,
        stylesGlobal.containerWhite,
      ]}>
      <View>
        {renderInput(
          'หมายเลขเบอร์โทรศัพท์',
          '',
          true,
          '000-000-0000',
          '',
          () => {},
        )}

        <Box h={15} />
        {renderInput(
          'หมายเลขเบอร์โทรศัพท์ ใหม่',
          '',
          true,
          'กรอกหมายเลขเบอร์โทรศัพท์',
          '',
          () => {},
        )}

        <Box h={15} />
        {renderInput(
          'ชื่อ - นามสกุล',
          '',
          true,
          'กรอกชื่อที่ลงทะเบียนหมายเลขโทรศัพท์',
          '',
          () => {},
        )}

        <Box h={15} />
        {renderInput(
          'หมายเลขบัตรประจำตัวประชาชน',
          '',
          true,
          'กรอกหมายเลข 13 หลัก',
          '',
          () => {},
        )}
      </View>

      <ButtonStyle
        height={45}
        title={'ต่อไป'}
        width={'100%'}
        colorTxt={'white'}
        backgroundColor={colorGold}
        onTap={() => setOpenChanel(true)}
      />

      <ModalBottom
        items={chanel}
        state={'editPhone'}
        open={openChanel}
        title="ช่องทางยืนยัน OTP"
        setOpen={setOpenChanel}
      />
    </View>
  );
}

export default EditPhonePage;
