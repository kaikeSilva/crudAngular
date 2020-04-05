import { Component } from '@angular/core';

//decorator manipulador da função que é colocada
function log (target, name, descriptor) {
  console.log("target: ",target)
  console.log("name:", name)
  console.log("descriptor: ",descriptor)
  //guardar o valor original da função
  const original = descriptor.value
  //manipular essa função atraves de descriptor.value
  descriptor.value = function () {
    console.log("função manipulada")
  }
  original()
  //retornar o descriptor
  return descriptor
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';

  constructor () {
      this.aSimpleMethod()
  }

  @log 
  aSimpleMethod() {
    console.log("hey there")
  }

}

