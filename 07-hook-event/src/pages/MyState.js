import React from 'react';

const MyState = () => {
    const [myName, setMyName] = React.useState('ㅇㅇ');
    const [myPoint, setMyPoint] = React.useState(50);

    const onMyNameChange = e => {
        setMyName(e.currentTarget.value);
    }

    return (
        <div>
            <h2>MyState</h2>

            <h3>{myName}님의 점수는 {myPoint}입니다.</h3>

            <hr/>

            <div>
                <label htmlFor='myNameInput'>이름: </label>
                <input id='myNameInput' type='text' value={myName} onChange={onMyNameChange}></input>
            </div>

            <div>
                <label htmlFor='myPointInput'>이름: </label>
                <input id='myPointInput' type='range' min='0' max='100' value={myPoint} step='1'
                    onChange={e => {
                        setMyPoint(e.currentTarget.value);
                    }}></input>
            </div>
        </div>
    );
};

export default MyState;