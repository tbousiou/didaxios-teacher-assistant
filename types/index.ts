export interface Group {
  id: string;
  name: string;
  room: string;
  created_at?: string;
  updated_at?: string;
}

// Extended interface for UI display
export interface GroupWithStudentCount extends Group {
  studentCount: number;
}