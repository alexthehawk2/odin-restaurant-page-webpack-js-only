export function createNav(){
    const content = document.getElementById('content')
    const nav = document.createElement('nav')
    const div = document.createElement('div')
    content.appendChild(nav)
    nav.classList.add('nav-container')
    const navElements = document.querySelector('.nav-container')
    navElements.append(div)
    document.querySelector('.nav-container > div').classList.add('topnav','topnav-left')
    $('.nav-container').append('<div></div>')
    $('.nav-container').append('<div></div>')
    document.querySelectorAll('.nav-container > div')[1].classList.add('topnav', 'topnav-right')
    document.querySelectorAll('.nav-container > div')[2].classList.add('logo-img')

    $('.topnav-left').append('<a class="active" href="/dist/index.html">Home</a><a href="/dist/menu.html">Menu</a>')
    $('.topnav-right').append('<a href="/dist/index.html">Forno Di Pietra</a>')
    $('.logo-img').append('<a href="/dist/index.html"><img src="/src/restaurant.png" alt="" srcset=""></a>')
}

