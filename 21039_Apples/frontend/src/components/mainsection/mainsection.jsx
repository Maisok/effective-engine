import './mainsection.css'
import Airpro from './img/airpro.png'
import Poco from './img/poco.png'
import Watch2 from './img/watch2.png'
import Iphone from './img/iphone.png'
import Accessories from './img/icons/accessories.png'
import Headphones from './img/icons/headphones.png'
import Notebook from './img/icons/notebook.png'
import Phone from './img/icons/phone.png'
import Tablet from './img/icons/tablet.png'
import Watch from './img/icons/watch.png'

export function Mainsection() {
    return (
        <>
            <div className='mainsection'>
                <div className='divmainsection'>
                        <ul>
                            <li><img src={Phone}/>Смартфоны</li>
                            <li><img src={Headphones}/>Наушники</li>
                            <li><img src={Tablet}/>Планшеты</li>
                            <li><img src={Notebook}/>Ноутбуки</li>
                            <li><img src={Watch}/>Часы</li>
                            <li><img src={Accessories}/>Аксессуары</li>
                        </ul>
                        
                        <img src={Iphone} alt="Iphone"/>
                        <img src={Airpro} alt="Airpro"/>
                        <img src={Poco} alt="Poco"/>
                        <img src={Watch2} alt="Watch2"/>
                </div>
            </div>
        </>
    )
}
