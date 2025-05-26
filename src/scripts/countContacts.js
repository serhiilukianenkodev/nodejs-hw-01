import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.log('Помилка при читанні контаків:', error);
  }
};

console.log(await countContacts());
