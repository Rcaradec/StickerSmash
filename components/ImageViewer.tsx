import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type ImageProps = {
  imgSource: string;
};

export default function ImageViewer({ imgSource }: ImageProps) {
  return (
    <>
      <Image source={imgSource} style={styles.image} />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
