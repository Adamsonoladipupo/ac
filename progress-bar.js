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

        // Function to simulate the custom progress bar on page load
        function simulateProgress() {
            let width = 0;
            const progressBar = document.getElementById('progress_bar');
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    // Hide progress bar after loading completes
                    setTimeout(() => {
                        document.getElementById('progress_container').style.display = 'none';
                    }, 500); // Hide after a small delay
                } else {
                    width++;
                    progressBar.style.width = width + '%';
                }
            }, 50); // Progress every 50ms
        }

        // Function to initialize and show the progress bar if device is Desktop or Tablet
        function showProgressBarBasedOnDevice() {
            const deviceType = getDeviceType();
            
            // Only show the progress bar on Desktop and Tablet, hide it on Mobile
            if (deviceType === 'Desktop' || deviceType === 'Tablet') {
                document.getElementById('progress_container').style.display = 'block'; // Show progress bar
                simulateProgress();
            } else {
                document.getElementById('progress_container').style.display = 'none'; // Hide progress bar on Mobile
            }
        }

        // Call the function when the page is loaded
        window.onload = showProgressBarBasedOnDevice;