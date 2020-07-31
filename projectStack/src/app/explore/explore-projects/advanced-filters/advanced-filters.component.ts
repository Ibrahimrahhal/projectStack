import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StaticDataService } from 'src/app/services/static-data.service';
import { ProjectCategory } from 'src/app/types/ProjectCategory';

@Component({
  selector: 'app-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
})
export class AdvancedFiltersComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private staticData:StaticDataService) { }
    filtersFormGroup:FormGroup;
    filteredCategories:ProjectCategory[]=[];
  ngOnInit(): void {
    this.filtersFormGroup = this.fb.group({
      Categories: this.fb.control([])
    });
  }

  FilterCategories(text:string):void{
    this.filteredCategories = this.staticData.ProjectCategories.filter((category)=>{
      return (category.DESC.toLowerCase().includes(text.toLowerCase()) && !this.isCategoryValueSelected(category));
    });
    if(this.filteredCategories.length > 3)
      this.filteredCategories = this.filteredCategories.slice(0,3)
  }

  isCategoryValueSelected(category:ProjectCategory): boolean{
    if(this.filtersFormGroup.getRawValue())
      return this.filtersFormGroup.getRawValue().Categories.includes(category.ID);
    else
    return false;
  }

  addOptionToCategoriesFilter(event){
    this.filtersFormGroup.get('Categories').setValue([...this.filtersFormGroup.get('Categories').value, event.option.value]);
  }

  formatLabel(value: number) {
    return value+"P"
  }

}
