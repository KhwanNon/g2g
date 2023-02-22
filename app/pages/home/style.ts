import {StyleSheet} from 'react-native';
import {colorTextTitle} from '../../../base/color';

export const styles = StyleSheet.create({
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
    padding: 15,
    backgroundColor: 'white',
  },
  boxItemMenu: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxMenu: {
    width: '100%',
    height: 200,
  },
  textAmount: {
    fontSize: 32,
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
    width: '100%',
    height: 200,
    elevation: 4,
    borderRadius: 15,
    position: 'relative',
  },
});
