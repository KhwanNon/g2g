import {StyleSheet} from 'react-native';
import {
  colorDarkGold2,
  colorGrey,
  colorRed2,
  colorTextTitle,
} from '../../../../base/color';
import {DEVICE_HEIGHT} from '../../../../base/constant';

export const styles = StyleSheet.create({
  containerRepurchase: {
    padding: 15,
    backgroundColor: colorGrey,
    minHeight: DEVICE_HEIGHT * 0.8,
  },
  cardWarning: {
    borderWidth: 1,
    borderColor: colorRed2,
    padding: 3,
  },
  listTileRepurchase: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  textHeader: {
    fontSize: 34,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardRepurchase: {
    marginTop: 20,
    borderRadius: 7,
    padding: 10,
    minHeight: 100,
    width: '100%',
    elevation: 4,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  textLabel14: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colorTextTitle,
  },
  textLabel16: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorTextTitle,
  },
  cardBorderSummary: {
    backgroundColor: 'white',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    minHeight: 300,
    borderColor: 'lightgrey',
    paddingVertical: 10,
  },
  cardBorder: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderColor: colorDarkGold2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});
