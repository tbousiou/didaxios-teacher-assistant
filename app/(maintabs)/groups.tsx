import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Group {
  id: string;
  name: string;
  room: string;
  studentCount: number;
}

const mockGroups: Group[] = [
  {
    id: "1",
    name: "Mathematics 10A",
    room: "Room 201",
    studentCount: 28,
  },
  {
    id: "2",
    name: "Physics 11B",
    room: "Lab 105",
    studentCount: 24,
  },
  {
    id: "3",
    name: "Chemistry 12C",
    room: "Lab 302",
    studentCount: 22,
  },
];

export default function GroupsScreen() {
  const router = useRouter();
  const [groups, setGroups] = useState(mockGroups);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    room: "",
  });

  const handleSave = () => {
    if (formData.name.trim() && formData.room.trim()) {
      const newGroup: Group = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        room: formData.room.trim(),
        studentCount: 0,
      };
      setGroups([...groups, newGroup]);
      setFormData({ name: "", room: "" });
      setModalVisible(false);
    }
  };

  const handleCancel = () => {
    setFormData({ name: "", room: "" });
    setModalVisible(false);
  };

const renderGroupItem = ({ item }: { item: Group }) => (
  <TouchableOpacity 
    className="bg-white rounded-xl border border-gray-200 mb-3 p-4"
    onPress={() => router.push({ pathname: '/group/[id]', params: { id: item.id } })}
  >
    <View className="flex-row justify-between items-start">
      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-800 mb-1">{item.name}</Text>
        <Text className="text-sm text-gray-500">{item.room}</Text>
      </View>
      <View className="items-end">
        <View className="flex-row items-center gap-1">
          <Ionicons name="people" size={16} color="#666" />
          <Text className="text-sm text-gray-500 font-medium">{item.studentCount}</Text>
        </View>
        <Ionicons name="chevron-forward" size={16} color="#666" className="mt-1" />
      </View>
    </View>
  </TouchableOpacity>
);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <FlatList
        data={groups}
        renderItem={renderGroupItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      
      <TouchableOpacity 
        className="flex-row items-center justify-center bg-white rounded-xl border border-blue-500 p-4 gap-2"
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={24} color="#007AFF" />
        <Text className="text-base text-blue-500 font-semibold">Add new group</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="bg-white rounded-xl p-6 w-80 mx-4">
            <Text className="text-lg font-semibold text-gray-800 mb-6 text-center">
              Add New Group
            </Text>
            
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-2">Group Name</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 text-base"
                placeholder="Enter group name"
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
              />
            </View>

            <View className="mb-6">
              <Text className="text-sm font-medium text-gray-700 mb-2">Room</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-3 text-base"
                placeholder="Enter room"
                value={formData.room}
                onChangeText={(text) => setFormData({ ...formData, room: text })}
              />
            </View>

            <TouchableOpacity
              className="bg-blue-500 rounded-lg p-3 mb-3"
              onPress={handleSave}
            >
              <Text className="text-white text-center font-semibold text-base">Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="border border-gray-300 rounded-lg p-3"
              onPress={handleCancel}
            >
              <Text className="text-gray-700 text-center font-semibold text-base">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}