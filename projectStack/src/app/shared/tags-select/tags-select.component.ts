import { AbstractControl, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-select',
  templateUrl: './tags-select.component.html',
  styleUrls: ['./tags-select.component.scss']
})
export class TagsSelectComponent implements OnInit {
  @Input() availableOptions:tagOption[];
  @Input() control:FormControl;
  @Input() min:number;
  @Input() max:number;
  @Input() position;
  @Input() fullwidth;
  searchFeild:FormControl;;
  constructor() { }

  ngOnInit(): void {
    this.position = this.position || 'up';
    this.searchFeild = new FormControl('');
    if(!this.control)
    return;
    let validators = [];
    if(this.min)
      validators.push(this.getMinValidator(this.min));
    if(this.max)
      validators.push(this.getMaxValidator(this.max));
    this.control.setValidators(validators);
    this.control.markAsTouched();
    this.control.updateValueAndValidity();

  }

  itemSelect($event){
    if(!this.control)
    return;
    this.control.setValue([...(this.control.value || []), $event.option.value])
    this.searchFeild.setValue("");
    this.control.updateValueAndValidity();
  }

  removeTag(ID:string){
    this.control.setValue((this.control.value || []).filter(id=>id!=ID));
    this.control.updateValueAndValidity();

  }

  get filteredOptions():tagOption[]{
    return (this.availableOptions || []).filter((e:tagOption)=>{
      return (e.DESC || "").toLowerCase().includes((this.searchFeild.value || "").toLowerCase());
    }).filter((e:tagOption)=>{
      return !(this.selectedTags || []).includes(e);
    })
  }

  get selectedTags():tagOption[]{
    if(!this.control)
    return [];
    return (this.availableOptions || []).filter((e:tagOption)=>{
      return (this.control.value || []).includes(e.ID);
    });
  }

  getMinValidator(min:number){
    return (control: AbstractControl): {[key: string]: any} | null => {
      console.log("called")
       if((control.value || []).length < min)
        return {min: `You must have at lease ${min} items`};
    };
  }

  getMaxValidator(max:number){
    return (control: AbstractControl): {[key: string]: any} | null => {
       if((control.value || []).length > max)
        return {max: `You can't have more than ${max} items`};
    };
  }
}

interface tagOption{
  DESC:string;
  ID:string;
}

