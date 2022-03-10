import { Component} from '@angular/core';
import { questions } from '../QueAns';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  
})
export class InfoComponent {
  questions1 = questions;
  
}
