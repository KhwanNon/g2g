import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');

export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;
export const IS_IOS = Platform.OS === 'ios';