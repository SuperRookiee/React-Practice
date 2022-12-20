import React, { memo, useCallback, useMemo, useRef } from 'react';
import ListContainer from '../components/ListContainer'

const CreateElementEx = memo(() => {
    const comment = useRef();

    const list = useRef();

    const css = {
        marginRight: '10px'
    };

    const getItem = useCallback((clsName) => {
        const li = document.createElement('li');
        li.classList.add('item', clsName);
        li.innerHTML = comment.current.value;

        li.addEventListener('click', (e) => {
            e.currentTarget.remove();
        });

        return li;
    }, []);

    const onAppendChildClick = useCallback((e) => {
        const li = getItem('blue');

        list.current.appendChild(li);
    }, [list, getItem]);

    const onInsertBefore1Click = useCallback((e) => {
        list.current.insertBefore(getItem('orage'), null);
    }, [list, getItem]);

    const onInsertBefore2Click = useCallback((e) => {
        list.current.insertBefore(getItem('pink'), document.querySelector('li:first-child'));
    }, [list, getItem]);

    return (
        <div>
            <h2>CreateElementEx</h2>

            <input type='text' style={css} ref={comment} />
            <button type='button' style={css} onClick={onAppendChildClick}>appendChild</button>
            <button type='button' style={css} onClick={onInsertBefore1Click}>insertBefore1</button>
            <button type='button' style={css} onClick={onInsertBefore2Click}>insertBefore2</button>
            <hr />

            <ListContainer ref={list} />
        </div>
    );
});

export default CreateElementEx;