import './backet.css'
import { Tovar } from './tovar.jsx'

export function Basket() {

    return (
        <>
           <div className='basket2'>
                <div className='divbacket2'>
                <Tovar/>
                <Tovar/>
                <Tovar/>
                <Tovar/>
                <Tovar/>
                <Tovar/>
                </div>
                <button>Заказать</button>
           </div>
        </>
    )
}