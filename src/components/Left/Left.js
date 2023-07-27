import React from 'react';
import './Left.scss';
import ori from '../../assets/images/noel.jpg';
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs';

const Left = () => {
    return (
        <div className="left">
            <span>Xin chào, mình là Ori</span>
            <img src={ori} alt="ori" width={300}></img>
            <p>Liên hệ:</p>
            <div className="contact">
                <a href="https://www.facebook.com/hanhori.2912">
                    <BsFacebook />
                </a>
                <a href="https://www.instagram.com/_hognhazh29_/">
                    <BsInstagram />
                </a>
                <a href="https://www.tiktok.com/@hanhhogn2912">
                    <BsTiktok />
                </a>
            </div>
        </div>
    );
};

export default Left;
