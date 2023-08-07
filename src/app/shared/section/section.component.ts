import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() buttonText!: string;
  @Input() backgroundurl!: string;
  // @Input('class-material-icon') classMaterialIcon: string;
  // @Input('class-custom') classCustom: string;
  // @Input() disabled: boolean;

  @Output('btn-click') btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
