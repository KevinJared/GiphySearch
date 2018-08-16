import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giphy';
  performSearch(searhTerm: HTMLInputElement): void {
    console.log('user entered: ${searchTerm.value}');
}
}
