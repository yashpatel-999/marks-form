import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'marks-form';
  name: string = '';
  subject: string = '';
  test1: number = 0;
  test2: number = 0;
  submitted: boolean = false;

  submit() {
    this.submitted = true;
    console.log(`Name: ${this.name}, Subject: ${this.subject}, Score: ${this.test1 + this.test2}`);
  }
}
