import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alurapic';

  photos = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sultan_the_Barbary_Lion.jpg',
      description: 'Lion'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sultan_the_Barbary_Lion.jpg',
      description: 'Lion'
    }
  ];
}
