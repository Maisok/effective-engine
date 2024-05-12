import './tovary.css'
import Iphone12 from './img/iphone12.png'
import Pocox3 from './img/pocox3.png'
import Pods from './img/pods.png'
import Watch from './img/watch.png'
import Watch2 from './img/watch2.png'

export function Tovary() {

  return (
    <>
       <div className="tovary">
       <span>Популярные товары </span>
        <div className='divtovary'>
            <div>
                <img src={Iphone12} alt="Iphone12"/>
                <a href="">Iphone 12</a>
                <a href="">40.000 руб.</a>
            </div>

            <div>
                <img src={Pocox3} alt="Poco X3"/>
                <a href="">Poco X3</a>
                <a href="">15.000 руб.</a>
            </div>

            <div>
                <img src={Pods} alt="Airpods Pro 2"/>
                <a href="">Airpods Pro 2</a>
                <a href="">25.000 руб.</a>
            </div>

            <div>
                <img src={Watch} alt="Apple MagSafe"/>
                <a href="">Apple Watch</a>
                <a href="">5.000 руб.</a>
            </div>

            <div>
                <img src={Watch2} alt="Apple Watch"/>
                <a href="">Apple Watch</a>
                <a href="">35.000 руб.</a>
            </div>

        </div>
    </div>
    </>
  )
}

