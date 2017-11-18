import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable()
export class TaskService {
    private _currId: number = 0;
    _checkedTasks: number[] = [];

    public _tasks: Task[] = [
        {id: this._currId++, description: "bla bla", dueDate: new Date()},
        {id: this._currId++, description: "another description", dueDate: new Date()}
    ];

    public createTask(task: Task): Promise<Task> {
        task.id = this._currId++;
        this._tasks.push(task);
        return new Promise((resolve, reject) => {
            resolve(task);
        });
    }

    public removeTask(index: number): Promise<Task> {
        return new Promise((resolve, reject) => {
            if (index > this._tasks.length - 1 || index < 0) {
                reject("position out of range")
            }
            else{
                resolve(this._tasks.slice(index, 1)[0]);
            }
        });
    }

    public taskCheckboxChange(id: number){
        let indexInCheckedTasks = this._checkedTasks.indexOf(id);
        if(indexInCheckedTasks != -1){
            this._checkedTasks.splice(indexInCheckedTasks, 1);
        }
        else{
            this._checkedTasks.push(id);
        }
    }

    public clearCompletedTasks() {
        this._checkedTasks.forEach(
            taskId => this._tasks.splice(
                this._tasks.findIndex(task => task.id == taskId), 1));
        this._checkedTasks.splice(0, this._checkedTasks.length);
    }
}