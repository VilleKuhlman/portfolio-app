import {Component, Input} from '@angular/core';
import { Item } from '../item/item.model';

@Component({
    selector: 'cover',
    template: `
        <img class="col-xs-8" src="../assets/images/profile.png" />
        <h3>{{item.name}}</h3>
        <h4>{{item.title}}</h4>
      `,
    styleUrls: ['./cover.component.css']

})

export class CoverComponent {

     @Input() item: Item;

}