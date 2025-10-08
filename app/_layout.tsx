import { Stack } from "expo-router";
import { SQLiteProvider } from 'expo-sqlite';
import "../global.css";
import { migrateDbIfNeeded } from '../lib/database';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="teacher_assistant.db" onInit={migrateDbIfNeeded}>
      <Stack>
        <Stack.Screen name="(maintabs)" options={{ headerShown: false }} />
        <Stack.Screen name="group/[id]" options={{ headerShown: false }} />
      </Stack>
    </SQLiteProvider>
  );
}