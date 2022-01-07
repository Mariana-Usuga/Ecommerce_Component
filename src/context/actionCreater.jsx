import { ADD_PLATE, DELETE_PLATE } from "./contants";

export function addPlateAction(plate) { 
  return { type: ADD_PLATE, payload: plate }; //pasarle tarea, esto lleva al action
}

export function deletePlateAction(plate){
  return { type: DELETE_PLATE, payload: plate };
}