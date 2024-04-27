import { View, Text } from "react-native";
import Record from "../components/RecordVoice";
import colors from "../themes/colors";

export default function VoiceScreen() {
  return (
    <View style={{backgroundColor: colors.background, marginTop: 25, height:"100%", display:"flex", alignItems: "center", justifyContent: "center"}}>
      <Record />
      <Text>test</Text>
    </View>
  );
}
