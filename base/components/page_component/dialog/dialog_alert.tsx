import React from 'react';
import Box from '../../ui_component/box';
import ButtonStyle from '../../ui_component/button_style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Modal} from 'react-native';
import {colorLightGrey, colorTextLabel} from '../../../color';

type Props = {
  open: boolean;
  icon: string;
  title: string;
  caption?: string;
  iconColor: string;
  setOpen: Function;
  txtButton: string;
  onConfirm: () => void;
};

const DialogAlert = (props: Props) => {
  const {open, icon, title, setOpen, caption, txtButton, iconColor, onConfirm} =
    props;

  return (
    <Modal visible={open} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.card}>
          <Ionicons name={icon} size={60} color={iconColor} />
          <Box h={10} />
          <Text style={styles.txtTitle}>{title}</Text>
          <Box h={10} />
          {caption ? <Text style={styles.txtCaption}>{caption}</Text> : null}
          <Box h={20} />
          <ButtonStyle
            height={40}
            width={'45%'}
            onTap={onConfirm}
            title={txtButton}
            colorTxt={'white'}
            backgroundColor={colorLightGrey}
          />
          <Box h={10} />
        </View>
      </View>
    </Modal>
  );
};

export default DialogAlert;

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
    fontSize: 26,
    color: colorTextLabel,
  },
  card: {
    width: '80%',
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
