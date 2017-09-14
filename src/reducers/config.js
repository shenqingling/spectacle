import { handleActions } from 'redux-actions';

const reducer = handleActions({
  SET_MODE: (state, action) => {
  	const { mode } = action.payload;
    return Object.assign({}, { mode });
  }
}, { mode: 'show' });

export default reducer;
