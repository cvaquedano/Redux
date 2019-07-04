import { Action } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR, RESET } from './contador.actions';


export function contadorReducer(state: number=10, action: Action){

    switch ( action.type) {
        case INCREMENTAR:
            return state + 1;

        case DECREMENTAR:
            return state - 1;
            
        case RESET:
            return state = 0 ;

        default:
            return state;
    }

}