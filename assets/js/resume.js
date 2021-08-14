window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    document.querySelector('body').style.transition = "opacity 1.7s";
    setTimeout(function() { 
        window.location.href = href
    }, 400)
}
