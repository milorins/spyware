let progress = 0;
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Function to update the progress bar and text
function updateProgress(newProgress) {
    if (progress < newProgress) {
        progress = newProgress;
        progressBar.style.width = progress + '%';
        progressText.innerText = progress + '% complete';
    }
}

// Function to display a sequence of alerts
function showPrankAlerts(alerts, index = 0) {
    if (index < alerts.length) {
        alert(alerts[index]);
        updateProgress(Math.min(100, (index + 1) * (100 / alerts.length))); // Increment progress
        showPrankAlerts(alerts, index + 1);
    } else {
        finalizeProgress();
    }
}

// Function to finalize progress and close the tab
function finalizeProgress() {
    if (progress < 100) {
        updateProgress(100);
    }

    setTimeout(function() {
        alert("Spyware Installation Complete... Closing Browser.");
        window.close();
    }, 500); // Short delay before closing the tab
}

// List of prank alerts to be shown
const prankAlerts = [
    "Hey there!",
    "You’ve made a huge mistake by clicking here.",
    "This page is secretly installing spyware on your device!",
    "The spyware is designed to collect all your personal data.",
    "It will capture everything: your passwords, messages, and browsing history!",
    "All this sensitive information is being sent to an unknown server!",
    "The installation process is well underway, and it's almost complete...",
    "You should have been more cautious and avoided this page.",
    "The spyware is almost fully installed, just a few more seconds to go...",
    "Once installed, it will continue to operate in the background without your knowledge.",
    "It may even track your location and take screenshots of your device.",
    "You might want to run a full security scan to ensure everything is fine.",
    "Just so you know, I'm not kidding."
];

// Start the prank after a short delay
setTimeout(function() {
    showPrankAlerts(prankAlerts);
}, 500); // Increased delay for better user experience