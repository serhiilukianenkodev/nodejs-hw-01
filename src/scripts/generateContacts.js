import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const savedContacts = await readContacts();
    const generetedContacts = [...Array(number)].map(() => createFakeContact());
    await writeContacts([...savedContacts, ...generetedContacts]);
  } catch (error) {
    console.log('Помилка при генерації контактів:', error);
  }
};

generateContacts(2);
