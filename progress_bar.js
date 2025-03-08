// Progress Bar
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        let progressBar = document.getElementById('progress-bar').firstElementChild;
        let width = 0;
        let interval = setInterval(function () {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = width + '%';
            }
        }, 10);
    } else if (document.readyState === "complete") {
        document.getElementById('progress-bar').style.display = 'none';
    }
};
