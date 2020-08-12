const init = () => {
  alert(hello("Bob", "Tom"));
};

function hello(...args) {
  return args.reduce((accu, curr) => {
    return `Hello Hello ${accu} ${curr}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
