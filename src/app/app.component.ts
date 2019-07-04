import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';

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
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }

  incrementar(){
    //this.contador ++;
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }
}
