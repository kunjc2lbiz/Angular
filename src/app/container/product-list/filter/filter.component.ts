import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  // since we want the count from parent component, we use @Input()
  @Input()
  all: number = 0;
  
  @Input()
  inStock: number = 0;
  
  @Input()
  outOfStock: number = 0;

  selectedRadioButton: string = 'All' // To select deafult radio button using 2 way data binding
  // this variable will keep track selected radio button in child(filter) component

  @Output()
  selectedRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  // To get data from child we use @Output()

  onSelectedRadioButtonChanged(){
    this.selectedRadioButtonChanged.emit(this.selectedRadioButton);
  }
}
