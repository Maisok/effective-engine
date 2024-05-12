import './lk.css'
import Ava from './img/ava.png'

export function Lk() {

    return (
        <>
            <div className='lk'>
                <div className='divlk'>
                    <div>
                        <img src={Ava} alt="Аватарка" />
                        <a href="">Maisok</a>
                    </div>

                    <div>
                        <span>Номер телефона</span>
                        <span>+7 924 823-51-81</span>
                    </div>

                    <div>
                        <span>Почта</span>
                        <span>miasnikov2005@gmail.com</span>
                    </div>

                    <div>
                        <span>Карта для оплаты</span>
                        <span>0000 1111 2222 3333</span>
                    </div>

                    <div>
                        <span>Адрес доставки</span>
                        <span>Иркутск Ленина 5а</span>
                    </div>
                </div>
                <button>Выйти</button>
            </div>
        </>
    )
}
