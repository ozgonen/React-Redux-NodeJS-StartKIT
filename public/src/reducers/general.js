import {TOGGLE_DRAWER} from '../actions/index';

const INIT_STATE = {openDrawer: false};

export default function (state = INIT_STATE, action) {
    switch (action.type) {

        case TOGGLE_DRAWER :
            return {...state, openDrawer:!state.openDrawer}

    }
    return state;
}