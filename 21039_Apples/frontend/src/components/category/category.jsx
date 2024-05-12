import './category.css'
import Besprovod from './img/besprovod.png'
import Chehol from './img/chehol.png'
import Iphone14 from './img/iphone14.png'
import Poco3 from './img/poco3.png'
import Powerbank from './img/powerbank.png'
import Provoda from './img/provoda.png'

export function Category() {

  return (
    <>
      <div className='category'>
        <span>Популярные категории</span>
        <div className='divcategory'>
          <div><img src={Provoda} alt="Провода"/><a href="">Провода</a></div>
          <div><img src={Iphone14} alt="Iphone 14"/><a href="">Техника Apple</a></div>
          <div><img src={Powerbank} alt="Повербанк"/><a href="">Повербанки</a></div>
          <div><img src={Poco3} alt="Poco"/><a href="">Техника Xiaomi</a></div>
          <div><img src={Besprovod} alt="Беспроводная зарядка"/><a href="">Беспроводные зарядки</a></div>
          <div><img src={Chehol} alt="Чехол"/><a href="">Чехлы</a></div>
        </div>
      </div>
    </>
  )
}

