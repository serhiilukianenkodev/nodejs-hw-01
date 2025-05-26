import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const savedContacts = await readContacts();
    await writeContacts([...savedContacts.slice(0, -1)]);
    console.log('Останній контакт успішно видалено.');
  } catch (error) {
    console.log('Помилка при генерації контактів:', error);
  }
};

removeLastContact();
