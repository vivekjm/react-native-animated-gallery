import * as React from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {animatedGalleryProps} from './AnimatedGallery.type';

const {width, height} = Dimensions.get('screen');

export const AnimatedGallery = (props: animatedGalleryProps) => {
  /**
   * Props recived by animated gallery
   */

  const {
    imageUrls,
    spacing,
    thumpBorderWidth,
    thumpBorderColor,
    imageSize,
    renderLoader,
    disablefullScreen,
  } = props;

  /**
   * Refs for handling the communication between two FlatList
   */

  const topRef = React.useRef();
  const thumpRef = React.useRef();

  /**
   * Local state to keep the images array recevied as props
   */

  const [images, setImgaes] = React.useState<any>(null);

  /**
   * active index Keeps track of the selected index or active index
   */

  const [activeIndex, setActiveIndex] = React.useState(0);

  /**
   * If props are present then value from the props are applied else default value
   */

  const IMAGE_SIZE = imageSize ? imageSize : 80;
  const SPACING = spacing ? spacing : 10;
  const THUMP_BORDER_WIDTH = thumpBorderWidth ? thumpBorderWidth : 2;
  const THUMP_BORDER_COLOR = thumpBorderColor ? thumpBorderColor : '#ffff';

  /**
   * when the compoent mounts the value from the imageUrl props is locally saved to images state
   */

  React.useEffect(() => {
    if (imageUrls.length !== 0) {
      setImgaes(imageUrls);
    }
  }, [imageUrls]);

  /**
    Scroll to active index accepts index of the curent position as argument and onPress of the thumpNail
    parent flatlist item will be pushed to the current screnn by calculating the offset value to which the rendered item need to be moved

  */

  const scrollToActiveIndex = (index: any) => {
    setActiveIndex(index);

    topRef?.current?.scrollToOffset({
      offset: index * width,
      Animated: true,
    });

    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumpRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumpRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  /**
   * Renders the custom loader if present
   */

  if (!images) {
    if (renderLoader) {
      return renderLoader;
    } else {
      return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Loading...</Text>
        </View>
      );
    }
  }

  /**
   * Renders the main component
   */

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => {
          scrollToActiveIndex(
            Math.floor(e.nativeEvent.contentOffset.x / width),
          );
        }}
        renderItem={({item}) => {
          return (
            <View style={{width: width, height: height}}>
              <Image
                source={{uri: item.url}}
                style={
                  disablefullScreen
                    ? {
                        width: width,
                        height: width / 1.3,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        top: width / 1.5,
                      }
                    : [StyleSheet.absoluteFillObject]
                }
              />
            </View>
          );
        }}
      />

      <FlatList
        data={images}
        ref={thumpRef}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        style={{position: 'absolute', bottom: IMAGE_SIZE}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{uri: item.url}}
                style={[
                  {
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 12,
                    marginRight: SPACING,
                    borderWidth: THUMP_BORDER_WIDTH,
                    borderColor:
                      activeIndex === index
                        ? THUMP_BORDER_COLOR
                        : 'transparent',
                  },
                ]}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
