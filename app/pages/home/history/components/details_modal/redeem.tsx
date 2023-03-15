//? reatc
import React from 'react';
import {View, Text, Modal} from 'react-native';

//? component
import RowData from '../row_data';
import Box from '../../../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';

//? base
import {
  colorEgg,
  colorGold,
  colorLightGrey,
  colorTextTitle,
} from '../../../../../../base/color';
import {styles} from '../../style';
import stylesGlobal from '../../../../../../base/styles_global';

type Props = {
  open: boolean;
  setOpen: Function;
};

const RedeemModal = ({open, setOpen}: Props) => {
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
            <Text style={{color: colorTextTitle, fontSize: 16}}>
              รายละเอียดเพิ่มเติม
            </Text>
          </View>
          <Box h={10} />
          <RowData title={'รหัสสินค้า '} value={'xxxxxxxxxxx'} />
          <RowData title={'ชื่อสินค้า'} value={'xxxx xxxx'} />
          <RowData title={'ผู้จำหน่ายทอง'} value={'xxxx xxxx'} />
          <RowData title={'น้ำหนักทองคำ'} value={'1 บาททอง'} />
          <RowData title={'ราคาทองคำ'} value={'00,000.00 ฿'} />
          <RowData title={'ค่าธรรมเนียมให้บริการ'} value={'000.00 ฿'} />
          <RowData title={'ค่าธรรมเนียมพิเศษ(ลายทอง)'} value={'000.00 ฿'} />
          <RowData title={'รับได้ตั้งแต่วันที่'} value={'29/06/2022'} />
          <RowData title={'วิธีรับสินค้า'} value={'รับด้วยตนเอง'} />
          <RowData title={'จังหวัด'} value={'กรุงเทพ'} />
          <RowData title={'สาขา'} value={'xxxxxx'} />
          <View style={{...stylesGlobal.rowBetween, alignItems: 'flex-start'}}>
            <Text style={{color: colorTextTitle}}>สถานะ</Text>
            <ButtonStyle
              width={115}
              height={30}
              title={'ดูรหัสรับสินค้า'}
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

export default RedeemModal;
