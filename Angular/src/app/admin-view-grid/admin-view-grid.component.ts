import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-enterprise';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { Router } from '@angular/router';
import { AdminViewService } from './admin-view-grid.service';
const log = new Logger('AdminView');
@Component({
  selector: 'app-admin-view-grid',
  templateUrl: './admin-view-grid.component.html',
  styleUrls: ['./admin-view-grid.component.scss']
})


export class AdminViewGridComponent implements OnInit {



  
//  public columnDefs: ColDef[] = [
//   { field: 'make'},
//   { field: 'model'},
//   { field: 'price' }
// ];





errorObj!: boolean | false;
tasklists: any;
isLoading: boolean = false;
id: any
public rowData:any;
// Data that gets displayed in the grid
public rowData$!: Observable<any[]>;


// For accessing the Grid's API
@ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor(private _adminViewtService: AdminViewService, private _router: Router) { 

    this.getlist();
  }

  ngOnInit(): void {
  }




// Example load data from sever
onGridReady(params: GridReadyEvent) {
  // this.rowData$ = this._tasklistService.getTasklist();
}

// Example of consuming Grid Event
onCellClicked( e: CellClickedEvent): void {
  console.log('cellClicked', e);
}

// Example using Grid's API
clearSelection(): void {
  this.agGrid.api.deselectAll();
}


// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
};
 // Each Column Definition results in one Column.
columnDefs= [
  { headerName: 'Id', field: 'taxProId' },
  { headerName: 'Name', field: 'taxProName', filter: true, floatingFilter: true },
  { headerName: 'ConsultentType', field: 'consultentType',filter: true, floatingFilter: true },
  { headerName: 'RatePerHour', field: 'ratePerHour' ,filter: true, floatingFilter: true},
  { headerName: 'State', field: 'stateName' ,filter: true, floatingFilter: true},
  { headerName: 'Action'},
];

getlist() {
  // console.log(id)
  // Show the loading indicator
  this.isLoading = true;
  try {
    // Call the getTasklist service
    this._adminViewtService.getTaxProList().subscribe(
      (response) => {
        // Hide the loading indicator
        this.isLoading = false;
        // Store the tasklists
        // this.tasklists = response.data;
        this.rowData=response.data.resultObj;
        
      },
      (error) => {
        // Hide the loading indicator
        this.isLoading = false;
        // Show the error
        this.errorObj = true
      });
  }
  catch (error) {
    // Log the error
    log.error('tasklist() funtion ', error);
  }

}}
