import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    writeContacts([]);
    console.log('Усі контакти успішно видалені.');
  } catch (error) {
    console.log('Помилка при видаленні контаків:', error);
  }
};

removeAllContacts();
