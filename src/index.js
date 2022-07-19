import './style.css';
import { createNav } from './nav';
import {mainContent} from './main-content'
import {footer} from './footer'
import { menu } from './menu';
import { menuCss } from './menuCss';
createNav()
function getUrl(){
    const url = window.location.href
    const urlArr = url.split('/')
    const urlName = urlArr[urlArr.length-1]
    return urlName
}
const urlName = getUrl()
if(urlName ==="index.html"){
    mainContent()
}
footer()
if(urlName ==="menu.html"){
    menu()
    menuCss()
    document.querySelector('.footer-basic').classList.add('footer-menu')
}



