import './Info.css'
import mySvg from '../../resources/kolca.svg'
import mySvg2 from '../../resources/tarelka.svg'
import mySvg3 from '../../resources/house.svg'
import mySvg4 from '../../resources/champagne.svg'
import { Link, animateScroll as scroll } from "react-scroll";

const Info =() => {
   
    return (
        <div className='infoBlock'  id="info" >
            <div className='infoRow'>
                <p className='infoTime'>12:00</p>
                <img className='infoSvg' src={mySvg3} alt='svg'/>
                <div className='infoPlace'>
                    <p style={{
                        fontSize: "5vw",
                        margin: "0 0",
                        paddingTop: "3vh"
                        }
                        }>Выкуп невесты</p>
                    <Link
                        activeClass="active"
                        to="gatovichi"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        <p style={{fontSize: "4vw",
                        margin: "0 0",
                        textAlign: "start"
                        }}>д.Гатовичи</p>
                    </Link>
                    
                </div>
                
            </div>
            <div className='infoRow'>
                <p className='infoTime'>15:00</p>
                <img className='infoSvg' src={mySvg4} alt='svg'/>
                <div className='infoPlace'>
                    <p style={{
                        fontSize: "5vw",
                        margin: "0 0",
                        paddingTop: "3vh"
                        }
                        }>Фуршет</p>
                    <Link
                        activeClass="active"
                        to="shirki"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        <p  style={{
                        fontSize: "4vw",
                        margin: "0 0",
                        textAlign: "start"
                        }}>д.Ширки, усадьба гармония</p>
                    </Link>
                    
                </div>
                
            </div>
            <div className='infoRow'>
                <p className='infoTime'>16:00</p>
                <img className='infoSvg' src={mySvg} alt='svg'/>
                <div className='infoPlace'>
                    <p style={{
                        fontSize: "5vw",
                        margin: "0 0",
                        paddingTop: "3vh",
                        textAlign: "start"
                        }
                        }>Регистрация брака</p>
                </div>
            </div>
            <div className='infoRow'>
                <p className='infoTime'>17:00</p>
                <img className='infoSvg' src={mySvg2} alt='svg'/>
                <div className='infoPlace'>
                    <p style={{
                        fontSize: "5vw",
                        margin: "0 0",
                        paddingTop: "3vh",
                        textAlign: "start"
                        }
                        }>Праздничный банкет</p>
                </div>
            </div>         
            
        </div>
    )
}
export default Info;