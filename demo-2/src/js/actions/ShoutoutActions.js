import dispatcher from '../dispatcher';

export function createAction(shoutout, name) {
    dispatcher.dispatch({type: "CREATE_SHOUTOUT", shoutout, name});
}