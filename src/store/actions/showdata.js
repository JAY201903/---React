/**
 * action creator
 */
export const ADD_TO_DATA = "ADD_TO_DATA";
export const CLEAR_DATA = "CLEAR_DATA";
export const CHANGE_DATA = "CHANGE_DATA";
export const REMOVE_FROM_DATA = "REMOVE_FROM_DATA";
export function add(list) {
  return {
    type: ADD_TO_DATA,
    newlist:list,
  };
}
export function change(goods_id, goods_DATA) {
  return {
    type: CHANGE_DATA,
    goods_id,
    goods_DATA,
  };
}
export default {
  add,
  change,
};