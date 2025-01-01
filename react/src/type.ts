export interface ITodo {
  id: number;
  title: string;
  status: EStatus;
}

export enum EStatus {
  "COMPLETED" = "completed",
  "OPEN" = "open",
}
