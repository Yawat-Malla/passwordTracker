// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'saveCredentials') {
      const username = prompt('Enter your username:');
      const password = prompt('Enter your password:');
  
      chrome.storage.sync.get({ credentials: [] }, function(data) {
        data.credentials.push({ url: window.location.href, username, password });
        chrome.storage.sync.set({ credentials: data.credentials }, function() {
          alert('Credentials saved!');
        });
      });
    }
  });
  