// const options={
//     bottom: '32px', // default: '32px'
//     right: '32px', // default: '32px'
//     left: 'unset', // default: 'unset'
//     time: '0.5s', // default: '0.3s'
//     mixColor: '#111', // default: '#fff'
//     backgroundColor: '#111',  // default: '#fff'
//     buttonColorDark: '#fff',  // default: '#100f2c'
//     buttonColorLight: '#ffffff', // default: '#fff'
//     saveInCookies: false, // default: true,
//     label: '🌓', // default: ''
//     autoMatchOsTheme: true // default: true
// }
// const darkmode = new Darkmode(options);
// darkmode.showWidget();



// function logochange()
// {
//     document.getElementById("mainlogo").src="https://www.designhill.com/tools/logo-maker";
// }

// const options={
//     saveInCookies: true, // default: true,
// }

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "/img/sun.png";
    }
    else{
        icon.src = "/img/moon.png";
    }
}