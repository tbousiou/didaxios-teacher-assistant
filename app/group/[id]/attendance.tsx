import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function AttendanceScreen() {
  const { id } = useLocalSearchParams();
  
  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-lg font-semibold">Attendance for Group {id}</Text>
      <Text className="text-gray-600 mt-2">Attendance tracking coming soon...</Text>
    </View>
  );
}