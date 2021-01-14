var bodyEl = document.getElementsByTagName('body')[0];

console.log(bodyEl);

function viewBuilder(viewType, sectionTitle) {

    // bodyEl.innerHTML = "";

    var viewEl = document.createElement('section');
    viewEl.innerHTML = `<header id="${viewType}"><h3>${sectionTitle}</h3></header>`;

    bodyEl.appendChild(viewEl);
};

viewBuilder("inputType", "PUMP INFORMATION");