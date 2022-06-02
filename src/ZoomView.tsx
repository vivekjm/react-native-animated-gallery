import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view"
import { createRef } from "react"
import { Image } from "react-native"

type Props = {
  imageUrl: string
  imageWidth: number
  onZoom: (zoom: number) => void
}
export default function ZoomView(props: Props) {
  const { imageUrl, imageWidth } = props
  const zoomableViewRef = createRef<ReactNativeZoomableView>()
  return (
    <ReactNativeZoomableView
      maxZoom={5}
      minZoom={1}
      zoomStep={0.5}
      initialZoom={1}
      bindToBorders={true}
      ref={zoomableViewRef}
      onTransform={(ev) => {
        props.onZoom(ev.zoomLevel)
      }}
      onZoomEnd={(_, _a, event) => {
        if (event.zoomLevel < 1.2) {
          zoomableViewRef.current?.zoomTo(1)
          props.onZoom(1)
        }
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: imageWidth,
          height: imageWidth / 1.3,
        }}
      />
    </ReactNativeZoomableView>
  )
}
