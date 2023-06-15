// all units are mm

//**********************************************************************************************************************
// Data
//**********************************************************************************************************************

// notes on image source: used image at link and used https://eleif.net/photomeasure with total height to measure pad radial height
const frontCalipers = {
    "94-98 V6 & GT" : {
        pistons: [
            66.0
        ],
        padHeight: 52.0,
        source: "image",
        // total height: 70.6
        // https://www.rockauto.com/en/moreinfo.php?pk=1627724&cc=1304480&pt=1684
    },
    "99-04 V6 & GT" : {
        pistons: [
            44.5,
            44.5
        ],
        padHeight: 52.0,
        source: "image",
        // total height: 60.4
        // https://www.bremboparts.com/asiapacific/en/catalogue/pad/P24082N
    },
    "00 Cobra R" : {
        pistons: [
            40.0,
            36.0
        ],
        padHeight: 52.0,
        source: "image",
        // total height: 69.3
        // https://www.rockauto.com/en/moreinfo.php?pk=1277806&cc=1434691&pt=1684
    },
    "93, 95 Cobra R, 94-01 Cobra" : {
        pistons: [
            38.0,
            38.0
        ],
        padHeight: 40.0,
        source: "image",
        // total height: 51.6
        // https://www.rockauto.com/en/moreinfo.php?pk=10475120&cc=1372643&pt=1684
    },
    "03-04 Cobra" : {
        pistons: [
            40.0,
            40.0
        ],
        padHeight: 40.0,
        source: "image",
        // total height: 52.0
        // total height https://www.rockauto.com/en/moreinfo.php?pk=11572953&cc=1410578&pt=1684
    },
    "Brembo F50" : {
        pistons: [
            44.0,
            40.0
        ],
        padHeight: 60.0,
        source: "spec",
    },
    "13-19 ATS" : {
        pistons: [
            42.0,
            42.0
        ],
        padHeight: 38.0,
        source: "image",
        // total height: 45.3
        // https://www.bremboparts.com/america/en/catalogue-us/pad/P09023N
    },
    "13-19 XTS" : {
        pistons: [
            42.0,
            42.0
        ],
        padHeight: 38.0,
        source: "forum",
        // same pad/piston as 13-19 ATS: https://stangnet.com/mustang-forums/threads/caddilac-xts-14-brembo-brakes-on-a-mustang.912555/
    },
    "Baer 6P" : {
        pistons: [
            41.0,
            35.0,
            31.0,
        ],
        padHeight: 46.0,
        source: "forum",
        // total height: 63
        // https://www.bremboparts.com/america/en/catalogue-us/pad/p10052n
    },
};
const frontRotors = {
    "94-04 V6 & GT": {
        diameter: 276.0,
        source: "spec",
    },
    "93-04 Cobra & Cobra R": {
        diameter: 330.0,
        source: "spec",
    },
    "07-12 GT500": {
        diameter: 355.0,
        source: "spec",
    },
    "FTBR 14\"": {
        diameter: 355.0,
        source: "spec",
    },
    "FTBR 14.5\"": {
        diameter: 368.0,
        source: "spec",
    },
    "Baer 13\"": {
        diameter: 330.0,
        source: "spec",
    },
    "Baer 14\"": {
        diameter: 355.0,
        source: "spec",
    },
};
const rearCalipers = {
    "94-04 Mustang" : {
        pistons: [
            38.0
        ],
        padHeight: 37.0,
        source: "spec",
    },
    "96-99 Taurus" : {
        pistons: [
            43.0
        ],
        padHeight: 37.0,
        source: "spec",
    },
};
const rearRotors = {
    "94-04 V6 & GT": {
        diameter: 267.0,
        source: "spec",
    },
    "93-04 Cobra & Cobra R": {
        diameter: 296.0,
        source: "spec",
    },
    "FTBR 13\"": {
        diameter: 330.0,
        source: "spec",
    },
    "13-14 GT500": {
        diameter: 350.0,
        source: "spec",
    },
};
const frontBrakes = [
    {
        caliper: "94-98 V6 & GT",
        rotor: "94-04 V6 & GT",
    },
    {
        caliper: "99-04 V6 & GT",
        rotor: "94-04 V6 & GT",
    },
    {
        caliper: "00 Cobra R",
        rotor: "93-04 Cobra & Cobra R",
    },
    {
        caliper: "93, 95 Cobra R, 94-01 Cobra",
        rotor: "93-04 Cobra & Cobra R",
    },
    {
        caliper: "03-04 Cobra",
        rotor: "93-04 Cobra & Cobra R",
    },
    {
        caliper: "Brembo F50",
        rotor: "07-12 GT500",
    },
    {
        caliper: "Brembo F50",
        rotor: "FTBR 14\"",
    },
    {
        caliper: "Brembo F50",
        rotor: "FTBR 14.5\"",
    },
    {
        caliper: "13-19 ATS",
        rotor: "93-04 Cobra & Cobra R",
    },
    {
        caliper: "13-19 XTS",
        rotor: "07-12 GT500",
    },
    {
        caliper: "Baer 6P",
        rotor: "Baer 13\"",
    },
    {
        caliper: "Baer 6P",
        rotor: "Baer 14\"",
    },
];
const rearBrakes = [
    {
        caliper: "94-04 Mustang",
        rotor: "94-04 V6 & GT"
    },
    {
        caliper: "94-04 Mustang",
        rotor: "93-04 Cobra & Cobra R"
    },
    {
        caliper: "94-04 Mustang",
        rotor: "FTBR 13\""
    },
    {
        caliper: "94-04 Mustang",
        rotor: "13-14 GT500"
    },
    {
        caliper: "96-99 Taurus",
        rotor: "94-04 V6 & GT"
    },
    {
        caliper: "96-99 Taurus",
        rotor: "93-04 Cobra & Cobra R"
    },
    {
        caliper: "96-99 Taurus",
        rotor: "FTBR 13\""
    },
    {
        caliper: "96-99 Taurus",
        rotor: "13-14 GT500"
    },
];

