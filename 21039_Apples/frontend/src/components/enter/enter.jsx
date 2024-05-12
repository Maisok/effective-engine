import './enter.css'

export function Enter() {

  return (
    <>
      <div className='enter'>
          <div className='diventer'>
              <div>
                  <span>E-mail или номер телефона</span>
                  <input type="text"/>
                </div>
                <div>
                  <span>Никнейм</span>
                  <input type="text"/>
                </div>
                <div>
                  <span>Пароль</span>
                  <input type="text"/>
                </div>
                <button>Создать</button>
          </div>
      </div>
    </>
  )
}

