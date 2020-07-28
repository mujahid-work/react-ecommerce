import Sections_Data from './sections.data';

const INITIAL_STATE = {
    sections: Sections_Data
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;