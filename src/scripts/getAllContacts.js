import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.log('Помилка при читанні контаків:', error);
  }
};

console.log(await getAllContacts());
