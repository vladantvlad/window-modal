import Styled from './main.module.css';
import { Modal } from "../Modal/Modal.js";
import { useState } from 'react';




export function Main () {

    const[isModalOpen, setIsModalOpen] = useState(false);

    const onShowModal = () => {
        setIsModalOpen(true)
    } 

    return (
        <div className={Styled['container']}> 
            <button className={Styled['container__button']}  onClick={onShowModal}>Открыть модальное окно</button> 
            {isModalOpen && <Modal onClose={setIsModalOpen} />}
        </div>
    );
}