fetch("./data.json").then(res => res.json()).then(json => buildGraph(json));

const selectedDay = "wed";

function buildGraph(jsonArray) {
    let maximum = 0;
    for (i = 0; i < jsonArray.length; i++) {
        if (jsonArray[i].amount > maximum)
            maximum = jsonArray[i].amount;
    }

    const graphElement = document.querySelector(".graph");
    for (i = 0; i < jsonArray.length; i++) {
        buildBar(graphElement, jsonArray[i].amount, jsonArray[i].day, maximum);
    }
}

function buildBar(graph, amount, day, max) {
    
    const barWrapper = document.createElement("div");
    barWrapper.classList.add("bar-wrapper", "flex-col");
    
    const bar = document.createElement("div");
    bar.classList.add("bar");
    height = amount / max * 100;
    bar.style.height = height + "%";
    const barTotal = document.createElement("div");
    barTotal.classList.add("bar-total");
    barTotal.textContent = "$" + amount;
    bar.appendChild(barTotal);
    barWrapper.appendChild(bar);
    
    const dayLabel = document.createElement("span");
    dayLabel.textContent = day;
    barWrapper.appendChild(dayLabel);

    if (day === selectedDay) {
        bar.classList.add("today");
    }

    graph.appendChild(barWrapper);
}