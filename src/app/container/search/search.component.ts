import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  // 1. Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.searchText);
  // }

  updateSearchText(event: any){
    this.searchText = event.target.value;
  }

  // storing reference of input element in this variable
  // 1. read - use it to read the different token from queried elements
  // 2. static - Determine whether query is resolved
  //             true - When the view is initialized (before the first change detection) for the first time.
  //             By default False  - if you want it to be resolved after every change detection
  @ViewChild('searchInput', {static: true}) searchInputElement : ElementRef; 
  

  onSearchText(){
    // console.log(inputElement.value);
    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
