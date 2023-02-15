import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  isLoading = false;
  taxPro:any;
errObj:boolean=false
id:any;
  constructor(private _viewService:ViewService ,private _route:ActivatedRoute) { }

  ngOnInit(): void {

    //get id from route
    this._route.paramMap.subscribe(params => {
      console.log(params.get('username'));
      this.id = params.get('id');
      console.log(params.get('id'))
    });
    this.viewDetail(this.id);
    
  }
  viewDetail(id:any){

    this.isLoading = true;
    this._viewService.viewTaxPro(id).subscribe(
      (response) => {
      
        this.isLoading = false;

        this.taxPro=response.data.resultObj;
        console.log('res')
        console.log('response', response);
        console.log('res')
      },
      (error) => {
        this.isLoading = false;
        this.errObj = true
        console.log('response', error);
      }
    );


}
}
