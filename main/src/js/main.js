const init = () => {
  alert(hello('Bob', 'Tom'));
};

function hello(...args) {
  return args.reduce((accu, curr) => `Hello Hello ${accu} ${curr}`);
}

class Foo {
  constructor() {
    this.foo = 'foo';
  }
}

Foo();

document.addEventListener('DOMContentLoaded', () => {
  init();
});
