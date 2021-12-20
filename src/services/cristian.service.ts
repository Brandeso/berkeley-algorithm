import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CristianAlgorithmService {
  public sinchronizeTimes(master: string, slaves: string[], deltaTime: number) {
    let slaveUpdate:string[] = [];
    let masterTime = master.split(':');
    slaves.forEach((time) => {
      
    });
    return [master, slaves]
  }
}