// Select necessary elements
const menu = document.getElementById('menu');
const actionBar = document.querySelector('.actionbar');
const menuText = document.querySelectorAll('.menuText');
const menuBtn = document.getElementById('menuBtn');

// Function to toggle the menu and text visibility
function toggleMenu() {
    menu.classList.toggle('open');
    menuText.forEach(function(text, index) {
        setTimeout(() => {
            text.classList.toggle('open2');
        }, index * 50);
    });
}

// Automatically open the menu if screen width is less than 1152px
function checkScreenWidth() {
    if (window.innerWidth <= 1152) {
        openMenu();
    } else {
        closeMenu();
    }
}

// Function to open the menu
function openMenu() {
    menu.classList.add('open');
    menuText.forEach(function(text, index) {
        setTimeout(() => {
            text.classList.add('open2');
        }, index * 50);
    });
}

// Function to close the menu
function closeMenu() {
    menu.classList.remove('open');
    menuText.forEach(function(text, index) {
        setTimeout(() => {
            text.classList.remove('open2');
        }, index * 50);
    });
}

// Toggle menu when the menu button is clicked (for screens larger than 1152px)
menuBtn.addEventListener('click', () => {
    if (window.innerWidth > 1152) {
        toggleMenu();
    }
});

// Initial check on page load
checkScreenWidth();

// Handle resizing to ensure proper behavior
window.addEventListener('resize', checkScreenWidth);


// Dark/Light mode
const dayNight = document.querySelector('#themeChangeBtn');
dayNight.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'simple' : currentTheme === 'simple' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    localStorage.setItem('theme', newTheme);
    updateIcon();
    updateFavicon();
});

function themeMode() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon();
    updateFavicon();
}

function updateIcon() {
    const icon = dayNight.querySelector('i');
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon'; // Moon for dark theme
    } else if (theme === 'simple') {
        icon.className = 'fas fa-leaf'; // Leaf for simple theme
    } else {
        icon.className = 'fas fa-sun'; // Sun for light theme
    }
}

function updateFavicon() {
    const theme = document.documentElement.getAttribute('data-theme');
    const favicon = document.querySelector('link[rel="icon"]');
    let faviconPath;
    if (theme === 'dark') {
        faviconPath = 'images/dark-icon.png';
    } else if (theme === 'simple') {
        faviconPath = 'images/simple-icon.ico'; // Specific icon for simple theme
    } else {
        faviconPath = 'images/light-icon.png';
    }
    favicon.setAttribute('href', faviconPath);
}

// Initialize the theme on page load
themeMode();
