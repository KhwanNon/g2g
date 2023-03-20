import React from 'react';
import {View, Text, Modal} from 'react-native';

import RowData from '../row_data';
import Box from '../../../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';
import ButtonText from '../../../../../../base/components/ui_component/button_text';

import {
  colorEgg,
  colorRed,
  colorBlue,
  colorGold,
  colorYellow,
  colorDarkGold2,
  colorLightGrey,
  colorTextTitle,
} from '../../../../../../base/color';
import {styles} from '../../style';
import stylesGlobal from '../../../../../../base/styles_global';

type Props = {
  open: boolean;
  setOpen: Function;
};

const GiftModal = ({open, setOpen}: Props) => {
  const textWarning =
    '*หากไม่มีผู้รับของขวัญภายใน 7 วัน \nระบบจะทำการโอน E-Gold กลับอัตโนมัติ';

  const changeColorText = (status: string): string => {
    let map: any = {
      reject: colorRed,
      pending: colorBlue,
      success: colorYellow,
    };
    return map[status] ?? colorBlue;
  };

  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000060',
        }}>
        <View style={styles.modal}>
          <View style={stylesGlobal.rowCenter}>
            <Text style={{color: colorTextTitle, fontSize: 18}}>
              ผู้ส่งของขวัญ
            </Text>
          </View>
          <Box h={10} />
          <RowData title={'ชื่อ '} value={'xxxxxxxxxxx'} />
          <RowData title={'นามสกุล'} value={'xxxxxxxxxxx'} />
          <RowData title={'น้ำหนักทองคำ'} value={'1 บาททอง'} />
          <RowData title={'ค่ากำเหน็จ'} value={'000.00 ฿'} />
          <RowData title={'ค่าธรรมเนียมให้บริการ'} value={'000.00 ฿'} />
          <RowData title={'ค่าธรรมเนียมพิเศษ(ลายทอง)'} value={'000.00 ฿'} />
          <RowData title={'ราคาทอง/บาท'} value={'23,500.00 ฿'} />
          <RowData title={'รวม'} value={'23,500.00 ฿'} />
          <RowData title={'วันที่ทำรายการ'} value={'29/06/2022'} />
          <RowData title={'เวลา'} value={'17:30:00'} />
          <RowData title={'รับทองคำผ่านระบบ'} value={'SMS'} />
          <RowData title={'รหัสรับทอง'} value={''} />
          <View style={{...stylesGlobal.rowBetween}}>
            <Text style={{color: colorTextTitle}}>000*******************</Text>
            <ButtonText
              fontSize={14}
              title={'ดูรหัสรับทอง'}
              color={colorDarkGold2}
            />
          </View>
          <Box h={20} />
          <RowData
            title={'สถานะ'}
            value={'รอดำเนินการ'}
            color={changeColorText('pending')}
          />
          <View style={{...stylesGlobal.rowBetween, alignItems: 'flex-start'}}>
            <Text style={{color: colorTextTitle, fontSize: 13}}>
              {textWarning}
            </Text>
            <ButtonStyle
              width={90}
              height={30}
              title={'ยกเลิก'}
              colorTxt={colorGold}
              backgroundColor={colorEgg}
            />
          </View>
          <Box h={30} />
          <View style={{...stylesGlobal.rowCenter}}>
            <ButtonStyle
              width={'40%'}
              height={40}
              title={'ปิด'}
              colorTxt={'black'}
              onTap={() => setOpen(false)}
              backgroundColor={colorLightGrey}
            />
          </View>
          <Box h={5} />
        </View>
      </View>
    </Modal>
  );
};

export default GiftModal;
