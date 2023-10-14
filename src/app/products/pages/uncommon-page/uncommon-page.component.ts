import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

    // i18n Select
    public name: string = 'Irving';
    public gender: 'male' | 'female' = 'male';
    public invitationMap = {
        'male': 'invitarlo',
        'female': 'invitarla'
    }


    changeClient(): void {
        this.name = 'Melissa';
        this.gender = 'female';
    }

    // i18n Plural
    public clients: string[] = ['Maria', 'Fernando', 'Marco', 'Jorge', 'Sara', 'Ariana'];
    public clientsMap = {
        '=0': 'no tenemos ningùn cliente esperando.',
        '=1': 'tenemos un cliente esperando.',
        '=2': 'tenemos 2 clientes esperando.',
        'other': 'tenemos # clientes esperando.'
    }

    deleteClient(): void
    {
        this.clients.shift();
    }

    // KeyValue Pipe
    public person = {
        name: 'Irving',
        age: 31,
        address: 'Ciudad de México'
    }

    // Async Pipe
    public myObservableTimer = interval(2000);

    public promiseValue: Promise<string> = new Promise( (resolve ) => {
        setTimeout(() => {
            resolve('Tenemos data en la promesa');
        }, 3500);
    })

}
