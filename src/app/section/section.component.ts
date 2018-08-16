import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  performSearch(searchTerm: HTMLInputElement): void {
    console.log(`User entered: ${searchTerm.value}`);
  }
  constructor() {}

  ngOnInit() {}
}
