# React Native Animated Gallery

## ![npm](https://img.shields.io/npm/l/react-native-animated-gallery) ![npm](https://img.shields.io/npm/v/react-native-animated-gallery) ![npm](https://img.shields.io/david/DIGIEGGS/rn-country-code-picker)

#

#### 🚀 Tiny and fast animated image gallery for react-native

#

![](https://media.giphy.com/media/geYcjlxk7GroFPeKOq/giphy.gif)            ![](https://media.giphy.com/media/pfd4l4hy9ZQqlKAgXE/giphy.gif)

## Getting started

`npm i react-native-animated-gallery --save`

or

`yarn add react-native-animated-gallery`

#### iOS

No additional step is required.

#### Android

No additional step is required.

## Usage

First of all, import the component.

```javascript
import AnimatedGallery from "react-native-animated-gallery";
```

Then use it like this.

```javascript
import * as React from "react";
import { Text, View } from "react-native";
import AnimatedGallery from "react-native-animated-gallery";

export default () => {
  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/2347011/pexels-photo-2347011.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/1624360/pexels-photo-1624360.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/1019335/nature-stars-milky-way-galaxy-1019335.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/623218/pexels-photo-623218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/5939672/pexels-photo-5939672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    },
  ];

  const Loader = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Custom Loader..</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <AnimatedGallery
        imageUrls={images}
        renderLoader={<Loader />}
        disablefullScreen={false}
      />
    </View>
  );
};
```

## Props

- [`imageUrls`](#imageUrls)
- [`renderLoader`](#renderLoader)
- [`imageSize`](#imageSize)
- [`spacing`](#spacing)
- [`thumpBorderWidth`](#thumpBorderWidth)
- [`thumpBorderColor`](#thumpBorderColor)
- [`disablefullScreen`](#disablefullScreen)

---

# Reference

## Props

### `imageUrls`

Provides Data to the component

| Type  | Required |
| ----- | -------- |
| Array | yes      |

---

### `renderLoader`

Custom loader for component

| Type         | Required |
| ------------ | -------- |
| ReactElement | no       |

---

### `imageSize`

Set the size of the thump nail to square proprtion

| Type      | Required |
| --------- | -------- |
| imageSize | number   |

---

### `spacing`

Set the sapcing between thump nail.

| Type    | Required |
| ------- | -------- |
| spacing | number   |

---

### `thumpBorderWidth`

Set the border width for thump nail.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `thumpBorderColor`

Set the border color for thump nail

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### `disablefullScreen`

Disable the fullscreen view of image

| Type    | Required |
| ------- | -------- |
| boolean | No       |

---
