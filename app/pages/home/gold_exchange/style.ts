import {StyleSheet} from 'react-native';
import {colorEgg, colorTextTitle} from '../../../../base/color';

export const styles = StyleSheet.create({
  containerModal: {
    padding: 20,
    width: '90%',
    minHeight: '70%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 17,
    color: colorTextTitle,
  },
  cardBorder: {
    minHeight: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  imageGold: {
    height: 70,
    width: 70,
  },
  btnRedeem: {
    height: 37,
    width: '70%',
    borderRadius: 45,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorEgg,
  },
  boxImageGold: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: colorEgg,
  },
  cardRedeem: {
    width: '44%',
    height: 240,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: '2%',
    marginHorizontal: '3%',
    backgroundColor: 'white',
    borderColor: 'lightgrey',
  },
  textBtn: {fontSize: 17, fontWeight: 'bold', color: 'black'},
  button: {
    width: '100%',
    height: 45,
    elevation: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
});
