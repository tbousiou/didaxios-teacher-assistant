import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccountScreen() {
  const handleSettingsPress = () => {
    // Navigate to Settings screen
    console.log("Navigate to Settings");
  };

  const handleFAQPress = () => {
    // Navigate to FAQ screen
    console.log("Navigate to FAQ");
  };

  const handleInfoPress = () => {
    // Navigate to Info and contact screen
    console.log("Navigate to Info and contact");
  };

  const handleBackupPress = () => {
    // Navigate to Create backup screen
    console.log("Navigate to Create backup");
  };

  const MenuItem = ({ icon, title, onPress }: { icon: string, title: string, onPress: () => void }) => (
    <TouchableOpacity className="flex-row items-center justify-between px-5 py-4" onPress={onPress}>
      <View className="flex-row items-center flex-1">
        <Ionicons name={icon as any} size={24} color="#3b82f6" />
        <Text className="text-base ml-3 text-gray-800">{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#6b7280" />
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white pt-5">
      <MenuItem icon="settings-outline" title="Settings" onPress={handleSettingsPress} />
      <MenuItem icon="help-circle-outline" title="FAQ" onPress={handleFAQPress} />
      <MenuItem icon="information-circle-outline" title="Info and contact" onPress={handleInfoPress} />
      <MenuItem icon="copy-outline" title="Create backup" onPress={handleBackupPress} />
    </View>
  );
}