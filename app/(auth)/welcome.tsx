import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <Text className="text-blue-500">Onboarding</Text>
    </SafeAreaView>
  );
};

export default Onboarding;
