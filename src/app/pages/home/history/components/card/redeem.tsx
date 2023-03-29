import React, {useState} from 'react';
import {View, Text} from 'react-native';

import RowData from '../row_data';
import RedeemModal from '../details_modal/redeem';
import Box from '../../../../../../base/components/ui_component/box';
import Row from '../../../../../../base/components/ui_component/row';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';

import {
  colorEgg,
  colorGold,
  colorTextTitle,
} from '../../../../../../base/color';
import {styles} from '../../style';
import stylesGlobal from '../../../../../../base/styles_global';

function CardRedeem() {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  return (
    <View style={styles.card}>
      <Row style={stylesGlobal.center}>
        <Text style={{color: colorTextTitle, fontSize: 16}}>ผู้ส่งของขวัญ</Text>
      </Row>
      <RowData title={'ชื่อสินค้า'} value={'xxxxxxxxxxx'} />
      <RowData title={'น้ำหนักทองคำ'} value={'1 บาททอง'} />
      <RowData title={'เลือกรับสินค้า'} value={'รับด้วยตนเอง'} />
      <RowData title={'รับได้ตั้งแต่วันที่'} value={'29/06/2022'} />
      <Row style={[stylesGlobal.between, {alignItems: 'flex-start'}]}>
        <Text style={{color: colorTextTitle}}>สถานะ</Text>
        <ButtonStyle
          width={115}
          height={30}
          title={'ดูรหัสรับสินค้า'}
          colorTxt={colorGold}
          backgroundColor={colorEgg}
        />
      </Row>
      <Box h={20} />
      <Row style={stylesGlobal.center}>
        <ButtonStyle
          height={35}
          width={'50%'}
          colorTxt={'white'}
          title={'รายละเอียดเพิ่มเติม'}
          backgroundColor={colorGold}
          onTap={() => setOpenDetails(true)}
        />
      </Row>
      <Box h={10} />
      <RedeemModal open={openDetails} setOpen={setOpenDetails} />
    </View>
  );
}

export default CardRedeem;
