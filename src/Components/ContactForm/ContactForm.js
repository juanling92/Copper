import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import './ContactForm.css'

import MessageSuccess from '../MessageSuccess/MessageSuccess';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Spinner from '../Spinner/Spinner';

const initialState = {
	name: '',
	lastName: '',
	email: '',
	cellphone: '',
};

const ContactForm = () => {
	const [values, setValues] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		setPurchaseID(docRef);
		setTimeout(() => {
			setIsLoading(false);
			setValues(initialState);
		}, 500);
	};

	return (
        <>
        <h3 className='color'>Debe completar el  fórmulario para finalizar la compra</h3>
		<div>
			<form className='form-container' onSubmit={onSubmitHandler}>
				<Input
					className='form-input'
					placeholder='Nombre/s'
					name='name'
					value={values.name}
					onChange={onChangeHandler}
				/>
				<Input
					className='form-input'
					placeholder='Apellido/s'
					name='lastName'
					value={values.lastName}
					onChange={onChangeHandler}
				/>
				<Input
					className='form-input'
					placeholder='E-mail'
					name='email'
					value={values.email}
					onChange={onChangeHandler}
				/>
				<Input
					className='form-input'
					placeholder='Teléfono/Celular'
					name='cellphone'
					value={values.cellphone}
					onChange={onChangeHandler}
				/>
				<Button className='form-btn' primary>
					Finalizar compra
				</Button>
			</form>
            {isLoading ? (<Spinner/>)
            : 
            purchaseID.id && (
                    <div>
						<MessageSuccess msg={purchaseID} />
					</div>
				)}
		</div>
        </>
	);
};

export default ContactForm;