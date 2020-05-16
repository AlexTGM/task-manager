import Task from './Task';

export default interface Project {
  id: string;
  title: string;
  description: string;

  tasks: Task[];
}
