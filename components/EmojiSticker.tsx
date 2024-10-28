import { type ImageSource } from "expo-image";
import { Image, View } from "react-native";

type EmojiStickerProps = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({
  imageSize,
  stickerSource,
}: EmojiStickerProps) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
