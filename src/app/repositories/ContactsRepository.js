const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'John',
    email: 'john@example.com',
    phone: '123-456-1234',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Meredith',
    email: 'meredith@example.com',
    phone: '654-321-4321',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id === id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        phone,
        email,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }

  findByEmail(email) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }
}

module.exports = new ContactsRepository();
