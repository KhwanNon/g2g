import React from 'react';
import {View, Text, Modal} from 'react-native';

import {
  colorGold,
  colorYellow2,
  colorTextTitle,
  colorTextLabel,
} from '../../../../../../base/color';
import {styles} from '../../style';
import stylesGlobal from '../../../../../../base/styles_global';

import {radio} from '../../../settings/add_bank/form';
import Box from '../../../../../../base/components/ui_component/box';
import Row from '../../../../../../base/components/ui_component/row';
import Divider from '../../../../../../base/components/ui_component/divider';
import ButtonIcon from '../../../../../../base/components/ui_component/button_icon';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';
import ButtonText from '../../../../../../base/components/ui_component/button_text';

type Props = {
  open: boolean;
  setOpen: Function;
};

function ModalSummaryGift({open, setOpen}: Props) {
  const close = () => setOpen(false);

  return (
    <Modal visible={open} transparent animationType="fade">
      <View style={styles.containerModal}>
        <View style={styles.cardModal}>
          <Row style={[stylesGlobal.between]}>
            <Box w={10} />
            <ButtonIcon
              size={25}
              name={'close'}
              color={'black'}
              onTap={close}
            />
          </Row>
          <View style={{padding: 10}}>
            <Text
              style={{
                fontSize: 17,
                textAlign: 'center',
                fontWeight: 'bold',
                color: colorTextTitle,
              }}>
              {'ส่งของขวัญสำเร็จ\n สรุปการโอนทองคำผ่านระบบ'}
            </Text>

            <Box h={30} />
            <Text style={styles.text}>มูลค่าทองคำที่ต้องการโอน</Text>
            <Box h={10} />
            <Text style={{color: colorTextLabel}}>1 บาท</Text>
            <Box h={10} />
            <Divider />

            <Box h={20} />
            <Text style={styles.text}>ผู้รับทองคำผ่านระบบ SMS</Text>
            <Box h={10} />
            <Text style={{color: colorTextLabel}}>0000000000</Text>
            <Box h={10} />
            <Divider />

            <Box h={30} />
            <Text style={styles.text}>รหัสผ่านเพื่อเปิดลิงค์</Text>
            <Box h={10} />
            <Text style={{color: colorTextLabel}}>
              xxx000xx00x0x0xxxxxx000x0000x0xx0000xxxxxxxx0000xx000xx00x0x
            </Text>

            <Box h={20} />
            <Row style={stylesGlobal.center}>
              <ButtonStyle
                height={40}
                width={'45%'}
                colorTxt={'white'}
                title={'คัดลอกรหัส'}
                backgroundColor={colorGold}
              />
            </Row>

            <Box h={30} />
            <Text style={{color: colorTextLabel}}>หมายเหตุ</Text>
            <Box h={15} />
            {radio(
              'โปรดมั่นใจก่อนทุกครั้งก่อนที่จะให้รหัสผ่านเพื่อเปิดลิงค์ กับผู้อื่น หากผู้ที่ไม่พึ่งประสงค์ได้รับรหัสผ่านและลิงค์ ทองที่ท่านโอนผู้รับให้จะถูกโอนไปให้โดยทันที',
            )}
            <Row>
              {radio('หากต้องการดูรหัสผ่านอีกครั้ง โปรดไปดู')}
              <Box w={5} />
              <ButtonText
                fontSize={12}
                color={colorYellow2}
                title={'คลิกที่นี่ History'}
              />
            </Row>
            <Box h={10} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalSummaryGift;
