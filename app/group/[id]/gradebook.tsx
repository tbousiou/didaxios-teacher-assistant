import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function GradebookScreen() {
  const { id } = useLocalSearchParams();
  
  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-lg font-semibold">Gradebook for Group {id}</Text>
      <Text className="text-gray-600 mt-2">Grade management coming soon...</Text>
    </View>
  );
}