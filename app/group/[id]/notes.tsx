import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotesScreen() {
  const { id } = useLocalSearchParams();
  
  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-lg font-semibold">Class Notes for Group {id}</Text>
      <Text className="text-gray-600 mt-2">Note taking coming soon...</Text>
    </View>
  );
}