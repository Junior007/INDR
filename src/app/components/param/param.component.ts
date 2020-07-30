import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Param } from 'src/app/models/param';
import { ParamsService } from 'src/app/services/params/params.service';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  @Input() param: Param;
  @Input() edit: boolean;

  @Output() accept: EventEmitter<Param> = new EventEmitter();
  @Output() cancel: EventEmitter<string> = new EventEmitter();


  constructor(private paramsService: ParamsService) {




  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.edit) {// caso de creación
      this.param = {
        descripcion: '',
        aplicacion: '',
        requerido: '',
        env: '',
        value: '',
        nombre: ''
      };
    }
  }

  clickOnAccept() {

    if (this.edit) {
      this.update();
    } else {
      this.create();
    }
  }

  clickOnCancel() {

    this.cancel.emit("");
  }


  create(){
    this.paramsService.createParams(this.param).subscribe(
      data => {
        
        this.param = data;
        this.accept.emit(this.param);
      },error => {
          // do something
          this.accept.emit(this.param);
      }
    )
  }

  update(){
    this.paramsService.updateParams(this.param).subscribe(
      data => {
        
        this.param = data;
        this.cancel.emit('');
      },error => {
          // do something
          this.cancel.emit('');
      }
    )
  }

}

