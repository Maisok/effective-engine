import './header.css'
import { Route, Routes, Link } from 'react-router-dom'
import React from 'react'
import Logo from '../../../static/logo.png'
import Delivery from './img/delivery.png'
import Basket2 from './img/basket.png'
import Loupe from './img/loupe.png'
import Refund from './img/refund.png'
import Warranty from './img/warranty.png'
import { Lk } from '../lk/lk.jsx'
import { Mainsection } from '../mainsection/mainsection.jsx'
import { Basket } from '../backet/backet.jsx'
import { Catalog } from '../catalog/catalog.jsx'
import { Card_product } from '../card_product/card_product.jsx'
import { Login } from '../login/login.jsx'

export function Header() {

  return (
    <>
      <header>

        <div className='first'>

          <div className='logo'>
            <a href=""><img src={Logo} alt="Логотип"/></a>
          </div>

          <div className='advantages'>
            <div>
              <img src={Refund} alt="Возврат"/>
              <a href="">Возврат в течении 10 дней</a>
            </div>
            <div>
              <img src={Delivery} alt="Возврат"/>
              <a href="">Бесплатная доставка</a>
            </div>
            <div>
              <img src={Warranty} alt="Возврат"/>
              <a href="">Гарантия</a>
            </div>
          </div>

          <div className='basket'>
            <a href="" className='IMGbasket'><Link to='/basket'><img src={Basket2} alt="Корзина"/></Link></a>
            <a href="">Товаров: <a href="">1 шт</a></a>
            <a href="">Сумма: <a href="">5000 руб</a></a>
          </div>

        </div>
       

        <div className='second'>
          <div>
          <Link to="/">Главная</Link>
          <Link to='catalog'>Каталог</Link>
          <Link to="/lk">Личный кабинет</Link>
          </div>
          
        </div>
      </header>

      <Routes>
        <Route path='/lk' element={<Login/>}/>
        <Route path='/' element={<Mainsection/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/card' element={<Card_product/>}/>
      </Routes>
    </>
  )
}

