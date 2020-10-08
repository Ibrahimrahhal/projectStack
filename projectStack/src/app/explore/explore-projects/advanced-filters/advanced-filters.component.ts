import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/services/static-data.service';
import { ProjectCategory } from 'src/app/types/ProjectCategory';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
})
export class AdvancedFiltersComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    public staticData:StaticDataService,
    @Inject(MAT_DIALOG_DATA) public passedData:FormGroup,) { }
    filteredCategories:ProjectCategory[]=[];

  ngOnInit(): void {

  }




  formatLabel(value: number) {
    return value+"P"
  }

}
