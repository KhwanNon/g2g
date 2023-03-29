import {StyleSheet} from 'react-native';
import {colorTextTitle} from './color';

const stylesGlobal = StyleSheet.create({
  containerWhite: {
    flex: 1,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorTextTitle,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  between: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  around: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  evenly: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default stylesGlobal;
