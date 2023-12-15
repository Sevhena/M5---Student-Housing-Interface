let featuredItems = document.querySelector("#announcements .carousel-item");
let loginLink = document.querySelector(".navbar a.log-in");
let accountOptions = document.querySelector(".navbar .account-options");
let welcomeText = document.querySelector(".dropdown-item.welcome-text");
let amenitiesHas = document.querySelectorAll(".amenities .has");
let amenitiesLacks = document.querySelectorAll(".amenities .lacks");
let sidebarToggler = document.querySelector('#sidebar-toggler');
let sidebar = document.querySelector('#sidebar');
let sidebarNav = document.querySelector('#sidebarNav');


// Create a condition that targets viewports at least 768px wide
// const mediaQueryLarge = window.matchMedia('(min-width: 1024px)');
// const mediaQuerySmall = window.matchMedia('(max-width: 1023px)');

// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (e.matches) {
//     sidebar.classList.remove("d-none")
//     sidebarNav.classList.remove("collapse", "navbar-collapse");
//     sidebarToggler.style.visibility = "hidden";
//   }
// }

// function handleMinimizeChange(e) {
//     // Check if the media query is true
//     if (e.matches) {
//       sidebar.classList.add("d-none");
//       sidebarNav.classList.add("collapse", "navbar-collapse");
//       sidebarToggler.style.visibility = "visible";
//     }
// }

// // Register event listener
// mediaQuerySmall.addListener(handleMinimizeChange)
// mediaQueryLarge.addListener(handleTabletChange)

// // Initial check
// handleMinimizeChange(mediaQuerySmall)
// handleTabletChange(mediaQueryLarge)

for (const amenity of amenitiesHas) {
  amenity.innerHTML += `
        <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="white" />
            <path
                d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7"
                stroke="#008000" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`;
}

for (const amenity of amenitiesLacks) {
    amenity.innerHTML += `
      <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8L16 16" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 8L8 16" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
  }


function toggleBookmark(event) {
  let bookmark = event.target.querySelector("svg");
  bookmark.classList.toggle("filled");
}

function toggleLogin() {
  loginLink.classList.toggle("logged-in");
  accountOptions.classList.toggle("logged-in");
}

function logout() {
  toggleLogin();
  localStorage.clear();
  window.location.reload();
}

function checkLogin() {
  let user = localStorage.getItem("user");
  if (user != null) {
    toggleLogin();
    welcomeText.textContent = `Hi ${user}!`;
  }
}

featuredItems.forEach((el) => {
  const minPerSlide = 3;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = featuredItems[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
