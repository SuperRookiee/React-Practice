import React from 'react';

import {useParams} from 'react-router-dom';

const DepartmentPath = () => {
    const params = useParams();
    console.group("useParams()의 리턴값 확인");
    console.debug(params);
    console.groupEnd();

    console.debug('요청된 학과번호 값=%s (%s)', params.id, typeof params.id);
    console.debug('요청된 메세지 내용=%s (%s)', params.msg, typeof params.msg);
    console.groupEnd();

    const departmentList = {
        item: [
            {id:201, dname: '전자공학과', loc: '3호관'},
            {id:202, dname: '기계공학과', loc: '4호관'}
        ]
    };

   let departmentItem = departmentList.item.find((v,i) => v.id === parseInt(params.id));

    if(!departmentItem) {
        return(<h3>존재하지 않는 데이터에 대한 요청입니다.</h3>)
    }

    return(
        <div>
            <h2>DepartmentGet</h2>
            <ul>
                <li>학과번호: {departmentItem.id}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    );
}  

export default DepartmentPath;