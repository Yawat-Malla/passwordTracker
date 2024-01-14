// popup.js
function onDOMContentLoaded() {
    document.getElementById('saveCredentials').addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'saveCredentials' });
        });
    });

    chrome.storage.sync.get({ credentials: [] }, function(data) {
        const savedCredentialsDiv = document.getElementById('savedCredentials');
        savedCredentialsDiv.innerHTML = '<h3>Saved Credentials:</h3>';
        
        if (data.credentials.length === 0) {
            savedCredentialsDiv.innerHTML += '<p>No credentials saved.</p>';
        } else {
            data.credentials.forEach(function(credential) {
                savedCredentialsDiv.innerHTML += `<p>URL: ${credential.url}<br>Username: ${credential.username}<br>Password: ${credential.password}</p>`;
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
