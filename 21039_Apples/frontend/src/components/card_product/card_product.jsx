import './card_product.css'
import All from './img/all.png'
import Red from './img/colors/red.png'
import white from './img/colors/white.png'
import Black from './img/colors/black.png'
import Pink from './img/colors/pink.png'
import Yellow from './img/colors/yellow.png'
import Green from './img/colors/green.png'

export function Card_product() {

    return (
        <>
            <div className='card_product'>
                <div className='divcard_product'>
                    <img src={Red} alt="Iphone 11" />
                    <div>
                        <span>Apple Iphone 11</span>
                        <span>35.000 руб</span>
                    </div>
                    <img src={All} alt="Все цвета" />
                    <button>В корзину</button>
                    <div>
                        <span>Коротко о товаре:</span>
                        <span>НИЧЕГО ЛИШНЕГО. ТОЛЬКО САМОЕ
                            Новая система двух камер не оставит никого из ваших друзей за кадром. Самый быстрый процессор iPhone и мощный аккумулятор позволят больше делать и тратить меньше времени на подзарядку. А высочайшее качество видео на iPhone означает, что ваши истории станут еще ярче и детальнее.
                            О Iphone 11 итак все знают, тебе только нужно сделать одно-купить.
                        </span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}