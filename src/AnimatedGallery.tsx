import * as React from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { animatedGalleryProps } from "./AnimatedGallery.type";

const { width, height } = Dimensions.get("screen");

export const AnimatedGallery = (props: animatedGalleryProps) => {
  /**
   * Props recived by animated gallery
   */

  const {
    imageUrls,
    spacing,
    thumbBorderWidth,
    thumbBorderColor,
    imageSize,
    renderLoader,
    disablefullScreen,
    backgroundColor,
    onEndReached,
    invertThumbDirection,
    invertGalleryDirection,
  } = props;

  /**
   * Refs for handling the communication between two FlatList
   */

  const topRef = React.useRef();
  const thumbRef = React.useRef();

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
  const thumb_BORDER_WIDTH = thumbBorderWidth ? thumbBorderWidth : 2;
  const thumb_BORDER_COLOR = thumbBorderColor ? thumbBorderColor : "#ffff";
  const BACKGROUND_COLOR = backgroundColor ? backgroundColor : "#0000";

  /**
   * when the compoent mounts the value from the imageUrl props is locally saved to images state
   */

  React.useEffect(() => {
    if (imageUrls.length !== 0) {
      setImgaes(imageUrls);
    }
  }, [imageUrls]);

  /**
    Scroll to active index accepts index of the curent position as argument and onPress of the thumbNail
    parent flatlist item will be pushed to the current screnn by calculating the offset value to which the rendered item need to be moved

  */

  const scrollToActiveIndex = (index: any) => {
    setActiveIndex(index);
    //@ts-ignore
    topRef?.current?.scrollToOffset({
      offset: index * width,
      Animated: true,
    });

    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      //@ts-ignore
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      //@ts-ignore
      thumbRef?.current?.scrollToOffset({
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
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>Loading...</Text>
        </View>
      );
    }
  }

  /**
   * Renders the main component
   */

  return (
    <View style={{ flex: 1, backgroundColor: BACKGROUND_COLOR }}>
      <FlatList
        //@ts-ignore
        ref={topRef}
        data={images}
        keyExtractor={(item: any) => item.id.toString()}
        horizontal
        pagingEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        inverted={invertGalleryDirection}
        onMomentumScrollEnd={(e) => {
          scrollToActiveIndex(
            Math.floor(e.nativeEvent.contentOffset.x / width)
          );
        }}
        renderItem={({ item }: { item: any }) => {
          return (
            <View style={{ width: width, height: height }}>
              <Image
                source={{ uri: item.url }}
                style={
                  disablefullScreen
                    ? {
                        width: width,
                        height: width / 1.3,
                        alignSelf: "center",
                        justifyContent: "center",
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
        //@ts-ignore
        ref={thumbRef}
        keyExtractor={(item: any) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onEndReached={onEndReached}
        inverted={invertThumbDirection}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        style={{ position: "absolute", bottom: IMAGE_SIZE }}
        renderItem={({ item, index }: { item: any; index: any }) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{ uri: item.url }}
                style={[
                  {
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 12,
                    marginRight: SPACING,
                    borderWidth: thumb_BORDER_WIDTH,
                    borderColor:
                      activeIndex === index
                        ? thumb_BORDER_COLOR
                        : "transparent",
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
