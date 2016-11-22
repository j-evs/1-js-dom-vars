'use strict';

function initializeClock (date = Date.now(), format = ['hours', 'minutes', 'seconds']) {
      let container = document.createElement('div');
      container.style.display = 'flex';

      document.body.appendChild(container);

      format.forEach((dateProp) => {
        let item = document.createElement('div');
        let title = document.createElement('h4');
        let value = document.createElement('span');
        let isPropYear = dateProp === 'year';
        
        item.style.margin = '15px';
        title.innerHTML = `${dateProp}`;
        value.setAttribute(`data-function`, `get${isPropYear ? 'Full' : ''}${dateProp[0].toUpperCase() + dateProp.slice(1)}`);

        item.appendChild(title);
        item.appendChild(value);
        container.appendChild(item);
      });
    updateClock();

    function updateClock() {
      [...document.getElementsByTagName('span')].forEach((dateProp) => {
        dateProp.innerHTML = date[dateProp.dataset.function]();
      });
      date.setSeconds(date.getSeconds() + 1);
    }

    setInterval(updateClock, 1000);
};

initializeClock(new Date(2014, 6, 14));
//initializeClock(['hours', 'seconds']);
//initializeClock(new Date(2014, 6, 14), ['year', 'month', 'seconds']);
//initializeClock();
