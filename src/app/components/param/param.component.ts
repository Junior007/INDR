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
  

  constructor(private paramsService: ParamsService) {

    if (!this.param) {// si no me viene el parámetro de entrada lo inicializo para que no falle la vista
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

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}

