import {StyleSheet} from 'react-native';
import {colorDarkGold2, colorTextTitle} from '../../../../base/color';

export const styles = StyleSheet.create({
  cardRepurchase: {
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 7,
    padding: 10,
    minHeight: 90,
    width: '100%',
    elevation: 4,
    backgroundColor: 'white'
  },
  textLabel: {
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
