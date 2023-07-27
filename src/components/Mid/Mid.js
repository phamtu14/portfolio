import React from 'react';
import './Mid.scss';

const Mid = () => {
    return (
        <div className="mid">
            <div className="education">
                <span>Education</span>
                <li>Mình là cựu sinh viên trường THPT Quang Trung, Hải Phòng</li>
                <li>Hiện tại mình là sinh viên năm 3 trường Đại học Ngoại Ngữ-ĐHQGHN</li>
                <li>
                    Mình đã từng tham gia và đạt được nhiều giải thưởng về các cuộc thi Tiếng Anh của huyện và thành phố
                </li>
            </div>
            <div className="exp">
                <span>Experience</span>
                <li>
                    Mình có 3 năm kinh nghiệm làm gia sư Tiếng Anh tại trung tâm, cũng như là các lớp online và offline
                </li>
                <li>Mình đạt học bổng 4 kì liên tiếp tại ULIS</li>
                <li>
                    Mình còn là đại sứ học tập, đại sứ thủ lĩnh tại ULIS, giúp các bạn khóa dưới không chỉ việc học, mà
                    còn các hoạt động tại trường
                </li>
            </div>
            <div className="skill">
                <span>Skills</span>
                <li>Hiện tại mình biết 2 ngôn ngữ chính là Tiếng Anh và Tiếng Trung</li>
                <li>Ngoài ra mình có thể giao tiếp cơ bản bằng tiếng Thái, tiếng Đức</li>
                <li>
                    Mình thành thạo các kĩ năng văn phòng như Word, Exel,..., kĩ năng giao tiếp của mình cũng rất tốt
                </li>
            </div>
        </div>
    );
};

export default Mid;
