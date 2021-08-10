
const showAnalisys1 = () => {

  const clickButton1 = document.getElementById("show1");
  const show1 = document.getElementById("sh1");

  if (clickButton1) {
    clickButton1.addEventListener('click', (event) => {
      if (show1.classList.contains('inactive-tab')) {
        show1.classList.remove('inactive-tab');
      } else {
        show1.classList.add('inactive-tab');
      }
    });
  }
};

const showAnalisys2 = () => {

  const clickButton5 = document.getElementById("show5");
  const show5 = document.getElementById("sh5");

  if (clickButton5) {
    clickButton5.addEventListener('click', (event) => {
      if (show5.classList.contains('inactive-tab')) {
        show5.classList.remove('inactive-tab');
      } else {
        show5.classList.add('inactive-tab');
      }
    });
  }
};


const showAnalisys3 = () => {

  const clickButton6 = document.getElementById("show6");
  const show6 = document.getElementById("sh6");

  if (clickButton6) {
    clickButton6.addEventListener('click', (event) => {
      if (show6.classList.contains('inactive-tab')) {
        show6.classList.remove('inactive-tab');
      } else {
        show6.classList.add('inactive-tab');
      }
    });
  }
};


export { showAnalisys1, showAnalisys2, showAnalisys3 };
