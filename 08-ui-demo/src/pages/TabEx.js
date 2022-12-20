import React, { memo, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const TabContainer = styled.div`
    .tab-button-group {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        display: flex;

        .tab-button {
            display: block;
            background-color: inherit;
            min-width: 100px;
            box-sizing: border-box;
            border: none;
            outline: none;
            padding: 14px 16px;
            font-size: 17px;
            color: #222;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: 0.3s;

            &.hover {
                background-color: #ddd;
            }

            &.active {
                background-color: #ccc;
            }
        }
    }

    .tab-page {
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }
`;

const tabContent = [{
    id: 'newyork',
    subject: 'NewYork',
    content: 'NewYork is the capital city of US.'
}, {
    id: 'london',
    subject: 'London',
    content: 'London is the capital city of England.'
}, {
    id: 'paris',
    subject: 'Paris',
    content: 'Paris is the capital city of France.'
}, {
    id: 'seoul',
    subject: 'Seoul',
    content: 'Seoul is the capital city of Korea.'
}];

const TabEx = memo(() => {
    const [tabIndex, setTabIndex] = useState(0);

    const onTabButtonClick = useCallback((e) => {
        e.preventDefault();
        
        const current = e.currentTarget;
        const href = current.getAttribute('href');
        console.log(href);

        setTabIndex((currentValue) => {
            console.log(`변경전 상태값==> ${currentValue}`);
            const newValue = tabContent.findIndex(element => `#${element.id}` === href);
            console.log(`변경후 상태값==> ${newValue}`);
            return newValue;
        });
    }, []);

    const { subject, content } = useMemo(() => {
        return tabContent[tabIndex];
    }, [tabIndex]);

    return (
        <div>
            <h2>TabEx {tabIndex}</h2>

            <TabContainer>
                <div className='tab-button-group'>
                    {tabContent.map((v,i) => {
                        const cls = classnames({
                            'tab-button': true,
                            'active': i === tabIndex
                        });

                        return (
                            <a key={i} className={cls} href={`#${v.id}`}
                                onClick={onTabButtonClick}>{v.subject}</a>
                        )
                    })}
                </div>
                <div className='tab-page'>
                    <h3>{subject}</h3>
                    <p>{content}</p>
                </div>
            </TabContainer>
        </div>
    );
});

export default TabEx;