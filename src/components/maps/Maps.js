import './Maps.css'
import { YMaps, Map } from '@pbe/react-yandex-maps';

const Maps =() => {
    return(
        <div className='mapBlock' id='maps'>
        <YMaps>
             <div className='mapGatovichi' id='gatovichi'>
                <p className='addressHeader'>
                    адрес: 
                </p>
                <p className='address'>
                    деревня Гатовичи, Мядельский сельсовет, Минская область
                </p>
                <Map defaultState={{ center: [54.855040, 26.862457], zoom: 15 }} />
            </div>
            <div className='mapShirki' id='shirki'>
                <p className='addressHeader'>
                    адрес: 
                </p>
                <p className='address'>
                    д. Ширки, Центральная ул., 34А
                </p>
                <Map defaultState={{ center: [55.068025, 26.800653], zoom: 19 }} />
            </div>
        </YMaps>
        </div>
    )
}
export default Maps;