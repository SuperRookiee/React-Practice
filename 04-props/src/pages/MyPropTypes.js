import React from 'react';

import MyPropTypesSub from '../components/MyPropTypesSub';

import Meta from '../Meta';

const MyPropTypes = () => {
    return (
        <div>
            <Meta title="MypropTypes.js" description="여기는 MypropTypes.js 파일 입니다." />

            <h2>MypropTypes</h2>

            <MyPropTypesSub name='민호' age={19} hobby="사진찍기" />
            <MyPropTypesSub name='수영' age="스물한살" hobby="영화보기" />
            <MyPropTypesSub name='철민' age={22} />
        </div>
    );
};

export default MyPropTypes;