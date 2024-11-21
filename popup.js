document.getElementById("accept").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          files: ["content.js"],
        },
        () => {
          chrome.tabs.sendMessage(tabs[0].id, { action: "acceptConnections" }, (response) => {
            document.getElementById("status").innerText = 
              `Accepted ${response.accepted} connections.`;
          });
        }
      );
    });
  });
  