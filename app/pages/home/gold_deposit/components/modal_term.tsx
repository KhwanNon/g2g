import React from 'react';
import {View, Text, Modal, ScrollView} from 'react-native';
import {colorGold, colorEgg, colorGrey} from '../../../../../base/color';
import Box from '../../../../../base/components/ui_component/box';
import ButtonIcon from '../../../../../base/components/ui_component/button_icon';
import ButtonStyle from '../../../../../base/components/ui_component/button_style';
import stylesGlobal from '../../../../../base/styles_global';

type Props = {
  open: boolean;
  setOpen: Function;
};

const ModalTerm = ({open, setOpen}: Props) => {
  const close = () => setOpen(false);

  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View style={[stylesGlobal.containerWhite, {padding: 10}]}>
        <View style={stylesGlobal.rowBetween}>
          <ButtonIcon
            size={30}
            color={'grey'}
            onTap={close}
            name={'chevron-back'}
          />
          <Text style={stylesGlobal.textHeader}>ข้อกำหนดและเงื่อนไข</Text>
          <Box w={20} />
        </View>

        <Box h={20} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: colorGrey,
          }}>
          {[1, 2, 3, 4].map(item => {
            return (
              <Text key={item}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Text>
            );
          })}
          <Box h={30} />
        </ScrollView>

        <Box h={20} />
        <View style={[stylesGlobal.rowEvenly]}>
          <Box h={30} />
          <ButtonStyle
            height={45}
            width={'40%'}
            title={'ยินยอม'}
            colorTxt={'white'}
            onTap={close}
            backgroundColor={colorGold}
          />
          <ButtonStyle
            height={45}
            width={'40%'}
            onTap={close}
            title={'ไม่ยินยอม'}
            colorTxt={colorGold}
            backgroundColor={colorEgg}
          />
        </View>
        <Box h={20} />
      </View>
    </Modal>
  );
};

export default ModalTerm;
