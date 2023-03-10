import React from 'react';
import Box from '../../ui_component/box';
import stylesGlobal from '../../../styles_global';
import ButtonStyle from '../../ui_component/button_style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {colorGold, colorLightGrey, colorTextLabel} from '../../../color';

type Props = {
  open: boolean;
  icon: string;
  title: string;
  txtL: string;
  txtR: string;
  caption?: string;
  txtColorL: string;
  txtColorR: string;
  iconColor: string;
  subTitle?: string;
  setOpen: Function;
  onConfirm: () => void;
};

const DialogConfirm = (props: Props) => {
  const {
    open,
    txtR,
    txtL,
    icon,
    title,
    setOpen,
    caption,
    iconColor,
    subTitle,
    txtColorL,
    txtColorR,
    onConfirm,
  } = props;

  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.card}>
          <Ionicons name={icon} size={60} color={iconColor} />
          <Box h={10} />
          <Text style={styles.txtTitle}>{title}</Text>
          <Box h={10} />
          {subTitle ? <Text style={styles.txtSubTitle}>{subTitle}</Text> : null}
          <Box h={10} />
          {caption ? <Text style={styles.txtCaption}>{caption}</Text> : null}
          <Box h={20} />
          <View style={stylesGlobal.row}>
            <ButtonStyle
              height={45}
              width={'45%'}
              title={txtL}
              colorTxt={txtColorL}
              onTap={() => setOpen(false)}
              backgroundColor={colorLightGrey}
            />
            <Box w={20} />
            <ButtonStyle
              height={45}
              width={'45%'}
              title={txtR}
              onTap={onConfirm}
              colorTxt={txtColorR}
              backgroundColor={colorGold}
            />
          </View>
          <Box h={10} />
        </View>
      </View>
    </Modal>
  );
};

export default DialogConfirm;

const styles = StyleSheet.create({
  txtSubTitle: {
    fontSize: 16,
    color: colorTextLabel,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorTextLabel,
  },
  txtCaption: {
    fontSize: 24,
    color: colorTextLabel,
  },
  card: {
    width: '90%',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000090',
  },
});
