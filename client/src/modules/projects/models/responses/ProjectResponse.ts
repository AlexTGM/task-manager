import { TaskResponse } from './TaskResponse';

export interface ProjectResponse {
  id: string;
  title: string;
  description: string;
  tasks: TaskResponse[];
}
