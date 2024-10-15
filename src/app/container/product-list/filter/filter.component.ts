import { Component, Input } from '@angular/core';

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
}
