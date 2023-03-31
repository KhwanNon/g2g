import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, ActivityIndicator, Text} from 'react-native';

type Props = {
  color?: string;
};

const Loading = ({color}: Props) => {
  const navigation: any = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#00000060',
      },
    });

    return () =>
      navigation.setOptions({
        headerStyle: {
          backgroundColor: color ?? 'white',
        },
      });
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000060',
      }}>
      <View>
        <ActivityIndicator size={40} color={'white'} />
        <Text style={{color: 'white'}}>Loading...</Text>
      </View>
    </View>
  );
};

export default Loading;
