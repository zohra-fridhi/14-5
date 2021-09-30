import { Component, OnInit,Inject } from '@angular/core';
import { CategorieService } from '../../service/categorie.service';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from '../../model/categorie';
//import { Observable} from 'rxjs';
import { Router } from '@angular/router';
//import { DatePipe} from '@angular/common';
import { FormBuilder} from '@angular/forms';
//import {MatDialog, MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material/dialog';
//import { AddCategorieComponent } from '../../categorie/add-categorie/add-categorie.component';


@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styles: [
  ]
})
export class ListCategorieComponent implements OnInit {

  categorie!: Categorie;
  
  constructor(public crudApi: CategorieService, public toastr: ToastrService,
    private router: Router, public fb: FormBuilder) {}
  
  ngOnInit() {
    
    this.getData();
  }

  getData() {
    this.crudApi.getAll().subscribe(
      response => { this.crudApi.list = response; 
    }
    );
  }

  removeData(id: string) {
    if (window.confirm('Are sure you want to delete this Catégorie ?')) {
      this.crudApi.deleteData(id)
        .subscribe(
          data => {
            console.log(data);
            this.toastr.warning(' data successfully deleted!');
            this.getData();
          },
          error => console.log(error));
    }
  }
  selectData(item : Categorie) {
    this.crudApi.choixmenu = "M";
    this.crudApi.formData = this.fb.group(Object.assign({},item));
    
    this.router.navigate(['/categorie']);
  }
  
  }


