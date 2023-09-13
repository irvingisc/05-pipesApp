import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

    public nameLower: string = 'irving';
    public nameUpper: string = 'IRVING';
    public fullName: string = 'IrvInG HeRNánDeZ';

}
