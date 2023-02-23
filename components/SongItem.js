import { StyleSheet, Text, View, Image } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";

const SongItem = ({
  index,
  image,
  songTitle,
  artist,
  songAlbum,
  songDuration,
}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.index}>{index}</Text>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.song}>
        <Text numberOfLines={1} style={styles.songTitle}>
          {songTitle}
        </Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>

      <Text numberOfLines={1} style={styles.songAlbum}>
        {songAlbum}
      </Text>
      <Text style={styles.duration}>
        {millisToMinutesAndSeconds(songDuration)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginVertical: 8,
    width: "100%",
  },
  index: { width: "10%", color: "white" },
  image: {
    width: "20%",
    height: 80,
    margin: 5,
    resizeMode: "contain",
  },
  songTitle: { color: "white" },
  artist: { color: "white" },
  song: {
    width: "35%",
    padding: 5,
  },
  songAlbum: { width: "25%", color: "white", padding: 5 },
  duration: { width: "10%", color: "white" },
});

export default SongItem;
