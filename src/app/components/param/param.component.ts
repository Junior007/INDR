import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Param } from 'src/app/models/param';


@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
  @Input() param: Param;


  constructor() {

    if (!this.param) {// si no me viene el parámetor de entrada lo inicializo para que no falle la vista
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

  ngOnInit() {



  }

}
