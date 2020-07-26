import { Component, OnInit } from '@angular/core';
import { ParamsService } from 'src/app/services/params/params.service';
import { Param } from 'src/app/models/param';


@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  params: Param[];

  constructor(private paramsService: ParamsService) { }

  ngOnInit() {
    this.paramsService.getParams().subscribe(
      data => this.params = data,
    );
  }

}
