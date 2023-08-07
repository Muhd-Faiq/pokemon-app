import { Component, ViewEncapsulation, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

import { CardAction } from "@progress/kendo-angular-layout";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() buttonText!: string;
  @Input() imageUrl!: string;

  @Output('btn-click') btnClick = new EventEmitter();

  

  constructor(public action: CardAction){}
  public cardActions: Array<CardAction> = [
    {
      text: this.buttonText,
      primary: true,
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['buttonText'] && changes['buttonText'].currentValue) {
      this.cardActions = [
        {
          text: this.buttonText,
          // primary: true,
        },
      ];
    }
  }

  public onActionClick(action: CardAction): void {
    this.btnClick.emit();
  }

}
