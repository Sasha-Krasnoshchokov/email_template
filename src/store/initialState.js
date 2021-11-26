export let state = {
  menuList: [
    {
      id: 1,
      title: 'Compose Email Template',
    },
    {
      id: 2,
      title: 'Set Values',
    },
    {
      id: 3,
      title: 'Preview & Send',
    },
  ],
  bodyEmail: {
    name: 'Body',
    dirtyText: '',
    cleanText: '',
  },
  pageActive: { idActivePage: 1 },
  placeholders: [
    {
      id: 1,
      title: 'Recipients',
      name: '{recipient}',
      text: '',
    },
    {
      id: 2,
      title: 'Subject',
      name: '{subject}',
      text: '',
    },
  ],
};
