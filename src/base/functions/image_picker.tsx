import {launchImageLibrary} from 'react-native-image-picker';

export async function imagePicker() {
  const options: any = {
    mediaType: 'Images',
    allowsEditing: false,
    quality: 0.8,
  };

  const result: any = await launchImageLibrary(options);
  if (result.canceled) return null;

  return result;
}
