//***************************************************//
//                      FORMS                        // 
//***************************************************//

var pumpInformationForm = {
    "sectionTitle": "PUMP INFORMATION",
    "steps": [
        {
            "inputInstruction": `<p id="inputInstruction">Select pump model to begin pump run up.</p>`,
            "userInputEl": selectElBuilder("userInputEl", Object.keys(vacSpecs), "Pump Model"),
            "pumpModel": null
        },
        {
            "inputInstruction": `<p id="inputInstruction">Select pump model to begin pump run up.</p>`,
            "userInputEl": selectElBuilder("userInputEl", Object.keys(vacSpecs), "Pump Model"),
            "pumpModel": null
        },
        {
            "inputInstruction": `<p id="inputInstruction">Select pump model to begin pump run up.</p>`,
            "userInputEl": selectElBuilder("userInputEl", Object.keys(vacSpecs), "Pump Model"),
            "pumpModel": null
        },
        {
            "inputInstruction": `<p id="inputInstruction">Select pump model to begin pump run up.</p>`,
            "userInputEl": selectElBuilder("userInputEl", Object.keys(vacSpecs), "Pump Model"),
            "pumpModel": null
        },
    ]
}




//***************************************************//
//               FORM BUILDING FUNCTIONS             // 
//***************************************************//

selectElBuilder()




//***************************************************//
//                  GLOBAL VARIABLES                 // 
//***************************************************//

var bodyEl = document.getElementsByTagName('body')[0];




//***************************************************//
//                  ULTIMATE VACUUM SPECS            // 
//***************************************************//

var vacSpecs = {
    "iGX100L": [6.0, 6.0, "n/a"],
    "iGX100M": [17.3, 17.3, "on"],
    "iGX600L": [1.0, 1.0,"n/a"],
    "iGX600M": [1.7, 1.7, "on"],
    "iGX1000N": [1.0, 1.0, "on"],
    "iXL120": [12.9, 12.9, "n2 disconnected"],
    "iXH100": [51.8, 51.8, "on"],
    "iXH100HT": [112.0, 112.0, "on"],
    "iXH200H": [43.1, 43.1, "on"],
    "iXH610": [3.5, 3.5, "on"],
    "iXH1210": [3.5, 3.5, "on"],
    "iXH1220H": [7.8, 7.8, "on"],
    "iXH1220HTX": [8.6, 8.6, "on"],
    "iXH1820H": [7.8, 7.8, "on"],
    "iXH1820HTX": [8.6, 8.6, "on"],
    "iXH1820T MM96C": [8.6, 8.6, "on"],
    "iXH1820T Cold Booster": [4.3, 4.3, "on"],
    "iXH3030": [3.5, 3.5, "on"],
    "iXH3030T": [6.4, 6.4, "on"],
    "iXH3045H": [3.5, 3.5, "on"],
    "iXH3045H EUV": [130.0, 130.0, "on"],
    "iXH3045 ZMO": [3.4, 3.4, "on"],
    "iXH3050H": [4.3, 4.3, "on"],
    "iXH4550HT": [4.3, 4.3,"on"],
    "iXH6045H": [3.5, 3.5,"on"],
    "iXH6050H": [3.5, 3.5, "on"],
    "iXM1200": [8.6, 8.6, "on"],
    "iXM1800": [8.6, 8.6, "on"],
    "iXL1200": [16.1, 16.1, "on"],
    "iQ40": [25.9, "off"],
    "iQ40/250": [3.5, "off"],
    "iQ80": [25.9, "off"],
    "iQ80/250": [3.5, "off"],
    "iQ80/500": [3.5, "off"],
    "iQ80/1200": [3.5, "off"],
    "iL70": [17.3, "n/a"],
    "iL600": [1.7, "n/a"],
    "iH80": [8.6, "off"],
    "iH600": [1.3, "off"],
    "iH1000": [1.7, "off"],
    "iH1800": [2.6, "off"],
    "iH1800HTX": [2.6, "off"],
    "iF1800": [1.0, "off"]
}

var arrVacSpecKeys = Object.keys(vacSpecs);




function viewBuilder(viewType, sectionTitle) {

    // bodyEl.innerHTML = "";

    var viewEl = document.createElement('section');
    var inputInstruction = `<p id="inputInstruction">Select pump model to begin pump run up.</p>`;
    var userInputEl = `<select id="userInputEl"><option value=""></option>`;

    for (i = 0; arrVacSpecKeys.length > i; ++i) {
        userInputEl = userInputEl + `<option value="${arrVacSpecKeys[i]}">${arrVacSpecKeys[i]}</option>`;
    };

    userInputEl = userInputEl + "</select>";

    var inputName = '<p id="inputName">Pump Model</p>';
    var inputDivEl = `<div id="inputDivEl">${userInputEl} ${inputName}</div>`;

    viewEl.innerHTML = `<header id="${viewType}"><h3>${sectionTitle}</h3></header>` + inputInstruction + inputDivEl;

    bodyEl.appendChild(viewEl);

    var navElement = document.createElement('nav');
    navElement.innerHTML = `<div id="cancelButton">
                                <p>CANCEL</p>
                            </div>`;

    bodyEl.appendChild(navElement);

    var userInputEl = document.getElementById('userInputEl');
    var cancelButtonEl = document.getElementById('cancelButton');

    userInputEl.addEventListener("change", function() {
        console.log(userInputEl.value)
    });
    cancelButtonEl.addEventListener("click", function() {
        console.log("This shit was canceled!");
    });
};

viewBuilder("inputType", "PUMP INFORMATION");




//***************************************************//
//                  FINGERPRINTS                     // 
//***************************************************//

var fingerPrints = {
    "iXL120": {
        "Ultimate Vacuum": [12.9, 0],
        "Executive Software Version": []
    }
};