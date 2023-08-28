import './ScrollBar.css'
import mapPng from '../../resources/map.png'
import infoPng from '../../resources/info.png'
import tablePng from '../../resources/table.png'
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollBar =() => {
    window.onscroll = function() {
        let timer = null;
        const scrollbar = document.getElementById('scrollbar');
        scrollbar.classList.add('scroll');
        clearTimeout(timer);
        timer = setTimeout(function () {
        scrollbar.classList.remove('scroll');
         }, 1000);
        console.log(1);
        }
    
    // window.onscroll = function() {
    //     var scrolled = window.scrollY || document.documentElement.scrollTop;
    //     if(scrolled !== 0){
    //       document.querySelector('.scrollBlock').style.opacity = '1';
    //     }else{
    //       document.querySelector('.scrollBlock').style.opacity = '0.2';
    //     };
    //   };
    return (
        <div className='scrollBlock' id='scrollbar'>
            <ul>
                <li>
                    <Link
                        activeClass="active"
                        to="info"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        <img src={infoPng} alt="Image"/>
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="table"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        <img src={tablePng} alt="Image"/>
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="maps"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        <img src={mapPng} alt="Image"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default ScrollBar;