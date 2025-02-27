import './App.css'

let potentialYap = ["Is that a Golden-Cheeked Warbler?", "We ❤️ Planet Earth.", "Mr. Walker called. Said you messed up.", "How many Northern Cardinals were there?", "Gus Fruh? Daring today, aren't we?", "Find any Mallards?", "You double-counted there, bud.", "Did you fake your data? It's OK, I'm just a description. I can't stop you.", "Is this.. good data? Impossible!", "See any dogs on your transect?", "Did you walk too fast again? :(", "Sponsored by Golden Cheeked Warbler & Co", "One time, I found a Black Capped Vireo at the bottom of the creek. Where it belongs.", "Canyon Wrens are pretty rare.", "The Merlin app is pretty dang useful."]
let transectLength = getCookie("transectLength") || 1

function App() {
    return (
        <>
            <div>
                <div className="Table">
                    <div className="VStack">
                        <div className="HStack">
                            <div className="TableCell"></div>
                            <div className="TableCell">0-5</div>
                            <div className="TableCell">5-10</div>
                            <div className="TableCell">10-15</div>
                            <div className="TableCell">15-20</div>
                            <div className="TableCell">20-25</div>
                            <div className="TableCell">25-30</div>
                            <div className="TableCell">30-35</div>
                            <div className="TableCell">35-65</div>
                            <div className="TableCell">65-95</div>
                            <div className="TableCell">95-125</div>
                            <div className="TableCell">Total</div>
                        </div>
                        <div className="HStack">
                            <div className="TableCell">Song</div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s1" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s2" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s3" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s4" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s5" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s6" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s7" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s8" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s9" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="s10" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="r1" defaultValue="" readOnly/></div>
                        </div>
                        <div className="HStack">
                            <div className="TableCell">Call</div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca1" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca2" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca3" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca4" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca5" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca6" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca7" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca8" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca9" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="ca10" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="r2" defaultValue="" readOnly/></div>
                        </div>
                        <div className="HStack">
                            <div className="TableCell">Vision</div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v1" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v2" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v3" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v4" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v5" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v6" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v7" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v8" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v9" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdInputBox" id="v10" defaultValue="0"/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="r3" defaultValue="" readOnly/></div>
                        </div>
                        <div className="HStack">
                            <div className="TableCell">Total</div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c1" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c2" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c3" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c4" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c5" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c6" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c7" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c8" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c9" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="c10" defaultValue="" readOnly/></div>
                            <div className="TableCell"><input type="number" min="0" className="BirdTotalBox" id="t" defaultValue="" readOnly/></div>
                        </div>
                    </div>
                </div>
                <button className="BigBlueButton" onClick={analyze}>Analyze</button>
                <div className="Output">
                    <p className="Yap"><i>Press the Analyze button to generate an output. Remember to set your transect length at the bottom!</i></p>
                    <div className="Divider" />
                    <h2>Output</h2>
                    <p id="fds"><b>Full Detection Strip (FDS): </b></p>
                    <p id="bird-fds"><b>Number of Birds in FDS: </b></p>
                    <p id="pe"><b>Population Estimate (PE): </b></p>
                    <p id="cd"><b>Coefficient of Detectability (CD): </b></p>
                    <div className="Divider" />
                    <h2>Transect Info</h2>
                    <div>
                        <p>Transect length (km): </p>
                        <input type="number" min="0.8" max="1.2" defaultValue={transectLength} className="transectLength" step="0.05" />
                    </div>
                    <p className="faded">Made with ❤️ by Colin DiCarlo, and open source on <a href="https://github.com/blortle-dev/bird-analyzer">GitHub</a>.</p>

                </div>
            </div>
        </>
    )
}

function get(id) {
    return parseInt(document.querySelector(id).value) || 0;
}

