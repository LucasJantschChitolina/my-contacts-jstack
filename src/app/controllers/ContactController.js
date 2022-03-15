class ContactController {
  index(request, response) {
    response.send('Contacts');
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

// singleton
module.exports = new ContactController();
