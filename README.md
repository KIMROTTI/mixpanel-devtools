

![image](https://raw.githubusercontent.com/KIMROTTI/mixpanel-devtools/main/public/mipanel-background.png)
# mixpanel-devtools
Do you use Mixpanel and have you ever had to go to your website multiple times to check your logs? Mixpanel Devtools makes it easy.

Mixpanel Devtools enables developers to easily detect and debug Mixpanel events directly from the client side. It provides real-time visibility into the events being sent to Mixpanel, allowing for efficient tracking and verification. With this tool, users can monitor event details, ensuring accurate implementation and helping to troubleshoot issues, all within the Chrome DevTools interface.


```javascript
manifest.json
  ├── background.js (Service Worker)
  │     └── Mixpanel HTTP Request Interception
  │          └── Message to panel.js
  │
  ├── devtools.html
  │     └── devtools.js (DevTools UI Interaction)
  │
  ├── panel.html
        └── panel.js (Receives Message from background.js)
             └── Creates log-list in panel.html
```


***Mixpanel Devtools is made by a personal developer, please let us know if you have any issues***

email : [kimrotti6239@gmail.com](mailto:kimrotti6239@gmail.com)
