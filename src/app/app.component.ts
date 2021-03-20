import { Template } from '@angular/compiler/src/render3/r3_ast';
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.html']
})
export class AppComponent
{
public title= 'Devoir Angular';
public maximum:number = 6;
public minimum:number=-8;
public courant:number=0;
public numero = 0;
public cValue= '';

}



