// Exemple d'initialisation d'un store (placeholder)
const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Exportation du store sous forme d'objet simple pour ce cas
export const store = {
  state: initialState,
  dispatch: () => {},
};