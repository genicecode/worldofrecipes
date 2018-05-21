import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-entdecken',
  templateUrl: './entdecken.component.html',
  styleUrls: ['./entdecken.component.scss'],
  animations: [
    trigger('recipeNames', [
      transition('* => *', [
        query(':enter', style({ opacity:0 }), { optional:true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset:0}),
            style({opacity: .5, transform: 'translateY(35px)', offset:.3}),
            style({opacity: 1, transform: 'translateY(-75%)', offset:1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class EntdeckenComponent implements OnInit {

  public recipes = { 
    recipeName : [],
    recipeDesc : [],
    recipePic : []
  };

  recipeName: string;
  recipeDesc: string;
  fileToUpload: File=null;
  fileUploaded: any;

  imageUrl= "/assets/upload.png";
  imageUrl2 = [];

  constructor() { }

  ngOnInit() {
  }


  addItem(){
    //this.test.push(this.recipeName);
    //this.recipes.push([this.recipeName][this.recipeDescription]);
    this.recipes.recipeName.push(this.recipeName);
    this.recipes.recipeDesc.push(this.recipeDesc);
    //this.recipes.recipePic.push(this.fileUploaded );
    this.recipeName = '';
    this.recipeDesc = '';
    //this.fileUploaded  = null;
  }

  handleFileInput(file:FileList) {
    this.fileToUpload = file.item(0);
    //this.fileUploaded = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
      this.imageUrl2 = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    this.fileUploaded = reader.readAsDataURL(this.fileToUpload)
    console.log(this.fileUploaded);
  }
}