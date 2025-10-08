import { type SQLiteDatabase } from 'expo-sqlite';
import { Group, GroupWithStudentCount } from '../../types';

const generateId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9);
const getCurrentTimestamp = () => new Date().toISOString();

export const GroupService = {
  getAllWithStudentCount: async (db: SQLiteDatabase): Promise<GroupWithStudentCount[]> => {
    const result = await db.getAllAsync(`
      SELECT g.*, COUNT(s.id) as studentCount 
      FROM groups g 
      LEFT JOIN students s ON g.id = s.group_id 
      GROUP BY g.id
      ORDER BY g.created_at DESC
    `);
    return result as GroupWithStudentCount[];
  },

  create: async (db: SQLiteDatabase, groupData: { name: string; room: string }): Promise<Group> => {
    const newGroup: Group = {
      id: generateId(),
      name: groupData.name,
      room: groupData.room,
      created_at: getCurrentTimestamp(),
      updated_at: getCurrentTimestamp(),
    };

    await db.runAsync(
      'INSERT INTO groups (id, name, room, created_at, updated_at) VALUES (?, ?, ?, ?, ?)',
      [newGroup.id, newGroup.name, newGroup.room, newGroup.created_at!, newGroup.updated_at!]
    );

    return newGroup;
  },

  delete: async (db: SQLiteDatabase, id: string): Promise<void> => {
    await db.runAsync('DELETE FROM groups WHERE id = ?', [id]);
  },
};