//**********************************************************************************************************************
// Post-process data
//**********************************************************************************************************************

// add names for convenience
function addNames(o) {
    for (let key in o) {
        o[key].name = key;
    }
}
addNames(frontCalipers);
addNames(frontRotors);
addNames(rearCalipers);
addNames(rearRotors);
// caliper functions
function addCaliperFunctions(o) {
    for (let key in o) {
        o[key].getPistonArea = function () {
            let area = 0;
            for (let piston of this.pistons) {
                area += Math.PI * (piston / 2.0) * (piston / 2.0);
            }
            return area;
        };
    }
}
addCaliperFunctions(frontCalipers);
addCaliperFunctions(rearCalipers);
// post-process brakes
function addBrakeFunctions(brakes, calipers, rotors) {
    for (let val of brakes) {
        val.caliper = calipers[val.caliper]; // replace string with object
        val.rotor = rotors[val.rotor]; // replace string with object
        val.getRotorEffectiveRadius = function () {
            return (this.rotor.diameter / 2.0) - (this.caliper.padHeight / 2.0);
        };
    }
}
addBrakeFunctions(frontBrakes, frontCalipers, frontRotors);
addBrakeFunctions(rearBrakes, rearCalipers, rearRotors);

//**********************************************************************************************************************
// Utility functions
//**********************************************************************************************************************

function getFrontBrakeBias(front, rear) {
    const frontForce = front.caliper.getPistonArea() * front.getRotorEffectiveRadius();
    const rearForce = rear.caliper.getPistonArea() * rear.getRotorEffectiveRadius();
    return frontForce / (frontForce + rearForce);
}

//**********************************************************************************************************************
// UI functions
//**********************************************************************************************************************

function createBrakeTds(brake) {
    const td_caliper = document.createElement("td");
    td_caliper.textContent = brake.caliper.name;

    const td_pistons = document.createElement("td");
    for (let piston of brake.caliper.pistons) {
        td_pistons.textContent += piston + ", ";
    }
    td_pistons.textContent = td_pistons.textContent.substr(0, td_pistons.textContent.length > 0 ? td_pistons.textContent.length - 2 : 0);

    const td_padHeight = document.createElement("td");
    td_padHeight.textContent = brake.caliper.padHeight;

    const td_dataSource = document.createElement("td");
    td_dataSource.textContent = brake.caliper.source;

    const td_rotor = document.createElement("td");
    td_rotor.textContent = brake.rotor.name;

    const td_diameter = document.createElement("td");
    td_diameter.textContent = brake.rotor.diameter;

    return [
        td_caliper,
        td_pistons,
        td_padHeight,
        td_dataSource,
        td_rotor,
        td_diameter
    ]
}

