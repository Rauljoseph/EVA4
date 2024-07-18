import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iconletter',
  standalone: true,
  imports: [],
  templateUrl: './iconletter.component.html',
  styleUrl: './iconletter.component.css'
})
export class IconletterComponent {

  @Input() letter: string | undefined

}
