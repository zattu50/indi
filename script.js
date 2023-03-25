const menuIcon = document.querySelector('.menu-icon');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');
const menuItems = document.querySelectorAll('.side-menu li');

const dropdownLinks = document.querySelectorAll('.dropdown > a');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Toggle dropdown menu visibility and close others if open
function toggleDropdownMenu(event) {
  const dropdown = event.target.closest('.dropdown');
  if (dropdown) {
    event.preventDefault();
    for (let i = 0; i < dropdownMenus.length; i++) {
      if (dropdownMenus[i] !== dropdown.querySelector('.dropdown-menu')) {
        dropdownMenus[i].parentNode.classList.remove('show');
      }
    }
    dropdown.classList.toggle('show');
  }
}

// Add event listener to dropdown links
for (let i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener('click', toggleDropdownMenu);
}

// Close dropdown menu if click outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown') && document.querySelector('.dropdown.show')) {
    for (let i = 0; i < dropdownMenus.length; i++) {
      dropdownMenus[i].parentNode.classList.remove('show');
    }
  }
});



// Toggle side menu visibility
function toggleSideMenu() {
  sideMenu.classList.toggle('show');
}

// Hide side menu when clicked outside
function hideSideMenu(event) {
  if (event.target !== menuIcon && !menuIcon.contains(event.target) &&
      event.target !== sideMenu && !sideMenu.contains(event.target)) {
    closeSideMenu();
  }
}

// Close side menu
function closeSideMenu() {
  if (sideMenu.classList.contains('show')) {
    sideMenu.classList.remove('show');
  }
}

// Add event listeners
menuIcon.addEventListener('click', toggleSideMenu);
closeBtn.addEventListener('click', toggleSideMenu);
window.addEventListener('resize', () => {
  if (window.innerWidth >= 900) {
    closeSideMenu();
  }
});
document.addEventListener('click', hideSideMenu);

// Add animation delay to menu items
let delay = 0;
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].style.transitionDelay = `${delay}s`;
  delay += 0.051;
}
