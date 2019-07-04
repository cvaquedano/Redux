import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState{
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor( private store: Store<AppState>){
    //this.contador = 10;
    this.store.subscribe( state => {
      this.contador = state.contador;
    });
  }

  decrementar(){
    //this.contador --;
    const accion: Action = {
      type: 'DECREMENTAR'
    };
    this.store.dispatch(accion);
  }

  incrementar(){
    //this.contador ++;
    const accion: Action = {
      type: 'INCREMENTAR'
    };
    this.store.dispatch(accion);
  }
}
