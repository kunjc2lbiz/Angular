import { Component, EventEmitter, Output } from '@angular/core';

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

  onSearchText(inputElement: HTMLInputElement){
    // console.log(inputElement.value);
    this.searchText = inputElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
