import {EventEmitter} from 'events';
import dispatcher from "../dispatcher";

class ShoutoutsStore extends EventEmitter {

    constructor() {
        super();
        this.shoutouts = [
            {
                id: 1,
                shoutout: "My very first Shoutout, yay !",
                name: "AlohaCode"
            },
            {
                id: 2,
                shoutout: "My very second Shoutout, meh",
                name: "AlohaCode"
            }
        ];

        /*bind的作用：创建一个新函数，使actionListenr在任何使用之处，this都能指向shoutoutsStore*/
        this.actionListener = this.actionListener.bind(this);
    }

    actionListener(action) {
        switch (action.type) {
            case "CREATE_SHOUTOUT": {
                this.addShoutout(action.shoutout, action.name);
                break;
            }
            default:
            // no op
        }
    }

    // view -> action -> dispatcher -> store -> view
    addShoutout(shoutout, name) {
        let newSO = {}; // new Object();
        newSO.id = Date.now().toString();
        newSO.shoutout = shoutout;
        newSO.name = name;

        this.shoutouts.push(newSO);
        this.emit("newShoutout");
    }

    getShoutouts() {
        return this.shoutouts;
    }
}

const shoutoutsStore = new ShoutoutsStore();
dispatcher.register(shoutoutsStore.actionListener);

export default shoutoutsStore;