import React from 'react';
import Modal from 'react-modal';
import AuthWindow from './components/AuthWindow';

const AuthModal = ({ }) => {
    return (
        <Modal
            isOpen={false}
            onRequestClose={() => {}}
        >
            <AuthWindow closeModal={() => {}}
                        login={""}
                        initialState={true}
            />
        </Modal>
    )
}

export default AuthModal;