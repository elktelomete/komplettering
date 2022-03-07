import { Component } from '@angular/core';
import { questions } from '../QueAns';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  questions = questions;

}
