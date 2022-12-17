import React from 'react';

const MyMeno = () => {
    const [myNumber, setMyNumber] = React.useState(0);

    const myResult = React.useMemo(() => {
        return myNumber * 10000;
    }, [myNumber]);

    const onMyNumberChange = (e) => {
        const inputValue = e.currentTarget.value;
        const inputNumber = isNaN(inputValue) ? 0 : parseInt(inputValue);
        setMyNumber(inputNumber);
    }

    // React.useEffect(() => {
    //     setMyResult(myNumber*10000);
    // }, []);

    return (
        <div>
            <h2>MyMemo</h2>
            <p>
                <input type='text' value={myNumber} onchange={onMyNumberChange} /> * 10000 = {myResult}
            </p>
        </div>
    );
};

export default MyMeno;