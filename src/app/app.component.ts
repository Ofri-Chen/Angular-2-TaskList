import { Component } from '@angular/core';
import { TaskService } from './task/task.service';
import { Task } from './task/task.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TaskService]
})
export class AppComponent {
	constructor(private _taskService: TaskService) { }

	private _tasks = this._taskService._tasks;
	private _checkedTasks = this._taskService._checkedTasks;

	private _createTask(task: Task) {
		console.log('creating task: ' + task.description)
		this._taskService.createTask(task)
			.then(resTask => console.log(`created: ${resTask.id}`));
	}

	private _taskCheckboxChange(id: number) {
		this._taskService.taskCheckboxChange(id);
	}

	private _clearCompletedTasks() {
		this._taskService.clearCompletedTasks();
	}
}
