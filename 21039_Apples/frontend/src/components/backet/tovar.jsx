import './tovar.css'
import All from './img/all.png'
import Basket2 from './img/basket2.png'
import { useState } from 'react'

export function Tovar() {
    const [count, setCount] = useState(1)
    return (
        <>
           <div className='tovar'>
                <div className='divtovar'>
                    <img src={All} alt="Айфон 12" />
                    <div>
                        <a href="">Айфон 12</a>
                        <div className='countvalue'>
                            <button onClick={() => setCount((count) => count - 1)}>-</button>
                            <span>{count}</span>
                            <button onClick={() => setCount((count) => count + 1)}>+</button>
                        </div>
                        <a href="">35.000 руб</a>
                    </div>
                    <button><img src={Basket2} alt="Удалить"/></button>
                </div> 
           </div>
        </>
    )
}