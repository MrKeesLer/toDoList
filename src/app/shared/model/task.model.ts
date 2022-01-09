export interface Task {

    id?: string;
    title: string;
    desc: string;
    status: TaskStatus;
    authorId: string;

}

export enum TaskStatus {TODO,DOING,DONE}