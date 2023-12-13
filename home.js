let featuredItems = document.querySelector('#announcements .carousel-item')
let loginLink = document.querySelector('.navbar a.log-in');
let accountOptions = document.querySelector('.navbar .account-options');
let welcomeText = document.querySelector('.dropdown-item.welcome-text');

function toggleBookmark(event) {
    let bookmark = event.target.querySelector('svg');
    let path = bookmark.querySelector('path:last-of-type');

    console.log(bookmark.style.fill)
    console.log(path.style.stroke)
    bookmark.style.fill = bookmark.style.fill === "none" ? "rgb(28, 39, 77)" : "none";
    path.style.stroke = path.style.stroke === "rgb(28, 39, 77)" ? "white" : "rgb(28, 39, 77)";

}

function toggleLogin() {
    loginLink.classList.toggle("logged-in")
    accountOptions.classList.toggle("logged-in")
}

function logout() {
    toggleLogin()
    localStorage.clear()
    window.location.reload()
}

function checkLogin() {
    let user = localStorage.getItem("user")
    if (user != null) {
        toggleLogin()
        welcomeText.textContent = `Hi ${user}!`
    }
}


featuredItems.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = featuredItems[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});




