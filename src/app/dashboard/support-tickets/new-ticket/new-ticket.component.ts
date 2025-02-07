import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<HTMLFormElement>('form');
  // @Output() add = new EventEmitter<{title: string; text: string}>();
  add = output<{ title: string; text: string }>();

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });
    this.form?.nativeElement.reset();
  }
}
