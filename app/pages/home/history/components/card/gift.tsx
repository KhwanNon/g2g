import React, {useState} from 'react';
import {View, Text} from 'react-native';

import RowData from '../row_data';
import Box from '../../../../../../base/components/ui_component/box';
import ButtonStyle from '../../../../../../base/components/ui_component/button_style';

import {
  colorRed,
  colorBlue,
  colorYellow,
  colorTextTitle,
  colorEgg,
  colorGold,
} from '../../../../../../base/color';
import {styles} from '../../style';
import stylesGlobal from '../../../../../../base/styles_global';
import GiftModal from '../details_modal/gift';

const CardGift = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const textWarning =
    '*หากไม่มีผู้รับของขวัญภายใน 7 วัน \nระบบจะทำการโอน E-Gold กลับอัตโนมัติ';

  const changeColorText = (status: string): string => {
    let map: any = {
      reject: colorRed,
      pending: colorBlue,
      success: colorYellow,
    };
    return map[status] || colorBlue;
  };

  return (
    <View style={styles.card}>
      <View style={stylesGlobal.rowCenter}>
        <Text style={{color: colorTextTitle, fontSize: 16}}>ผู้ส่งของขวัญ</Text>
      </View>
      <RowData title={'ชื่อ'} value={'xxxxxxxxxxx'} />
      <RowData title={'นามสกุล'} value={'xxxxxxxxxxx'} />
      <RowData title={'น้ำหนักทองคำ'} value={'1 บาททอง'} />
      <RowData title={'รับทองคำผ่านระบบ'} value={'SMS'} />
      <RowData
        title={'สถานะ'}
        value={'รอดำนเนิการ'}
        color={changeColorText('pending')}
      />
      <View style={stylesGlobal.rowBetween}>
        <Text style={{color: colorTextTitle, fontSize: 13}}>{textWarning}</Text>
        <ButtonStyle
          width={85}
          height={30}
          title={'ยกเลิก'}
          colorTxt={colorGold}
          backgroundColor={colorEgg}
        />
      </View>
      <Box h={20} />
      <View style={stylesGlobal.rowCenter}>
        <ButtonStyle
          height={35}
          width={'50%'}
          colorTxt={'white'}
          title={'รายละเอียดเพิ่มเติม'}
          backgroundColor={colorGold}
          onTap={() => setOpenDetails(true)}
        />
      </View>
      <Box h={10} />
      <GiftModal open={openDetails} setOpen={setOpenDetails} />
    </View>
  );
};

export default CardGift;
