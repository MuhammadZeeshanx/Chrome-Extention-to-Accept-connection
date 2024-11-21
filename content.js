// Accept all pending LinkedIn connection requests
function acceptConnections() {
    const buttons = document.querySelectorAll('button'); // Find all buttons
    let count = 0;
  
    buttons.forEach((button) => {
      if (button.innerText.includes("Accept")) { // Look for "Accept" buttons
        button.click(); // Click the button
        count++;
      }
    });
  
    return count;
  }
  
  // Message listener to trigger connection acceptance
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "acceptConnections") {
      const acceptedCount = acceptConnections();
      sendResponse({ accepted: acceptedCount });
    }
  });
  