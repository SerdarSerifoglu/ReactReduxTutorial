export const ADD_OBJECT = "ADD_OBJECT";
export const REMOVE_OBJECT = "REMOVE_OBJECT";

export function addObject(object) {
  return {
    type: ADD_OBJECT,
    payload: object,
  };
}

export function removeObject(object) {
  return {
    type: REMOVE_OBJECT,
    payload: object,
  };
}
