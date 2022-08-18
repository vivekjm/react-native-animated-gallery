# React Native Animated Gallery

## ![npm](https://img.shields.io/npm/l/react-native-animated-gallery?style=for-the-badge) ![npm](https://img.shields.io/npm/v/react-native-animated-gallery?style=for-the-badge) ![](https://img.shields.io/npm/dw/react-native-animated-gallery?style=for-the-badge) ![](https://img.shields.io/npm/types/react-native-animated-gallery?style=for-the-badge)

#

#### 🚀 Tiny and fast animated image gallery with pinch/zoom support for react-native

#

![](https://media.giphy.com/media/geYcjlxk7GroFPeKOq/giphy.gif)            ![](https://media.giphy.com/media/pfd4l4hy9ZQqlKAgXE/giphy.gif)

## Getting started

`npm i @akumzy/react-native-animated-gallery --save`

or

`yarn add @akumzy/react-native-animated-gallery`

#### iOS

No additional step is required.

#### Android

No additional step is required.

## Usage

First of all, import the component.

```javascript
import AnimatedGallery from "@akumzy/react-native-animated-gallery"
```

Then use it like this.

```javascript
import * as React from "react"
import { Text, View } from "react-native"
import AnimatedGallery from "@akumzy/react-native-animated-gallery"

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
  ]

  const Loader = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Custom Loader..</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <AnimatedGallery
        imageUrls={images}
        renderLoader={<Loader />}
        disablefullScreen={false}
        thumbBorderWidth={3}
        thumbBorderColor={"white"}
        spacing={8}
        imageSize={90}
        backgroundColor={"#0000"}
        onEndReached={() => {
          console.log("yay! end reached")
        }}
        invertThumbDirection={false}
        invertGalleryDirection={false}
      />
    </View>
  )
}
```

## Props

- [`imageUrls`](#imageUrls)
- [`renderLoader`](#renderLoader)
- [`imageSize`](#imageSize)
- [`spacing`](#spacing)
- [`thumbBorderWidth`](#thumbBorderWidth)
- [`thumbBorderColor`](#thumbBorderColor)
- [`disablefullScreen`](#disablefullScreen)
- [`backgroundColor`](#backgroundColor)
- [`onEndReached`](#onEndReached)
- [`invertThumbDirection`](#invertThumbDirection)
- [`invertGalleryDirection`](#invertGalleryDirection)

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

Set the size of the thumb nail to square proprtion

| Type      | Required |
| --------- | -------- |
| imageSize | number   |

---

### `spacing`

Set the sapcing between thumb nail.

| Type    | Required |
| ------- | -------- |
| spacing | number   |

---

### `thumbBorderWidth`

Set the border width for thumb nail.

| Type   | Required |
| ------ | -------- |
| number | No       |

---

### `thumbBorderColor`

Set the border color for thumb nail

| Type   | Required |
| ------ | -------- |
| string | No       |

---

### `disablefullScreen`

Disable the fullscreen view of image

| Type    | Required |
| ------- | -------- |
| boolean | No       |

### `backgroundColor`

Set the backgroundColor for gallery when not in fullscreen mode

| Type   | Required |
| ------ | -------- |
| string | No       |

### `onEndReached`

Called when all rows have been rendered and the list has been scrolled to within onEndReachedThreshold of the bottom. The native scroll event is provided.

| Type     | Required |
| -------- | -------- |
| function | No       |

### `invertThumbDirection`

Reverses the direction of scroll. Uses scale transforms of -1.

| Type    | Required |
| ------- | -------- |
| boolean | No       |

### `invertGalleryDirection`

Reverses the direction of scroll of gallery. Uses scale transforms of -1.

| Type    | Required |
| ------- | -------- |
| boolean | No       |

---

## Author

<table>
  <tr>
    <td>
      <img src="https://avatars.githubusercontent.com/u/24496671?v=4" width="100"  style="border-radius:50%">
    </td>
    <td>
      Vivek JM<br />
      <a href="mailto:vivekjm77@gmail.com">vivekjm77@gmail.com</a><br />
    </td>
  </tr>
</table>
