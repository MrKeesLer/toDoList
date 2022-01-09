import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task, TaskStatus } from 'src/app/shared/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public readonly COLLECTION_NAME: string = 'task';
  constructor(private firestore: AngularFirestore) { }


  public createTask(taskData: Task): Promise<void>{
    delete taskData.id;
    return this.firestore
          .collection(this.COLLECTION_NAME)
          .add(taskData)
          .then();
  }

  public getTask(): Observable<Task[]> {
    return this.firestore.collection<Task>(this.COLLECTION_NAME).snapshotChanges().pipe(
      map(snapshots => {
        return snapshots.map(snapshot => {
          return {id: snapshot.payload.doc.id, ...snapshot.payload.doc.data()};
        })
      })
    );
  }

  public getTaskByAuthorId(authorId: string): Observable<Task[]> {
    return this.firestore.collection<Task>(this.COLLECTION_NAME, task => task.where('authorId','==',authorId)).snapshotChanges().pipe(
      map(snapshots => {
        return snapshots.map(snapshot => {
          return {id: snapshot.payload.doc.id, ...snapshot.payload.doc.data()};
        })
      })
    );
  }

  public getTaskByStatus(authorId: string,taskStatus: TaskStatus): Observable<Task[]> {
    return this.firestore.collection<Task>(this.COLLECTION_NAME, task => task.where('authorId','==',authorId)
                                                                             .where('status','==',taskStatus))
    .snapshotChanges().pipe(
      map(snapshots => {
        return snapshots.map(snapshot => {
          return {id: snapshot.payload.doc.id, ...snapshot.payload.doc.data()};
        })
      })
    );
  }

  public updateTask(task: Partial<Task>): Promise<void> {
    return this.firestore.collection(this.COLLECTION_NAME).doc(task.id).update(task);
  }

  public deleteTask(task: Task): Promise<void> {
    return this.firestore.collection(this.COLLECTION_NAME).doc(task.id).delete();
  }
}
