import './catalog.css'
import Iphone12 from './img/iphone12.png'
import { Card_product } from '../card_product/card_product.jsx'
import { Route, Routes, Link } from 'react-router-dom'

export function Catalogtovar() {

    return (
        <>
            <div>
                <img src={Iphone12} alt="Айфон 12" />
                <Link to='/card'>Iphone 12</Link>
                <span>40.000 руб</span>
            </div>
            <Routes>
                <Route path='/card' element={<Card_product/>} />
            </Routes>
        </>

    )
}