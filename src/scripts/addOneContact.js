import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const savedContacts = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...savedContacts, newContact]);
  } catch (error) {
    console.log('Помилка при додаванні контаку:', error);
  }
};

addOneContact();
