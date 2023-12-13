let featuredItems = document.querySelector('#announcements .carousel-item')
let loginLink = document.querySelector('.navbar a.log-in');
let accountOptions = document.querySelector('.navbar .account-options');
let welcomeText = document.querySelector('.dropdown-item.welcome-text');
let logoutBtn = document.querySelector('.dropdown-item.logout')
let email = document.querySelector('#email-input')

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




