import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-iconletter',
  standalone: true,
  imports: [],
  templateUrl: './iconletter.component.html',
  styleUrl: './iconletter.component.css'
})
export class IconletterComponent {

  @Input() letter: string | undefined; 
  // @Output() letterClick = new EventEmitter<any>(); // Output property to emit event

//   onClick() {
//     this.letterClick.emit(this.letter); // Emit the event with the letter value
//   }
}
