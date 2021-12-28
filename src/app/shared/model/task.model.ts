export class Task {

    public title: string;
    public desc: string;
    public status: TaskStatus;

    constructor(t: string, d: string, s: TaskStatus){
        this.title = t;
        this.desc = d;
        this.status = s;
    }
}

export enum TaskStatus {TODO,DOING,DONE}