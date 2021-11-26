export const createStore = (
  reducer,
  initState,
) => {
  let state = {
    ...initState,
    pageActive: { ...initState.pageActive },
    placeholders: initState.placeholders.map(placeholder => {
      return { ...placeholder };
    }),
  };
  let callbacks = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      callbacks.forEach(f => f());
    },
    subscribe(f) {
      callbacks.push(f);
    },
  };
};
