let loader = document.querySelector('.loader')

window.addEventListener('load', function (e) {
    this.setTimeout(function () {
        loader.style.display = "none"
    }, 1100)
})