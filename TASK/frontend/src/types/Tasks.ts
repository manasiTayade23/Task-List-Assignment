// src/types.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  status: string; // or use an enum for status
}