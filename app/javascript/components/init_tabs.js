
const toogleTab = () => {

  const clickButton1 = document.getElementById("tab1");
  const clickButton2 = document.getElementById("tab2");
  const clickButton3 = document.getElementById("tab3");
  const clickButton4 = document.getElementById("tab4");
  const clickButton5 = document.getElementById("tab5");
  const clickButton6 = document.getElementById("tab6");
  const clickButton7 = document.getElementById("tab7");


  const tab1 = document.getElementById("tab-1");
  const tab2 = document.getElementById("tab-2");
  const tab3 = document.getElementById("tab-3");
  const tab4 = document.getElementById("tab-4");
  const tab5 = document.getElementById("tab-5");
  const tab6 = document.getElementById("tab-6");
  const tab7 = document.getElementById("tab-7");


  if (clickButton1) {
    clickButton1.addEventListener('click', (event) => {
      event.currentTarget.classList.add('active');
      clickButton2.classList.remove('active');
      clickButton3.classList.remove('active');
      clickButton4.classList.remove('active');
      clickButton5.classList.remove('active');
      clickButton6.classList.remove('active');
      clickButton7.classList.remove('active');

      tab1.classList.remove('inactive-tab')
      tab2.classList.add('inactive-tab')
      tab3.classList.add('inactive-tab')
      tab4.classList.add('inactive-tab')
      tab5.classList.add('inactive-tab')
      tab6.classList.add('inactive-tab')
      tab7.classList.add('inactive-tab')

    });

    clickButton2.addEventListener('click', (event) => {
      event.currentTarget.classList.add('active');
      clickButton1.classList.remove('active');
      clickButton3.classList.remove('active');
      clickButton4.classList.remove('active');
      clickButton5.classList.remove('active');
      clickButton6.classList.remove('active');
      clickButton7.classList.remove('active');

      tab2.classList.remove('inactive-tab')
      tab1.classList.add('inactive-tab')
      tab3.classList.add('inactive-tab')
      tab4.classList.add('inactive-tab')
      tab5.classList.add('inactive-tab')
      tab6.classList.add('inactive-tab')
      tab7.classList.add('inactive-tab')
    });

    clickButton3.addEventListener('click', (event) => {
      event.currentTarget.classList.add('active');
      clickButton2.classList.remove('active');
      clickButton1.classList.remove('active');
      clickButton4.classList.remove('active');
      clickButton5.classList.remove('active');
      clickButton6.classList.remove('active');
      clickButton7.classList.remove('active');

      tab3.classList.remove('inactive-tab')
      tab2.classList.add('inactive-tab')
      tab1.classList.add('inactive-tab')
      tab4.classList.add('inactive-tab')
      tab5.classList.add('inactive-tab')
      tab6.classList.add('inactive-tab')
      tab7.classList.add('inactive-tab')
    });

    clickButton4.addEventListener('click', (event) => {
      event.currentTarget.classList.add('active');
      clickButton2.classList.remove('active');
      clickButton3.classList.remove('active');
      clickButton1.classList.remove('active');
      clickButton5.classList.remove('active');
      clickButton6.classList.remove('active');
      clickButton7.classList.remove('active');

      tab4.classList.remove('inactive-tab')
      tab2.classList.add('inactive-tab')
      tab3.classList.add('inactive-tab')
      tab1.classList.add('inactive-tab')
      tab5.classList.add('inactive-tab')
      tab6.classList.add('inactive-tab')
      tab7.classList.add('inactive-tab')
    });
    clickButton5.addEventListener('click', (event) => {
      event.currentTarget.classList.add('active');
      clickButton2.classList.remove('active');
      clickButton3.classList.remove('active');
      clickButton1.classList.remove('active');
      clickButton4.classList.remove('active');
      clickButton6.classList.remove('active');
      clickButton7.classList.remove('active');

      tab5.classList.remove('inactive-tab')
      tab2.classList.add('inactive-tab')
      tab3.classList.add('inactive-tab')
      tab1.classList.add('inactive-tab')
      tab4.classList.add('inactive-tab')
      tab6.classList.add('inactive-tab')
      tab7.classList.add('inactive-tab')
    });
    clickButton6.addEventListener('click', (event) => {
      event.currentTarget.classList.add('active');
      clickButton2.classList.remove('active');
      clickButton3.classList.remove('active');
      clickButton1.classList.remove('active');
      clickButton4.classList.remove('active');
      clickButton5.classList.remove('active');
      clickButton7.classList.remove('active');

      tab6.classList.remove('inactive-tab')
      tab2.classList.add('inactive-tab')
      tab3.classList.add('inactive-tab')
      tab1.classList.add('inactive-tab')
      tab4.classList.add('inactive-tab')
      tab5.classList.add('inactive-tab')
      tab7.classList.add('inactive-tab')
    });
    clickButton7.addEventListener('click', (event) => {
      event.currentTarget.classList.add('active');
      clickButton2.classList.remove('active');
      clickButton3.classList.remove('active');
      clickButton1.classList.remove('active');
      clickButton4.classList.remove('active');
      clickButton6.classList.remove('active');
      clickButton5.classList.remove('active');

      tab7.classList.remove('inactive-tab')
      tab2.classList.add('inactive-tab')
      tab3.classList.add('inactive-tab')
      tab1.classList.add('inactive-tab')
      tab4.classList.add('inactive-tab')
      tab6.classList.add('inactive-tab')
      tab5.classList.add('inactive-tab')
    });
  }
};

export { toogleTab };
