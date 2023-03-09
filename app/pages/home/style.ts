import {StyleSheet} from 'react-native';
import {colorDarkGold2, colorGold, colorTextTitle} from '../../../base/color';

export const styles = StyleSheet.create({
  buttonBuySell: {
    width: '40%',
    height: 45,
    elevation: 3,
    borderRadius: 5
  },
  btnDowload: {
    bottom: 10,
    right: 10,
    paddingTop: 1,
    paddingLeft: 3,
    paddingRight: 2,
    borderRadius: 20,
    paddingBottom: 3,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF50',
  },
  textWhite: {
    color: 'white',
    fontSize: 16,
  },
  textEGold: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colorDarkGold2,
  },
  textBold: {
    fontSize: 13,
    color: colorTextTitle,
    fontWeight: 'bold',
  },
  textTitleCard: {
    fontSize: 21,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: colorDarkGold2,
  },
  gold: {
    height: 20,
    width: 60,
    resizeMode: 'stretch',
  },
  icon: {
    resizeMode: 'stretch',
  },
  textTitle: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 'bold',
    color: colorTextTitle,
  },
  boxCradNoti: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: '#D9D9D9',
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxItemMenu: {
    height: 100,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  boxMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: 220,
  },
  textAmount: {
    fontSize: 32,
    marginLeft: 15,
    fontWeight: 'bold',
    color: colorTextTitle,
  },
  logo: {
    height: 110,
    width: 130,
    top: 45,
    opacity: 0.6,
    alignSelf: 'center',
    position: 'absolute',
    resizeMode: 'stretch',
  },
  myCard: {
    flex: 1,
    width: '100%',
    height: 200,
    elevation: 4,
    borderRadius: 15,
    position: 'relative',
  },
});
