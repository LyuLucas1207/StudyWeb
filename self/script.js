document.addEventListener("DOMContentLoaded", function() {
    // Simulate content loading time
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        const content = document.getElementById('content');
        
        // Hide the loading screen
        loadingScreen.style.display = 'none';
        
        // Show the content with animation
        content.classList.remove('hidden');
        content.classList.add('visible');
    }, 3000); // Adjust time as needed
});
