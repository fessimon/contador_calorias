import { Activity } from "../types/index"
export type ActivityActions = 
        {type: 'save-activity', payload: {newActivity: Activity}}
    //type nuevo, va a describir lo que esta sucediendo
    //describen que es lo que esta sucendiendo una vez que
    //que queramos modificar nuestro state
    /**
     * una accion consta de dos partes
     * el type que es la descripcion
     * y el payload que es lo que queremos modificar o los datos
     * que el usuario esta ingresando
     */



type ActivityState = {
    //definimos nuestro type con un objeto 
    //
    activities: Activity[]//lo importamos de index.ts
}


export const initialState: ActivityState = {
    //state inicial es un objeto y definimos un nuevo type para asignarle
    activities: []
}
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions 
) => {
    //reducer de state
    if(action.type === 'save-activity'){
        //maneja la logica para actualizar el state
        //console.log("desde el type save-activity");
        return {
            //voy a teneer una copia del state
            ...state,
            activities:[...state.activities, action.payload.newActivity]
            /*
            *Explicacion:
            * tengo una copia del state ...state, para no perder la referencia de lo que tenemos
            * siempre un return y la copia de state
            * ahora referencio el state activities es un arreglo
            * vuelvo hacer la copia del state pero en este caso es 
            * de las actividades para no perder lo que se encontraba en las 
            * actividades previas
            * el payloaad lo que hace es actualizar lo que este en el state actualizado
            * 
            * */ 

        }
        
    }
    return state //SIEMPRE debe retornar el state    
}