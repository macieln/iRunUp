var bodyEl = document.getElementsByTagName('body')[0];

function viewBuilder(viewType, sectionTitle) {

    // bodyEl.innerHTML = "";

    var viewEl = document.createElement('section');
    var inputInstruction = `<p id="inputInstruction">Select pump model to begin run up</p>`;
    var userInputEl = `<select id="userInputEl">
                            <option value=""></option>
                            <option value="iXL120">iXL120</option>
                            <option value="iGX100L">iGX100L</option>
                            <option value="iGX100M">iGX100M</option>
                            <option value="iGX600L">iGX600L</option>
                            <option value="iGX600M">iGX600M</option>
                            <option value="iXH1210">iXH1210</option>
                            <option value="iXH1220">iXH1220</option>
                            <option value="iXH1820">iXH1820</option>
                            <option value="iXH1820HTX">iXH1820HTX</option>
                            <option value="iXH3030">iXH3030</option>
                       </select>`;
    var inputName = '<p id="inputName">Pump Model</p>';
    var inputDivEl = `<div id="inputDivEl">${userInputEl} ${inputName}</div>`;

    viewEl.innerHTML = `<header id="${viewType}"><h3>${sectionTitle}</h3></header>` + inputInstruction + inputDivEl;

    bodyEl.appendChild(viewEl);

    var navElement = document.createElement('nav');
    navElement.innerHTML = `<div id="cancelButton">
                                <p>CANCEL</p>
                            </div>
                            <div id="startButton">
                                <p>START</p>
                            </div>`;

    bodyEl.appendChild(navElement);

    var cancelButtonEl = document.getElementById('cancelButton');
    var startButtonEl = document.getElementById('startButton');

    cancelButtonEl.addEventListener("click", function() {
        console.log("This shit was canceled!");
    });

    startButtonEl.addEventListener("click", function() {
        console.log("This shit was started!");
    });
};

viewBuilder("inputType", "PUMP INFORMATION");