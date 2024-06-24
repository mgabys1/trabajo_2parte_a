import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.page.html',
  styleUrls: ['./create-edit-task.page.scss'],
})
export class CreateEditTaskPage {
  taskName: string = '';

  constructor(private router: Router) { }

  saveTask() {
    try {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push({ task_name: this.taskName });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error saving task to localStorage:', error);
    }
  }
}

