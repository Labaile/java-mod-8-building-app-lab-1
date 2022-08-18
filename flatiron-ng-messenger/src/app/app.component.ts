import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flatiron-ng-messenger';
  
  messages = [
    {
      sender: "Ludovic",
      message: "Latest message from Ludovic"
    },
    {
      sender: "Jessica",
      message: "Latest message from Jessica"
    }
  ];
}
