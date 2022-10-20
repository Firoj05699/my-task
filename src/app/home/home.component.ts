import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : any;
  type : any = "None";
  counter : any = 1;

 

  text :any=[
    {
      placeholder :[],
      min : [],
      max : [],
      rows : []
    }
  ];
  number :any=[
    {
      placeholder :[],
      min : [],
      max : []
      
    }
  ];
  select :any=[
    {
      placeholder :[],
      min : [],
      max : []
    
    }
  ];
  textarea :any=[
    {
      placeholder :[],
      min : [],
      max : [],
      step : []
    }
  ];
 radio :any=[
    {
      placeholder :[]
     
    }
  ];
 checkbox :any=[
    {
      placeholder :[]
     
    }
  ];
 slider :any=[
    {
      placeholder :[],
      min : [],
      max : [],
     
    }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }


  change(){
  console.log(this.title);
  console.log(this.type);
  
  }

  addMore(){
    this.counter++;
  }

  remove(){
    this.counter--;
  }

  submit(){
  if(this.text){

    console.log(this.text);    
  
  }
  else if(this.number){

    console.log(this.number);    
  
  }
  else if(this.select){

    console.log(this.select);    
  
  }
  else if(this.textarea){

    console.log(this.textarea);    
  
  }
  else if(this.radio){

    console.log(this.radio);    
  
  }
  else if(this.checkbox){
    
    console.log(this.checkbox);    
  
  }
  else if(this.slider){

    console.log(this.slider);    
  }  
  

  }

}
