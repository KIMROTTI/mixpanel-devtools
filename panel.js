// DevTools 패널이 background.js와 연결 설정
const port = chrome.runtime.connect({ name: "mixpanel-devtools" });

// DevTools 패널이 초기화될 때 메시지 전송
port.postMessage({ type: "init" });

chrome.runtime.onMessage.addListener((message) => {
  console.log("Message received in DevTools:", message); // 메시지 수신 확인

  if (message.type === "mixpanel_event") {
    const logContainer = document.getElementById("log-container");
    const logElement = document.createElement("div");
    logElement.textContent = message.data.url;
    logContainer.appendChild(logElement);
  }
});
