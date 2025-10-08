import { Ionicons } from '@expo/vector-icons';
import { router, Tabs, useLocalSearchParams } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function GroupTabLayout() {
  const { id } = useLocalSearchParams();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity 
            onPress={() => router.back()}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="arrow-back" size={24} color="#007AFF" />
          </TouchableOpacity>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Students',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'people' : 'people-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: 'Attendance',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="gradebook"
        options={{
          title: 'Gradebook',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'document-text' : 'document-text-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notes',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'library' : 'library-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}