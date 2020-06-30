
// On Scroll this function call to hidenavbar
var topNavbar = document.getElementById('primary-navbar');


window.onload = function () {
    var xOffsetLoad = window.innerWidth;
    var yOffset = window.pageYOffset;
    this.console.log(xOffsetLoad + ' <->' + yOffset)
    if (xOffsetLoad >= 992 && yOffset < 5) {
        topNavbar.style.display = 'block';

    } else if (xOffsetLoad < 992) {
        topNavbar.style.display = 'none';

        if (yOffset > 5) {
            document.getElementById('navbar-header').style.background = 'rgba(0,0,0,0.7)';
            document.getElementById('xs-navbar-brand').style.visibility = 'hidden';
        } else {
            document.getElementById('navbar-header').style.background = 'none';
            document.getElementById('xs-navbar-brand').style.visibility = 'visible';
        }
    }
}

window.onresize = function () {
    var xOffsetResize = window.innerWidth;
    var yOffsetResize = window.pageYOffset;
    if (xOffsetResize >= 992 && yOffsetResize < 5) {
        topNavbar.style.display = 'block';
    } else {
        topNavbar.style.display = 'none';
    }
}


window.onscroll = function () {
    var xOffset = window.innerWidth;
    var yOffset = window.pageYOffset;
    console.log('x ' + xOffset + 'y ' + yOffset)
    if (xOffset < 992) {
        topNavbar.style.display = 'none';

        if (yOffset > 5) {
            document.getElementById('navbar-header').style.background = 'rgba(0,0,0,0.7)';
            document.getElementById('xs-navbar-brand').style.visibility = 'hidden';
        } else {
            document.getElementById('navbar-header').style.background = 'none';
            document.getElementById('xs-navbar-brand').style.visibility = 'visible';
        }
    } else if (xOffset >= 992 && yOffset > 5) {
        document.getElementById('header_outer_area').style.marginTop = '40px';
        topNavbar.style.display = 'none';
    } else {
        // document.getElementById('header_outer_area').style.marginTop = '80px !important';
        topNavbar.style.display = 'block';
    }
}

var click = 0;
document.getElementById('navbar-toggle').onclick = () => {
    console.log('Button click')

    if (click == 0) {
        click = 1;
        document.getElementById('xs-navbar-brand').style.visibility = 'hidden';
    } else {
        click = 0;
        if (window.pageYOffset > 5) {
            document.getElementById('xs-navbar-brand').style.visibility = 'hidden';
        } else {
            document.getElementById('xs-navbar-brand').style.visibility = 'visible';
        }
    }
}