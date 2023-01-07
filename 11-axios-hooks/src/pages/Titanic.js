import React, {memo, useCallback} from 'react';
import styled from 'styled-components';
import Spinner from '../components/Spinner'
import Table from '../components/Table'
import { SexLabel, EmbarkedLabel, SurvivedLabel } from '../components/Labels'
import useAxios from 'axios-hooks';
import useMountedRef from '../hooks/useMountedRef.js'

const SelectContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 0;

    select {
        margin-right: 15px;
        font-size: 16px;
        padding: 5px 10px;
    }
`;

const Titanic = memo(() => {
    const [{data, loading, error }, refetch] = useAxios("/titanic");

    const [state, setState] = React.useState({
        sex: '',
        embarked: '',
        survived: ''
    });

    const mountedRef = useMountedRef();

    const onSelectChange = useCallback(e => {
        e.preventDefault();

        const current = e.target;
        const key = current.name;
        const value = current[current.selectedIndex].value;

        const newState = { ...state, [key]: value };

        setState(newState);

        console.log(newState);
    }, [state]);

    React.useEffect(() => {
        if (mountedRef.current) {
            const params = {};
            for (const key in state) {
                if (state[key]) {
                    params[key] = state[key];
                }
            }

            refetch({
                params: params
            });
        }
    }, [mountedRef, refetch, state]);

    if(error) {
        console.error(error);

        return (
            <div>
                <h1>Oops~!!! {error.code} Error.</h1>
                <hr/>
                <p>{error.message}</p>
            </div>
        )
    }

    return (
        <div>
            <Spinner loading={loading} />

            <SelectContainer>
                <select name='sec' onChange={onSelectChange}>
                    <option value="">-- 성별 선택 --</option>
                    <option value="">남자</option>
                    <option value="">여자</option>
                </select>
                <select name='embarked' onChange={onSelectChange}>
                    <option value="">-- 탑승지 선택 --</option>
                    <option value="C">세르브루</option>
                    <option value="Q">퀸즈타운</option>
                    <option value="S">사우샘프턴</option>
                </select>
                <select name='survived' onChange={onSelectChange}>
                    <option value="">-- 생존여부 선택 --</option>
                    <option value="true">생존</option>
                    <option value="false">사망</option>
                </select>
            </SelectContainer>

            <Table>
                <thead>
                    <tr>
                        <th>승객번호</th>
                        <th>승객이름</th>
                        <th>성별</th>
                        <th>나이</th>
                        <th>동승자 수</th>
                        <th>객실등급</th>
                        <th>방 호수</th>
                        <th>티켓번호</th>
                        <th>요금</th>
                        <th>탑승자</th>
                        <th>생존여부</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(({
                        id, name, survived, pclass, sex, age, sibsp,
                        parch, ticket, fare, cabin, embarked
                    }, i) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{<SexLabel sex={sex} />}</td>
                                <td>{age}</td>
                                <td>{sibsp + parch}</td>
                                <td>{pclass}</td>
                                <td>{cabin}</td>
                                <td>{ticket}</td>
                                <td>{fare}</td>
                                <td>{<EmbarkedLabel embarked={embarked} />}</td>
                                <td>{<SurvivedLabel survived={survived} />}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
});

export default Titanic;