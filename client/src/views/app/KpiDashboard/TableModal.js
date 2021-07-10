import React, { useState } from 'react';
import {
    Row,
    Card,
    CardBody,
    CardTitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';


const TableModal = ({ el }) => {
    const [modalBasic, setModalBasic] = useState(false);

    return (
        <>
            <tr onClick={() => setModalBasic(true)} style={{ cursor: 'pointer' }} title="Click  to open" >
                <th style={{ maxWidth: '40%' }} > {el.title} </th>
                <td style={{}}> {el.uam} </td>
                <td style={{ color: `${el.color}` }}> {el.complex} </td>
                <td style={{ color: `${el.color}` }}> {el.boardDate} </td>
            </tr>
            <Modal
                isOpen={modalBasic}
                toggle={() => setModalBasic(!modalBasic)}
            >
                <ModalHeader>
                    <IntlMessages id="modal.modal-title" />
                </ModalHeader>
                <ModalBody> {el.title} </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={() => setModalBasic(false)}
                    >
                        Do Something</Button>{' '}
                    <Button
                        color="secondary"
                        onClick={() => setModalBasic(false)}
                    >Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default TableModal;
