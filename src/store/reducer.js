import { state as initialState } from './initialState';
import {
  FILL_EMAIL_BODY, FILL_CLEAN_EMAIL_TEXT, CREATE_EMAIL,
  ADD_PLACEHOLDER, CLEAR_PLACEHOLDERS, FILL_PLACEHOLDER,
  CLICK_ON_MENU, BACK, NEXT,
  CLEAR,
} from './actions';

const createCleanEmail = (emailText, placeholders) => {
  let text = emailText;
  let allPlaceholders = emailText.match(/{\w+}/g);
  allPlaceholders.forEach(item => {
    if (placeholders.length > 2) {
      text = text.replace(
        item, placeholders.find(placeholder => placeholder.name === item).text
      )
    }
  });
  return text;
};

export const reducer = (state = {}, action) => {
  const idMax = state.placeholders.length;

  switch (action.type) {
    case FILL_EMAIL_BODY:
      return {
        ...state,
        bodyEmail: {
          ...state.bodyEmail,
          dirtyText: action.value,
          cleanText: action.value,
        },
      };

    case FILL_CLEAN_EMAIL_TEXT:
      return {
        ...state,
        bodyEmail: {
          ...state.bodyEmail,
          cleanText: state.bodyEmail.dirtyText,
        },
      };

    case CREATE_EMAIL:
      return {
        ...state,
        bodyEmail: {
          ...state.bodyEmail,
          cleanText: createCleanEmail(state.bodyEmail.cleanText, state.placeholders),
        },
      };

    case ADD_PLACEHOLDER:
      return {
        ...state,
        placeholders: [
          ...state.placeholders,
          {
            id: idMax + 1,
            title: '',
            name: action.value,
            text: '',
          },
        ],
      };
    
    case CLEAR_PLACEHOLDERS:
      return {
        ...state,
        placeholders: [
          state.placeholders[0],
          state.placeholders[1],
        ],
      };

    case FILL_PLACEHOLDER:
      return {
        ...state,
        placeholders:
          state.placeholders.map(placeholder => {
            if (placeholder.id === action.id) {
              return {
                ...placeholder,
                text: action.value,
              };
            }
            return { ...placeholder };
          }),
      };

    case CLICK_ON_MENU:
      return {
        ...state,
        pageActive: { idActivePage: action.value },
      };

    case BACK:
      return {
        ...state,
        pageActive: { idActivePage: --state.pageActive.idActivePage },
      };

    case NEXT:
      return {
        ...state,
        pageActive: { idActivePage: ++state.pageActive.idActivePage },
      };

    case CLEAR:
      return initialState;

    default:
      return state;
  };
};
