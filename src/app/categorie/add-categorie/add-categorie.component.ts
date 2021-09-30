import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styles: [
  ]
})
export class AddCategorieComponent implements OnInit {

  
  constructor(public crudApi: CategorieService, public toastr: ToastrService,
    private router: Router, public fb: FormBuilder) {}
  
  ngOnInit() {
    if(this.crudApi.choixmenu =="A"){ this.infoForm()};
  }
 
  infoForm(){
    this.crudApi.formData= this.fb.group({
      id: null,
      code :['', [Validators.required]],
      libelle:['', [Validators.required]],
    });
  }

  ResetForm(){
    this.crudApi.formData.reset();
  }
  OnSubmit(){
    if (this.crudApi.choixmenu =="A"){
      this.addData();
    }
    else{
      this.updateData()
    }
  }

  liste(){
    this.router.navigate(['/categories']);
  }

  addData(){
    this.crudApi.createData(this.crudApi.formData.value).
    subscribe(data => {
      console.log(data);
      this.router.navigate(['/categories']);
    });
  }

  updateData(){
    this.crudApi.updatedata(this.crudApi.formData.value.id, this.crudApi.formData.value).
    subscribe(data => {
      console.log(data);
      this.router.navigate(['/categories']);

    });
  }
}
