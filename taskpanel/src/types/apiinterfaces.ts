export interface Tag {
  ID: number;
  name: string;
}
export interface Task {
  ID: number;
  name: string;
  description: string;
  type: string;
  barcode: string;
  area_id: number;
  tags: Tag[];
  working: number;
  selected: boolean;
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
export interface Area {
  ID: number;
  name: string;
  description?: string;
  working: number;
  selected: boolean;
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
}

