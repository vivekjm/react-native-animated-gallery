import * as React from 'react';
import {Text, View} from 'react-native';
import AnimatedGallery from 'react-native-animated-gallery';

export default () => {
  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/2347011/pexels-photo-2347011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1624360/pexels-photo-1624360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1019335/nature-stars-milky-way-galaxy-1019335.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/623218/pexels-photo-623218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/5939672/pexels-photo-5939672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
    },
  ];

  const Laoder = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Custom Loader..</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <AnimatedGallery
        imageUrls={images}
        renderLoader={<Laoder />}
        disablefullScreen={false}
      />
    </View>
  );
};
