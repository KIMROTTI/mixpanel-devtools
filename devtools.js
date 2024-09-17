chrome.devtools.panels.create(
  "Mixpanel Devtools", // 패널 이름
  "", // 아이콘 경로 (선택사항)
  "panel.html", // 패널에 표시할 HTML 파일
  function (panel) {
    console.log("Mixpanel Logger Panel Created");
  }
);
