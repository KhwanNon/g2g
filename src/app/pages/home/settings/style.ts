import {StyleSheet} from 'react-native';
import {colorEgg, colorTextLabel, colorTextTitle} from '../../../../base/color';

const styleSetting = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    color: colorTextTitle,
  },
  boxIcon: {
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textName: {
    fontWeight: 'bold',
    color: colorTextLabel,
    fontSize: 16,
  },
  textInfo: {
    fontSize: 16,
  },
  cardLogout: {
    height: 80,
    width: '100%',
    elevation: 5,
    padding: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: 'white',
  },
  cardMenu: {
    height: 660,
    width: '92%',
    elevation: 4,
    paddingTop: 25,
    paddingHorizontal: 20,
    borderRadius: 22,
    backgroundColor: 'white',
  },
  bgView: {
    height: 800,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colorEgg,
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'lightgrey',
  },
});

export default styleSetting;
