import React, {useContext} from 'react';
import {NavBarImage} from "./navbar-profile.styles";
import {UserContext} from "../../contexts/user.context"
import image from '../../assets/images/default-profile-pic.jpg'

const NavbarProfile = () => {

    const {user} = useContext(UserContext)
    const imageToUse = user ? user?.userData?.photoURL : image

    return (
        <NavBarImage alt="profile" src={imageToUse}/>
    );
};

export default NavbarProfile;