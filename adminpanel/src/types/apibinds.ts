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
export interface Tag {
  ID: number;
  name: string;
}