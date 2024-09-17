// Mixpanel로 전송되는 이벤트를 감지하는 URL 패턴
const mixpanelUrlPattern = "*://*.mixpanel.com/track/*";
let isActivated = false;

// DevTools 패널이 background.js와 연결 체크
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

// 네트워크 요청을 감시하고 이벤트 데이터를 DevTools로 전송
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (details.method === "POST" && isActivated) {
      console.log("details", details);
      try {
        chrome.runtime.sendMessage({
          type: "mixpanel_event",
          data: details,
        });
      } catch (e) {
        console.log("err", e);
      }
    }
  },
  { urls: [mixpanelUrlPattern] }
);
