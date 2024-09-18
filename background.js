const mixpanelUrlPattern = "*://*.mixpanel.com/track/*";
let isActivated = false;

// Check if the DevTools panel is open
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "mixpanel-devtools" && !isActivated) {
    port.onMessage.addListener((msg) => {
      if (msg.type === "init") {
        isActivated = true;
        console.log("Mixpanel DevTools Activated");
      }
    });
  } else {
    console.log("Unexpected port name:", port.name);
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (details.method === "POST" && isActivated) {
      try {
        const eventArray = JSON.parse(details.requestBody.formData.data[0]);

        eventArray.forEach((event) => {
          chrome.runtime.sendMessage({
            type: "mixpanel_event",
            data: event,
          });
        });
      } catch (e) {
        console.log("err", e);
      }
    }
  },
  { urls: [mixpanelUrlPattern] },
  ["requestBody"]
);
