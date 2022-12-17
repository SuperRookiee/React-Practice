import React from 'react';

import MyPropsSub from '../components/MyPropsSub'

import Meta from '../Meta.js';

const MyProps = () => {

    console.clear();

    return (
        <div>
            <Meta title="Myprops.js" description="여기는 Myprops.js 파일 입니다." />

            <h2>MyProps</h2>
            
            <MyPropsSub />
            <MyPropsSub name="민호" age="19" />
            <MyPropsSub name="수영" age={21} />
        </div>
    );
};

export default MyProps;