import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Modal} from 'react-native';
import stylesGlobal from '../../../../../base/styles_global';
import Box from '../../../../../base/components/ui_component/box';
import ButtonIcon from '../../../../../base/components/ui_component/button_icon';
import {colorDarkGold2, colorGold, colorGrey} from '../../../../../base/color';
import CardSummaryDeposit from './card_summary';
import {styles} from '../style';
import RowData from '../../history/components/row_data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonText from '../../../../../base/components/ui_component/button_text';
import ModalTerm from './modal_term';
import ButtonStyle from '../../../../../base/components/ui_component/button_style';

type Props = {
  open: boolean;
  setOpen: Function;
};

const ModalSummaryRepurchase = ({open, setOpen}: Props) => {
  const close = () => setOpen(false);
  const [openTerm, setOpenTerm] = useState<boolean>(false);

  return (
    <Modal visible={open} animationType="fade">
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={[stylesGlobal.rowBetween, {padding: 10}]}>
          <ButtonIcon
            size={30}
            color={'grey'}
            onTap={close}
            name={'chevron-back'}
          />
          <Text style={stylesGlobal.textHeader}>
            ทำรายการเมื่อวันที่ 00 ก.ก. 0000
          </Text>
          <Box w={20} />
        </View>
        <View style={{flex: 1, backgroundColor: colorGrey, padding: 15}}>
          <View style={[styles.cardBorderSummary]}>
            <Box h={10} />
            <Text
              style={{
                fontSize: 26,
                alignSelf: 'center',
                fontWeight: 'bold',
                color: 'black',
              }}>
              21,250฿
            </Text>
            <Box h={5} />
            <Text style={{alignSelf: 'center'}}>
              วันครบกำหนดซื้อคืนทอง 00 ก.ก. 0000
            </Text>
            <Box h={20} />
            <Text style={[styles.textLabel, {fontSize: 17}]}>
              สรุปรายการฝากทอง
            </Text>
            <Box h={20} />
            <RowData title={'น้ำหนักทองที่ฝาก'} value={'1 บาท'} />
            <Box h={5} />
            <RowData title={'ราคาทองที่ฝาก'} value={'20,000฿'} />
            <Box h={5} />
            <RowData title={'ระยะเวลาที่ต้องซื้อคืน'} value={'5 เดือน'} />
            <Box h={5} />
            <RowData title={'อัตตราดอกเบี้ย 1.25% ต่อเดือน'} value={'+250฿'} />
            <Box h={5} />
            <RowData title={'ดอกเบี้ยเมื่อครบกำหนด'} value={'+1,250฿'} />
            <Box h={5} />
            <RowData title={'ดอกเบี้ย ณ ปัจจุบัน'} value={'+125฿'} />
            <Box h={5} />
            <RowData title={'รวมราคาสุทธิ'} value={'21,250฿'} />
            <Box h={10} />
            <Text style={[styles.textLabel, {fontSize: 17}]}>
              สรุปรายการที่ต้องซื้อคืน
            </Text>
            <Box h={10} />
            <RowData title={'ยอดที่ต้องชำระ'} value={'21,250฿'} />
            <Box h={5} />
          </View>
        </View>
        <View style={{padding: 15, backgroundColor: colorGrey}}>
          <View style={[stylesGlobal.row]}>
            <Ionicons
              size={25}
              color={colorDarkGold2}
              name={'ios-alert-circle-outline'}
            />
            <Box w={5} />
            <Text>ข้อกำหนดและเงื่อนไขการฝากทอง</Text>
            <Box w={3} />
            <ButtonText
              fontSize={14}
              underLine={true}
              title={'คลิกเพื่ออ่าน'}
              color={colorDarkGold2}
              onTap={() => setOpenTerm(true)}
            />
          </View>

          <Box h={10} />
          <ButtonStyle
            height={45}
            width={'100%'}
            colorTxt={'white'}
            title={'ยืนยันฝากทอง'}
            backgroundColor={colorGold}
          />
        </View>
      </View>
      <ModalTerm open={openTerm} setOpen={setOpenTerm} />
    </Modal>
  );
};

export default ModalSummaryRepurchase;
