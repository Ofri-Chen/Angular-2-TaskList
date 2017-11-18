import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';


@Component({
    selector: 'task-list',
    templateUrl: './task_list.component.html',
    styleUrls: ['task_list.component.css']
})
export class TaskListComponent {
    @Input('tasks') tasks: Task[];
    @Input('checkedTasks') checkedTasks: number[];

    @Output('taskCheckboxChange') _taskCheckboxChange = new EventEmitter<number>();
    @Output('clearCompleted') _clearCompletedEmitter = new EventEmitter();

    _checkboxChange(id: number):void {
        this._taskCheckboxChange.emit(id);
    }

    _clearCompleted(){
        this._clearCompletedEmitter.emit();
    }

    getIsCheckedClass(id: number) {
        return {
            'checked': this.checkedTasks.includes(id)
        };
    }
}