import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ParamComponent } from 'src/app/components/param/param.component';
import { DeleteMessageComponent } from 'src/app/components/deleteMessage/deleteMessage.component';

import { ParamsService } from 'src/app/services/params/params.service';
import { Param } from 'src/app/models/param';


@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  params: Param[];

  bsModalRef: BsModalRef;

  constructor(private paramsService: ParamsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.paramsService.getParams().subscribe(
      data => this.params = data,
    );
  }
  modalForEdit() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ParamComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  modalForDelete() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(DeleteMessageComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

  }



}
