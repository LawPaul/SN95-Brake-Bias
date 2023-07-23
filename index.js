// all units are mm

//**********************************************************************************************************************
// Data
//**********************************************************************************************************************

// notes on image source: used image at link and used https://eleif.net/photomeasure with total height to measure pad radial height
// reference biases calculated by Maximum Motorsports: https://www.maximummotorsports.com/Assets/tech_info/brakes/MMHydroboostBias_805.jpg
const frontCalipers = {
    "94-98 V6 & GT" : {
        pistons: [
            66.0
        ],
        fmsi: "D600",
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
        fmsi: "D804",
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
        fmsi: "D1053",
        hawk: "HB194",
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
        fmsi: "D412",
        padHeight: 40.0,
        source: "image",
        // total height: 51.6
        // https://www.rockauto.com/en/moreinfo.php?pk=10475120&cc=1372643&pt=1684
    },
    "03-04 Cobra" : {
        pistons: [
            40.39,
            40.39
        ],
        fmsi: "D412",
        padHeight: 40.0,
        source: "image",
        // piston is 40.39: https://www.rockauto.com/en/moreinfo.php?pk=7204092&cc=1425035&pt=1704
        // total height: 52.0
        // total height https://www.rockauto.com/en/moreinfo.php?pk=11572953&cc=1410578&pt=1684
    },
    "94-04 Roush Alcon" : {
        pistons: [
            41.3,
            38.1,
        ],
        hawk: "HB105",
        padHeight: 49.0,
        source: "spec",
        // https://www.v6mustang.com/threads/14-roush-alcon-big-brake-set-up.264422/
        // padHeight: https://alconkits.com/support/brake-pad-info/122-saleen-roush-alcon-brake-pads
        // pistons:
        // https://www.saleenclubofamerica.com/SCOATech/1994-2004.htm
        // pns:
        // S351 RIGHT caliper # : CAR7450H21ASRT
        // S351 LEFT caliper # : CAR7450H21ASLT
        // XP8 RIGHT caliper # : CAR7450H28ASRT
        // XP8 LEFT caliper # : CAR7450H28ASLT
        // https://alconkits.com/support/alcon-reference-guides
        // H: 38.1/41.3
    },
    "94-02 Saleen Alcon" : {
        pistons: [
            41.3,
            38.1,
        ],
        hawk: "HB105",
        padHeight: 49.0,
        source: "spec",
        // https://www.v6mustang.com/threads/14-roush-alcon-big-brake-set-up.264422/
        // padHeight: https://alconkits.com/support/brake-pad-info/122-saleen-roush-alcon-brake-pads
        // pistons:
        // https://www.saleenclubofamerica.com/SCOATech/1994-2004.htm
        // pns:
        // S351 RIGHT caliper # : CAR7450H21ASRT
        // S351 LEFT caliper # : CAR7450H21ASLT
        // XP8 RIGHT caliper # : CAR7450H28ASRT
        // XP8 LEFT caliper # : CAR7450H28ASLT
        // https://alconkits.com/support/alcon-reference-guides
        // H: 38.1/41.3
    },
    "00-01 Saleen AP Racing" : { // TODO: not added, do not know piston sizes
        pistons: [
            40.0,
            40.0,
        ],
        hawk: "HB110", // also HB102, HB109
        padHeight: 50.3,
        source: "spec",
        // https://www.saleenclubofamerica.com/SCOATech/1994-2004.htm
        // https://www.ferodoracing.com/ecat/code-compound/car-racing/brake-pads/FRP216H
        // unknown piston sizes
        // went with 13" rotor
    },
    "01-04 Saleen Brembo" : {
        pistons: [
            40.0,
            36.0
        ],
        fmsi: "D1053",
        hawk: "HB194",
        padHeight: 52.0,
        source: "image",
        // same as 00 Cobra R (unsure of piston size)
    },
    "01-04 Saleen Extreme Brembo" : {
        pistons: [
            44.0,
            40.0
        ],
        fmsi: "D810",
        hawk: "HB193",
        padHeight: 51.7,
        source: "spec",
        // same as F40/F50 (unsure of piston size)
    },
    "05-09 Mustang GT" : {
        pistons: [
            43.0,
            43.0
        ],
        fmsi: "D1081",
        padHeight: 46.0,
        source: "spec",
        // caliper rebuild kit with bore: https://www.rockauto.com/en/moreinfo.php?pk=8920076&cc=1431310&pt=1720&jsn=10606
        // caliper with bore: https://www.rockauto.com/en/moreinfo.php?pk=1153038&cc=1431310&pt=1704&jsn=10876&jsn=10876
        // total height: 54.0
        // https://www.hawkperformance.com/pads/hb484b-670
        // spec: https://www.ferodoracing.com/ecat/code-compound/car-racing/brake-pads/FRP3129H
    },
    "07-12 GT500" : {
        pistons: [
            44.0,
            40.0
        ],
        fmsi: "D1001",
        padHeight: 60.0,
        source: "spec",
        // caliper: https://www.rockauto.com/en/moreinfo.php?pk=8920084&cc=1433450&pt=1720&jsn=11024&jsn=11024
    },
    "Brembo F50" : {
        pistons: [
            44.0,
            40.0
        ],
        fmsi: "D810",
        hawk: "HB193",
        padHeight: 51.7,
        source: "spec",
        // match caliper to pad: https://www.zeckhausen.com/catalog/index.php?cPath=82_85
        // FERODO brake pads: https://www.ferodoracing.com/ecat/code/car-racing/brake-pads/FCP1281
    },
    "Brembo F40" : {
        pistons: [
            44.0,
            38.0
        ],
        fmsi: "D810",
        hawk: "HB193",
        padHeight: 51.7,
        source: "spec",
        // same as F50 except piston
    },
    "92-02 Viper" : {
        pistons: [
            44.0,
            40.0
        ],
        fmsi: "D1053",
        hawk: "HB194",
        padHeight: 52.0,
        source: "image",
        // same as 00 Cobra R with larger pistons
    },
    "13-19 ATS" : {
        pistons: [
            42.0,
            42.0
        ],
        fmsi: "D1001",
        padHeight: 60.0,
        source: "spec",
    },
    "13-19 XTS" : {
        pistons: [
            42.0,
            42.0
        ],
        fmsi: "D1001",
        padHeight: 60.0,
        source: "image",
        // piston seals o-ring inside diameter is 42mm: https://www.rockauto.com/en/moreinfo.php?pk=4728213&cc=1505662&pt=14387&jsn=10711
        // same pad/piston as 13-19 ATS: https://stangnet.com/mustang-forums/threads/caddilac-xts-14-brembo-brakes-on-a-mustang.912555/
    },
    "09-14 CTS-V" : {
        pistons: [
            38.0,
            34.0,
            30.0
        ],
        fmsi: "D1405",
        padHeight: 64.7,
        source: "spec",
        // pistons: https://racingbrake.com/bc-61bs/
        // pad: https://www.brembostoreusa.com/product/disc-brake-pad-set/P37018
    },
    "StopTech ST-40 13\"" : {
        pistons: [
            38.0,
            34.0,
        ],
        fmsi: "D372",
        hawk: "HB141",
        padHeight: 48.0,
        source: "image",
        // pad: https://www.pegasusautoracing.com/images/L/HB141.JPG
    },
    "StopTech ST-40 14\"" : {
        pistons: [
            42.0,
            38.0,
        ],
        fmsi: "D372",
        hawk: "HB141",
        padHeight: 48.0,
        source: "image",
        // pad: https://www.pegasusautoracing.com/images/L/HB141.JPG
    },
    "Baer 6P" : {
        pistons: [
            41.0,
            35.0,
            31.0,
        ],
        fmsi: "D731",
        padHeight: 46.0,
        source: "forum",
        // total height: 63
        // https://www.bremboparts.com/america/en/catalogue-us/pad/p10052n
    },
    "Wilwood AERO6" : {
        pistons: [
            41.148,
            28.448,
            28.448,
        ],
        hawk: "HB800",
        wilwood: "6617",
        padHeight: 48.0,
        source: "image",
        // https://www.wilwood.com/BrakeKits/BrakeKitsProdFront?itemno=140-16403-DR&year=2003&make=Ford&model=Mustang&option=Cobra
        // total height: 72.9
        // https://www.wilwood.com/BrakePads/BrakePadsList?padtype=6617
    },
    "Wilwood Superlite 6R" : {
        pistons: [
            41.148,
            28.448,
            28.448,
        ],
        hawk: "HB521",
        wilwood: "7416",
        padHeight: 42.0,
        source: "image",
        // https://www.wilwood.com/BrakeKits/BrakeKitsProdFront?itemno=140-9117-DR&year=2003&make=Ford&model=Mustang&option=Cobra
        // total height: 61.7
        // https://www.wilwood.com/BrakePads/BrakePadsList?padtype=7416
    },
    "Wilwood Superlite 4R" : {
        pistons: [
            47.752,
            41.148
        ],
        hawk: "HB521",
        wilwood: "7420",
        padHeight: 42.0,
        source: "image",
        // https://www.wilwood.com/BrakeKits/BrakeKitsProdFront?itemno=140-14113&year=2003&make=Ford&model=Mustang&option=Cobra
        // total height: 61.7
        // https://www.wilwood.com/BrakePads/BrakePadsList?padtype=7420
    },
    "Wilwood Dynapro" : {
        pistons: [
            44.45,
            44.45
        ],
        hawk: "HB542",
        wilwood: "7812",
        padHeight: 42.0,
        source: "image",
        // https://www.wilwood.com/BrakeKits/BrakeKitsProdFront?itemno=140-10015-D&year=2003&make=Ford&model=Mustang&option=Cobra
        // total height: 56.0
        // https://www.wilwood.com/BrakePads/BrakePadsList?padtype=7812
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
    "Saleen/Alcon": {
        diameter: 330.0,
        source: "spec",
        // DIV2148X007GL DIV2148X007GR
    },
    "07-12 GT500": {
        diameter: 355.0,
        source: "spec",
    },
    "Roush/Alcon": {
        diameter: 355.0,
        source: "spec",
    },
    "Brembo GT 330": {
        diameter: 330.0,
        source: "spec"
    },
    "Brembo GT 332": {
        diameter: 332.0,
        source: "spec"
    },
    "Brembo GT": {
        diameter: 355.0,
        source: "spec"
    },
    "StopTech AeroRotor 13\"": {
        diameter: 332.0,
        source: "spec"
    },
    "StopTech AeroRotor 14\"": {
        diameter: 355.0,
        source: "spec"
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
    "Wilwood 14\"": {
        diameter: 355.0,
        source: "spec",
    },
    "Wilwood 12.88\"": {
        diameter: 327.0,
        source: "spec",
    },
    "Wilwood 12.19\"": {
        diameter: 310.0,
        source: "spec",
    },
    "Wilwood 11.75\"": {
        diameter: 298.0,
        source: "spec",
    },
};
const rearCalipers = {
    "94-04 Mustang" : {
        pistons: [
            38.1254
        ],
        screwArea: 59.0, // Jack Hidley of Maximum Motorsports: https://www.corral.net/threads/installing-ats-brembos-on-the-2003-cobra.2492810/post-18600836
        fmsi: "D627",
        padHeight: 37.0,
        source: "spec",
        // piston size:
        // labeled 38, spec is 38.1254
    },
    "96-99 Taurus" : {
        pistons: [
            42.7736
        ],
        screwArea: 59.0,
        fmsi: "D627",
        padHeight: 37.0,
        source: "spec",
        // piston size: https://www.rockauto.com/en/moreinfo.php?pk=859339&jsn=3
        // labeled 43, spec is 42.7736: https://www.corral.net/threads/installing-ats-brembos-on-the-2003-cobra.2492810/post-18599732
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
    "Baer EradiSpeed1 13.25\"": {
        diameter: 336.55,
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
        caliper: "94-02 Saleen Alcon",
        rotor: "Saleen/Alcon",
    },
    {
        caliper: "94-04 Roush Alcon",
        rotor: "Roush/Alcon",
    },
    {
        caliper: "01-04 Saleen Brembo",
        rotor: "93-04 Cobra & Cobra R",
    },
    {
        caliper: "01-04 Saleen Extreme Brembo",
        rotor: "Brembo GT",
    },
    {
        caliper: "05-09 Mustang GT",
        rotor: "07-12 GT500",
    },
    {
        caliper: "07-12 GT500",
        rotor: "07-12 GT500",
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
        caliper: "92-02 Viper",
        rotor: "93-04 Cobra & Cobra R",
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
        caliper: "09-14 CTS-V",
        rotor: "07-12 GT500",
    },
    {
        caliper: "StopTech ST-40 13\"",
        rotor: "StopTech AeroRotor 13\"",
    },
    {
        caliper: "StopTech ST-40 14\"",
        rotor: "StopTech AeroRotor 14\"",
    },
    {
        caliper: "Baer 6P",
        rotor: "Baer 13\"",
    },
    {
        caliper: "Baer 6P",
        rotor: "Baer 14\"",
    },
    {
        caliper: "Wilwood AERO6",
        rotor: "Wilwood 14\"",
    },
    {
        caliper: "Wilwood Superlite 6R",
        rotor: "Wilwood 14\"",
    },
    {
        caliper: "Wilwood Superlite 6R",
        rotor: "Wilwood 12.88\"",
    },
    {
        caliper: "Wilwood Superlite 4R",
        rotor: "Wilwood 12.88\"",
    },
    {
        caliper: "Wilwood Superlite 4R",
        rotor: "Wilwood 12.19\"",
    },
    {
        caliper: "Wilwood Dynapro",
        rotor: "Wilwood 11.75\"",
    },
];
const rearBrakes = [
    {
        caliper: "94-04 Mustang",
        rotor: "94-04 V6 & GT",
        sra: true,
        irs: false,
    },
    {
        caliper: "94-04 Mustang",
        rotor: "93-04 Cobra & Cobra R",
        sra: true,
        irs: true,
    },
    {
        caliper: "94-04 Mustang",
        rotor: "FTBR 13\"",
        sra: true,
        irs: true,
    },
    {
        caliper: "94-04 Mustang",
        rotor: "Baer EradiSpeed1 13.25\"",
        sra: true,
        irs: false,
    },
    {
        caliper: "94-04 Mustang",
        rotor: "13-14 GT500",
        sra: true,
        irs: true,
    },
    {
        caliper: "96-99 Taurus",
        rotor: "94-04 V6 & GT",
        sra: true,
        irs: false,
    },
    {
        caliper: "96-99 Taurus",
        rotor: "93-04 Cobra & Cobra R",
        sra: true,
        irs: true,
    },
    {
        caliper: "96-99 Taurus",
        rotor: "Baer EradiSpeed1 13.25\"",
        sra: true,
        irs: false,
    },
    {
        caliper: "96-99 Taurus",
        rotor: "FTBR 13\"",
        sra: true,
        irs: true,
    },
    {
        caliper: "96-99 Taurus",
        rotor: "13-14 GT500",
        sra: true,
        irs: true,
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
            if ("screwArea" in this) {
                area -= this.screwArea;
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
        td_pistons.textContent += (Number.isInteger(piston) ? piston : (Math.round(piston * 10.0) / 10.0).toFixed(1)) + ", ";
    }
    td_pistons.textContent = td_pistons.textContent.substr(0, td_pistons.textContent.length > 0 ? td_pistons.textContent.length - 2 : 0);

    const td_padHeight = document.createElement("td");
    td_padHeight.textContent = brake.caliper.padHeight;

    //const td_dataSource = document.createElement("td");
    //td_dataSource.textContent = brake.caliper.source;

    const td_rotor = document.createElement("td");
    td_rotor.textContent = brake.rotor.name;

    const td_diameter = document.createElement("td");
    td_diameter.textContent = brake.rotor.diameter;

    return [
        td_caliper,
        td_pistons,
        td_padHeight,
        td_rotor,
        td_diameter
    ]
}

function createRearBrakesUI() {
    const tbody_rearBrakes = document.getElementById("rear-brakes");
    while (tbody_rearBrakes.firstChild) {
        tbody_rearBrakes.removeChild(tbody_rearBrakes.firstChild);
    }
    const rearType = document.querySelector('input[name="rear-type"]:checked').value;

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
        if (rearBrake[rearType]) {
            brakeBiases.push({
                bias: getFrontBrakeBias(frontBrake, rearBrake),
                rearBrake: rearBrake,
                highlight: false
            });
        }
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
            td_bias.textContent = (Math.round((brakeBias.bias * 100.0) * 10.0) / 10.0).toFixed(1);

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
    // desired bias change
    const input_desiredBias = document.getElementById("desired-bias");
    input_desiredBias.oninput = function () {
        createRearBrakesUI();
    }
    // rear type change
    const input_sra = document.getElementById("sra");
    input_sra.oninput = function () {
        createRearBrakesUI();
    }
    const input_irs = document.getElementById("irs");
    input_irs.oninput = function () {
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

