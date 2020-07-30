import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() message: string;
  @Output() accept: EventEmitter<string> = new EventEmitter();
  @Output() cancel: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickOnAccept(): void{
    debugger;
    this.accept.emit('');
  }

  clickOnCancel(): void{
    this.cancel.emit('');
  }

}
