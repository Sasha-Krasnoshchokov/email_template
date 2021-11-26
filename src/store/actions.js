export const CLICK_ON_MENU = 'CLICK_ON_MENU';
export const BACK = 'BACK';
export const NEXT = 'NEXT';
export const ADD_PLACEHOLDER = 'ADD_PLACEHOLDER';
export const CLEAR_PLACEHOLDERS = 'CLEAR_PLACEHOLDERS';
export const FILL_PLACEHOLDER = 'FILL_PLACEHOLDER';
export const FILL_EMAIL_BODY = 'FILL_BODY_EMAIL';
export const FILL_CLEAN_EMAIL_TEXT = 'FILL_CLEAN_EMAIL_TEXT';
export const CREATE_EMAIL = 'CREATE_EMAIL';
export const CLEAR = 'CLEAR';
export const SEND_EMAIL = 'SEND_EMAIL';
export const SENDING_STATUS = 'SENDING_STATUS';

export const actions = {
  clickOnMenu: (value) => ({ type: CLICK_ON_MENU, value }),
  back: () => ({ type: BACK }),
  next: () => ({ type: NEXT }),
  addPlaceholder: (value) => ({ type: ADD_PLACEHOLDER, value }),
  clearPlaceholders: () => ({ type: CLEAR_PLACEHOLDERS }),
  fillPlaceholder: (id, value) => ({ type: FILL_PLACEHOLDER, id, value }),
  fillEmailBody: (value) => ({ type: FILL_EMAIL_BODY, value }),
  fillCleanEmailText: () => ({ type: FILL_CLEAN_EMAIL_TEXT }),
  createEmail: () => ({ type: CREATE_EMAIL }),
  clear: () => ({ type: CLEAR }),
  sendEmail: (value) => ({ type: SEND_EMAIL, value }),
  sendingStatus: (value) => ({ type: SENDING_STATUS, value }),
};
