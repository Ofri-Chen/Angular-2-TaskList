import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'task-create',
    templateUrl: './task_create.component.html',
    styleUrls: ['task_create.component.css'],
})
export class TaskCreateComponent {
    _descriptionValue: string = "";
    @Output('addTask') _addTask = new EventEmitter<Task>();

    _form = new FormGroup({
        description: new FormControl()
     });
     
    _emitAddTask() {
        this._addTask.emit({
            id: 0,
            description: this._descriptionValue,
            dueDate: new Date()
        })
        this._form.reset();
    }
}