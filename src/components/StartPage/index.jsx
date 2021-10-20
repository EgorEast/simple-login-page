import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setIsCorrectData, setIsLogin } from '../../store/profileDataSlice';
import './StartPage.css';

const StartPage = () => {
	const dispatch = useDispatch();
	const login = useSelector((state) => state.profileData.login);
	const password = useSelector((state) => state.profileData.password);
	const isCorrectData = useSelector((state) => state.profileData.isCorrectData);
	const [isCorrectLogin, setIsCorrectLogin] = useState(false);
	const [isChangedLogin, setIsChangedLogin] = useState(false);
	const [isCorrectPassword, setIsCorrectPassword] = useState(false);
	const [isChangedPassword, setIsChangedPassword] = useState(false);

	const isLogin = useSelector((state) => state.profileData.isLogin);
	const history = useHistory();

	useEffect(() => {
		if (isLogin) history.push('/profile');
	}, [history, isLogin]);

	useEffect(() => {
		if (isCorrectLogin && isCorrectPassword) dispatch(setIsCorrectData(true));
	}, [dispatch, isCorrectLogin, isCorrectPassword]);

	const handleChangeLogin = (event) => {
		const value = event.target.value;
		if (!isChangedLogin) setIsChangedLogin(true);
		if (value === login) {
			if (!isCorrectLogin) setIsCorrectLogin(true);
		} else if (isCorrectLogin) setIsCorrectLogin(false);
	};
	const handleChangePassword = (event) => {
		const value = event.target.value;
		if (!isChangedPassword) setIsChangedPassword(true);
		if (value === password) {
			console.log('correct');
			if (!isCorrectPassword) setIsCorrectPassword(true);
		} else if (isCorrectPassword) setIsCorrectPassword(false);
	};

	const handleClickLoginButton = () => {
		if (isCorrectData) dispatch(setIsLogin(true));
	};
	return (
		<div className='start-page'>
			<div className='form'>
				<div className='form-item'>
					<p>Login</p>
					<input
						type='text'
						placeholder='developer21'
						onChange={handleChangeLogin}
					/>
					{isChangedLogin ? (
						isCorrectLogin ? (
							<span style={{ color: 'green' }}>&#10003;</span>
						) : (
							<span style={{ color: 'red' }}>&#216;</span>
						)
					) : null}
				</div>

				<div className='form-item'>
					<p>Password</p>
					<input
						type='text'
						placeholder='123456'
						onChange={handleChangePassword}
					/>
					{isChangedPassword ? (
						isCorrectPassword ? (
							<span style={{ color: 'green' }}>&#10003;</span>
						) : (
							<span style={{ color: 'red' }}>&#216;</span>
						)
					) : null}
				</div>
				<button
					className='login-button'
					onClick={handleClickLoginButton}
					disabled={!isCorrectData}
				>
					Login
				</button>
			</div>
		</div>
	);
};

export default StartPage;
