class Person {
  #id = Math.floor(Math.random() * Date.now());
  // constructor(id) {
  //   this.#id = Math.floor(Math.random() * Date.now());
  // }
  get getID() {
    return this.#id;
  }
}

module.exports = Person;
