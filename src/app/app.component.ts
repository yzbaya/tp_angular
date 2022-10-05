import { Component, ResolvedReflectiveFactory } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
  {{title}}
  </h1>
  <p>  
  lenght: {{title.length}}
  </p>
  <p>
  Reserve: {{getReversed(title)}}
  </p>

  `,

styles:[]
})
export class AppComponent {
  title = 'APP Works!';
  getReversed(str:string){
    let reversed ='';
    for(let i = str.length - 1; i >= 0; i--){

      reversed+=str.substring(i,i+1);
    }
 return reversed;
  }
}
// This file was my first 