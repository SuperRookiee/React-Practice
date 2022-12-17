import React from 'react';

const Loop3 = () => {
    const seasons = ['봄', '여름', '가을', '겨울'];
    // const seasons = [];

    return (
        <div>
            <h2>Loop3</h2>
            <table border='1'>
                <tbody>
                    <tr>
                    {seasons.map((item,index) => {
                        return <td key={index}>{item}</td>
                    })}
                        
                    {seasons.length > 0 ? 
                        (seasons.map((item,index) => {
                            return <td key={index}>{item}</td>
                        })) : 
                        (
                        <td colSpan="4">데이터가 없습니다.</td>
                        )
                    }
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Loop3;