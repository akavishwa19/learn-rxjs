import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss',
})
export class PromisesComponent {

  constructor(){

  }

  ngOnInit(){
    this.consumePromise()
  }
   
  returnPromise(){
    const promise = new Promise((resolve, reject) => {
      const data: boolean = true;
  
      if (!data) {
        reject('promise rejcted instantly');
      }
  
      setTimeout(() => {
        resolve('promise resolved after 2 seconds');
      }, 2000);
    });

    return promise

  }

  


  async consumePromise(){
    const data=await this.returnPromise();
    console.log(data)
  }

}
