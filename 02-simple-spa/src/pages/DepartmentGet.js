import React from 'react';

import {useLocation} from 'react-router-dom';

const DepartmentGet = () => {
    const location = useLocation();
    console.group("userLocation()의 리턴값 확인");
    console.debug(location);
    console.groupEnd();
    
    const { search } = location;
    const query = new URLSearchParams(search);
    console.group("QueryString() 확인");
    console.debug(query);
    console.groupEnd();

    console.group("파라미터 처리 결과 확인");
    console.debug('요청된 학과번호 값=%s (%s)', query.get('id'), typeof query.get('id'));;
    console.debug('요청된 메세지 내용=%s (%s)', query.get('msg'), typeof query.get('msg'));;
    console.debug(query);
    console.groupEnd();
    
    console.group("파라미터 JSON 변환 확인");
    const params = Object.fromEntries(query);
    console.debug(query);
    const { id, msg } = params;
    console.debug('요청된 학과번호 값=%s (%s)', query.get('id'), typeof query.get('id'));;
    console.debug('요청된 메세지 내용=%s (%s)', query.get('msg'), typeof query.get('msg'));;
    console.groupEnd();
    
    const departmentList = {
        item: [
            {id:101, dname: '컴퓨터공학과', loc: '1호관'},
            {id:102, dname: '멀티미디어학과', loc: '2호관'}
        ]
    };

    let departmentItem = departmentList.item.find((v,i) => v.id === parseInt(id));

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

export default DepartmentGet;