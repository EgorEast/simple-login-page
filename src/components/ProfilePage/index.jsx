import React from 'react';
import { useSelector } from 'react-redux';
import './ProfilePage.css';

const ProfilePage = () => {
	const login = useSelector((state) => state.profileData.login);

	return (
		<div className='profile-page'>
			<h1> {login}</h1>
		</div>
	);
};

export default ProfilePage;
