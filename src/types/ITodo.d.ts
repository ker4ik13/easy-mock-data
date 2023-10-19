import { INote } from "./INote";

export interface ITodo extends INote {
    isCompleted: boolean;
}