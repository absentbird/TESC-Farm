export interface Tag {
  ID: number;
  name: string;
}
export interface Item {
  ID: number;
  name: string;
  description: string;
  working: number;
  selected: boolean;
  tags: Tag[];
}
export interface Task extends Item {
  type: string;
  barcode: string;
  area_id: number;
}
export interface Worker {
  ID: number;
  barcode: string;
}
export interface Punch {
  ID: number;
  start: number;
  duration: number;
  task: Task;
  task_id: number;
  worker: Worker;
  worker_id: number;
  notes: string;
}
export interface Area extends Item {
  description?: string;
}
export interface Bed {
  ID: number;
  name: string;
  area: Area;
  area_id: number;
  notes: string;
}
export interface Crop {
  ID: number;
  name: string;
  variety: string;
  tags: Tag[];
  crop_id: number;
  bed_id: number;
  notes: string;
  selected: boolean;
}
export interface TaskType {
  ID: number;
  name: string;
  selected: boolean;
}