function createRearBrakesUI() {
    const tbody_rearBrakes = document.getElementById("rear-brakes");
    while (tbody_rearBrakes.firstChild) {
        tbody_rearBrakes.removeChild(tbody_rearBrakes.firstChild);
    }

    let frontBrake = frontBrakes[0];
    {
        const tbody_frontBrakes = document.getElementById("front-brakes");
        const tr_active = tbody_frontBrakes.getElementsByClassName("table-active");
        if (tr_active.length === 1) {
            frontBrake = frontBrakes[Number(tr_active[0].id)];
        }
    }

    let brakeBiases = [];
    rearBrakes.forEach(function (rearBrake) {
        brakeBiases.push({
            bias: getFrontBrakeBias(frontBrake, rearBrake),
            rearBrake: rearBrake,
            highlight: false
        });
    });
    brakeBiases.sort(function (a, b) {
        return a.bias - b.bias;
    });
    {
        const desiredBias = Number(document.getElementById("desired-bias").value) / 100.0;
        let closestFound = false;
        let closestDiff = 100.0;
        brakeBiases.forEach(function (brakeBias, index) {
            if (!closestFound) {
                let curDiff = Math.abs(brakeBias.bias - desiredBias);
                if (curDiff > closestDiff) { // prev was closest
                    closestFound = true;
                    if (index > 0) {
                        brakeBiases[index - 1].highlight = true;
                    }
                    let preDiff = 100.0;
                    if (index > 1) {
                        preDiff = Math.abs(brakeBiases[index - 2].bias - desiredBias);
                    }
                    if (preDiff < curDiff) {
                        brakeBiases[index - 2].highlight = true;
                    } else {
                        brakeBias.highlight = true;
                    }
                } else {
                    closestDiff = curDiff;
                }
            }
        });
        if (!closestFound) {
            if (brakeBiases.length > 0) {
                brakeBiases[brakeBiases.length - 1].highlight = true;
            }
            if (brakeBiases.length > 1) {
                brakeBiases[brakeBiases.length - 2].highlight = true;
            }
        }
    }

    brakeBiases.forEach(function (brakeBias, index) {

        const tr = document.createElement("tr");
        tr.id = index + "";
        if (brakeBias.highlight) {
            tr.classList.add("table-active");
        }
        {
            const td_bias = document.createElement("td");
            td_bias.textContent = (brakeBias.bias * 100.0).toFixed(1);

            tr.appendChild(td_bias);
            let tds = createBrakeTds(brakeBias.rearBrake);
            for (let td of tds) {
                tr.appendChild(td);
            }
        }
        tbody_rearBrakes.appendChild(tr);
    });
}

function createFrontBrakesUI() {
    const input_desiredBias = document.getElementById("desired-bias");
    input_desiredBias.oninput = function () {
        createRearBrakesUI();
    }
    
    const tbody_frontBrakes = document.getElementById("front-brakes");

    frontBrakes.forEach(function (frontBrake, index) {
        const tr = document.createElement("tr");
        tr.id = index + "";
        if (frontBrake.caliper.name === "00 Cobra R") {
            tr.classList.add("table-active");
        }
        tr.onclick = function () {
            const rows = tbody_frontBrakes.getElementsByTagName("tr");
            for (const row of rows) {
                row.classList.remove("table-active");
            }
            tr.classList.add("table-active");

            createRearBrakesUI();
        };
        let tds = createBrakeTds(frontBrake);
        for (let td of tds) {
            tr.appendChild(td);
        }
        tbody_frontBrakes.appendChild(tr);
    });
}

//**********************************************************************************************************************
// Create UI
//**********************************************************************************************************************

createFrontBrakesUI();
createRearBrakesUI();

