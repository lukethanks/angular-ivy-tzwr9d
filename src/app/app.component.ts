import { Component, VERSION } from '@angular/core';
function log(target, name, descriptor){
  console.log(target, name, descriptor)
  const original = descriptor.value

  descriptor.value=fuction(){
    console.log("This function was hacked!")
  }
  return descriptor
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Svarti ' + VERSION.major;
constructor(){
  this.aSimpleMethod()
}


@log
aSimpleMethod()
{console.log("Hey there!")}
}
