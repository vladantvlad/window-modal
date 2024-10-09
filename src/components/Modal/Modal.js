import { useRef } from 'react';
import Styled from './modal.module.css'
import arrowLeftR from '../img/arrow-left-r.svg'

export const Modal = ({onClose}) => {

    const onCloseModal = () => {
        onClose(false);
    };

    const inputRef = useRef(null);

    function handleClick() {
        console.log(inputRef.current.value);
      }

    return (
        <div className={Styled['modal-layout']}>
            <div className={Styled['modal-content']}>
                <button className={Styled['modal-content__btn']} onClick={onCloseModal}> 
                  <img src={arrowLeftR}></img>
                  </button>
                <div className={Styled['modal-content__container']}>
                    <h1>Модальное окно</h1>
                    <p>Введите код CVC2</p>
                    <input ref={inputRef}></input>
                    <button onClick={handleClick}>Отправить текст в консоль </button>
                </div>
            </div>
        </div>
    )
}