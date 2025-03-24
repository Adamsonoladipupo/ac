// Function to detect device type (Mobile, Tablet, or Desktop)
function getDeviceType() {
    const userAgent = navigator.userAgent;
    // Check for mobile devices
    if (/Mobi|Android/i.test(userAgent)) {
        return 'Mobile';
    }
    // Check for tablets
    if (/Tablet|iPad/i.test(userAgent)) {
        return 'Tablet';
    }
    // Otherwise, assume it's a desktop
    return 'Desktop';
}

// Function to update the progress bar during page load
function updateProgressBar() {
    const progressBar = document.getElementById('progress_bar');
    const progressContainer = document.getElementById('progress_container');

    let lastProgress = 0;
    
    // Function to check the current loading progress
    function checkProgress() {
        const docReadyState = document.readyState;
        
        // When the document is loading, calculating the loading progress
        if (docReadyState === 'loading') {
            const progress = Math.min((performance.now() / 1000) * 10, 100); // Scale time-based progress
            if (progress > lastProgress) {
                lastProgress = progress;
                progressBar.style.width = progress + '%';
            }
        } else if (docReadyState === 'interactive' || docReadyState === 'complete') {
            progressBar.style.width = '100%';
            setTimeout(() => {
                progressContainer.style.display = 'none'; // Hide progress bar after a small delay
            }, 500); // Delay to allow the last update to be visible
        }
    }

    // Monitor progress every 50ms while the document is loading
    const interval = setInterval(checkProgress, 50);
    
    // Clear interval once loading is complete
    window.addEventListener('load', () => {
        clearInterval(interval); // Clear the progress interval when the page is fully loaded
        progressContainer.style.display = 'none'; // Hide the progress bar on complete load
    });
}

// Function to initialize and show the progress bar based on device type
function showProgressBarBasedOnDevice() {
    const deviceType = getDeviceType();
    
    // Only show the progress bar on Desktop and Tablet, hide it on Mobile
    if (deviceType === 'Desktop' || deviceType === 'Tablet') {
        document.getElementById('progress_container').style.display = 'block'; // Show progress bar
        updateProgressBar();
    } else {
        document.getElementById('progress_container').style.display = 'none'; // Hide progress bar on Mobile
    }
}

// Call the function when the page is loaded
window.onload = showProgressBarBasedOnDevice;
