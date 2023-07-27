import React from 'react';
import './Right.scss';
import deptrai from '../../assets/images/deptrai.jpg';

const Right = () => {
    return (
        <div className="right">
            <div className="tinhcach">
                <span>Tính cách</span>
                <li>Mình là một người xinh đẹp tuyệt trần</li>
                <li>Mình rất vui tính, dễ bắt chuyện với mọi người</li>
                <li>Mặc dù đôi lúc mình có hơi nóng tính, nhưng ngoài lúc nóng tính ra thì mình rất hòa đồnggg</li>
                <li>Mình rất thích đi chơi, thích chụp hình, thích hoa, và... thích người yêu mình nữa</li>
            </div>
            <div className="ny">
                <p>Mình còn có anh người yêu siêu cấp dễ thương :3, luôn cưng chiều mình nữa chứ </p>
                <img src={deptrai} alt="deptrai" />
            </div>
        </div>
    );
};

export default Right;
