import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
// import { ParamComponent } from 'src/app/components/param/param.component';
// import { DeleteMessageComponent } from 'src/app/components/deleteMessage/deleteMessage.component';

import { ParamsService } from 'src/app/services/params/params.service';
import { Param } from 'src/app/models/param';


@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {


  paramsPage: Param[];
  itemsPerPage: number = 10; //items por página
  maxSize: number = 10; //numero de botones de página visibles

  params: Param[];
  selectedParam: Param;

  bsModalRef: BsModalRef;

  constructor(private paramsService: ParamsService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.paramsService.getParams().subscribe(
      data => {
        this.params = data;
        this.setPage(1);
      }

    );
  }
  modalForNew(template: TemplateRef<any>): void {

    // this.selectedParam 

    this.bsModalRef = this.modalService.show(template);
  }
  modalForEdit(paramForEdit: Param, template: TemplateRef<any>): void {

    this.selectedParam = paramForEdit;

    this.bsModalRef = this.modalService.show(template);
  }

  modalForDelete(paramForDelete: Param, template: TemplateRef<any>): void {

    this.selectedParam = paramForDelete;

    this.bsModalRef = this.modalService.show(template);

  }

  pageChanged(event: PageChangedEvent): void {
    this.setPage(event.page);
  }

  setPage(page: number): void {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = page * this.itemsPerPage;
    this.paramsPage = this.params.slice(startItem, endItem);

  }
}
