class ModuleOne {
  constructor(name) {
    this.type = "ModuleOne";
    this.name = name;
  }
  toString() {
    console.log(`The info is type: ${this.type}, name: ${this.name}`);
  }
}

export default ModuleOne;
