import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ModalService {
  constructor(){}
  
  private serviceData: { id:number, data1: string, data2:string }[] = [
    {
      id:1,
      data1: "important info",
      data2: "not super important"
    }, 
    {
      id:2,
      data1: "2important 4info",
      data2: "not super8 important"
    },
  ] 

  getServiceData(){
    return this.serviceData.slice()
  }
 
}