function analyze() {
    document.cookie = `transectLength=${document.querySelector(".transectLength").value}; expires=Tue, 19 Jan 2038 04:14:07 GMT`
    document.querySelector(".BigBlueButton").innerText = "Analysis Complete! 🎉 - Press again to re-analyze."
    //document.querySelector(".BigBlueButton").disabled = true
    document.querySelector(".BigBlueButton").style.backgroundColor = "#259a29"
    document.querySelector(".Yap").innerHTML = `<i>${pickLine()}</i>`
    //> TOTAL SETTERS
    // ROWS
    document.querySelector("#r1").value = get("#s1") + get("#s2") + get("#s3") + get("#s4") + get("#s5") + get("#s6") + get("#s7") + get("#s8") + get("#s9") + get("#s10");
    document.querySelector("#r2").value = get("#ca1") + get("#ca2") + get("#ca3") + get("#ca4") + get("#ca5") + get("#ca6") + get("#ca7") + get("#ca8") + get("#ca9") + get("#ca10");
    document.querySelector("#r3").value = get("#v1") + get("#v2") + get("#v3") + get("#v4") + get("#v5") + get("#v6") + get("#v7") + get("#v8") + get("#v9") + get("#v10");
    // COLUMNS
    document.querySelector("#c1").value = get("#s1") + get("#ca1") + get("#v1");
    document.querySelector("#c2").value = get("#s2") + get("#ca2") + get("#v2");
    document.querySelector("#c3").value = get("#s3") + get("#ca3") + get("#v3");
    document.querySelector("#c4").value = get("#s4") + get("#ca4") + get("#v4");
    document.querySelector("#c5").value = get("#s5") + get("#ca5") + get("#v5");
    document.querySelector("#c6").value = get("#s6") + get("#ca6") + get("#v6");
    document.querySelector("#c7").value = get("#s7") + get("#ca7") + get("#v7");
    document.querySelector("#c8").value = get("#s8") + get("#ca8") + get("#v8");
    document.querySelector("#c9").value = get("#s9") + get("#ca9") + get("#v9");
    document.querySelector("#c10").value = get("#s10") + get("#ca10") + get("#v10");
    // TOTAL
    document.querySelector("#t").value = get("#r1") + get("#r2") + get("#r3");
    //> END SETTERS
    document.querySelector("#fds").innerHTML = `<b>Full Detection Strip (FDS): </b>${getFDS()} meters`;
    document.querySelector("#bird-fds").innerHTML = `<b>Number of Birds in FDS: </b>${sumBirdCountsInFDS()} birds`;
    document.querySelector("#pe").innerHTML = `<b>Population Estimate (PE): </b>${findPopulationEstimate()} birds/hectare`;
    document.querySelector("#cd").innerHTML = `<b>Coefficient of Detectability (CD): </b>${findCD()}`;
}

function getFDS() {
    const meterCounts = [5, 10, 15, 20, 25, 30, 35, 65, 95, 125];
    const totals = [];

    for (let i = 1; i <= 10; i++) {
        totals.push(get(`#c${i}`));
    }

    let average = totals[0];

    for (let i = 1; i < totals.length; i++) {
        const newAverage = (average * i + totals[i]) / (i + 1);
        if (totals[i] < average * 0.8) {
            return meterCounts[i - 1];
        }
        average = newAverage;
    }

    return meterCounts[meterCounts.length - 1];
}

function sumBirdCountsInFDS() {
    const fds = getFDS();
    const meterCounts = [5, 10, 15, 20, 25, 30, 35, 65, 95, 125];
    let sum = 0;

    for (let i = 0; i < meterCounts.length; i++) {
        if (meterCounts[i] <= fds) {
            sum += get(`#c${i + 1}`);
        } else {
            break;
        }
    }

    return sum;
}

function findPopulationEstimate() {
    const fullDetectionWidth = getFDS();
    const sumDetections = sumBirdCountsInFDS();

    const transectWidth = 125; // 125 meters
    const transectLength = parseFloat(document.querySelector(".transectLength").value);
    const transectAreaHectares = (transectWidth * 2 * transectLength * 1000) / 10000.0; // Convert to hectares
    const populationEstimate = (transectWidth / fullDetectionWidth) * (sumDetections / transectAreaHectares);

    return populationEstimate.toFixed(2);
}

function findCD() {
    try {
        const sumAllDetections = get("#r1") + get("#r2") + get("#r3");

        const fullDetectionWidth = getFDS();
        let sumDetections = 0;

        for (let i = 0; i < fullDetectionWidth / 5; i++) {
            sumDetections += get(`#s${i + 1}`) + get(`#ca${i + 1}`) + get(`#v${i + 1}`);
        }

        const transectWidth = 125; // 125 meters
        const populationEstimateWithoutArea = (transectWidth / fullDetectionWidth) * sumDetections;
        const coefficientOfDetectability = sumAllDetections / populationEstimateWithoutArea;

        return coefficientOfDetectability.toFixed(2);
    } catch {
        return "0.00";
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function pickLine() {
    let index = Math.floor(Math.random() * potentialYap.length)
    return potentialYap[index]
}

export default App