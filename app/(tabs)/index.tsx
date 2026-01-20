import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  // const styles = createStyles(colors);
  const homeStyles = createHomeStyles(colors);

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle Dark mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// const createStyles = (colors: ColorScheme) => {
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       gap: 10,
//       backgroundColor: colors.bg,
//     },
//     content: {
//       fontSize: 20,
//     },
//   });
//   return styles;
// };
