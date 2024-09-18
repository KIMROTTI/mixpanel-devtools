chrome.devtools.panels.create(
  "Mixpanel Devtools",
  "", // Icon path
  "panel.html",
  function (panel) {
    console.log("Mixpanel Logger Panel Created");
  }
);
