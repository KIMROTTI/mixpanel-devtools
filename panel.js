// DevTools Panel Connect to Background Script
const port = chrome.runtime.connect({ name: "mixpanel-devtools" });

port.postMessage({ type: "init" });

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "mixpanel_event") {
    const logContainer = document.getElementById("log-list");

    const detailsElement = document.createElement("details");

    const summaryElement = document.createElement("summary");
    summaryElement.textContent = `Event: ${message.data.event}`;

    const propertiesElement = document.createElement("div");
    propertiesElement.style.marginLeft = "20px";

    const properties = message.data.properties;
    for (const key in properties) {
      const propertyElement = document.createElement("p");
      propertyElement.textContent = `${key}: ${properties[key]}`;
      propertiesElement.appendChild(propertyElement);
    }

    detailsElement.appendChild(summaryElement);
    detailsElement.appendChild(propertiesElement);

    logContainer.appendChild(detailsElement);
  }
});
