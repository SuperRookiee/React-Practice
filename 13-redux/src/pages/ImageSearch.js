import React, { memo, useEffect, useRef } from 'react';
import { useQueryString } from '../hooks/useQueryString';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import SearchForm from '../components/SearchForm';
import ImageList from '../components/ImageList';
import ImageView from '../components/ImageView';

import { useSelector, useDispatch } from 'react-redux';
import { getKakaoSearch } from '../slices/ImageSearchSlice';
import { useInView } from 'react-intersection-observer';

import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const ImageSearch = memo(() => {
    const { query } = useQueryString();

    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.ImageSearchSlice);

    const [isEnd, inView] = useInView();

    const navigate = useNavigate();

    const page = useRef(1);

    useEffect(() => {
        page.current = 1;
        if(query) {
            dispatch(getKakaoSearch({
                query: query,
                page: page.current
            }));
            window.scrollTo(0,0);
        }
    }, [query]);

    useEffect(() => {
        if(!data?.meta?.isEnd && inView && !loading) {
            console.log("스크롤이 맨 끝에 도착함");

            page.current++;

            dispatch(getKakaoSearch({
                query: query,
                page: page.current
            }));

            navigate(`${window.location.pathname}?query=${query}&page=${page.current}`)
        }
    }, [inView]);

    return (
        <div>
            <Spinner loading={loading} />
            <SearchForm />

            {error ? (
                <ErrorView error={error} />
            ) : (
                (query && data) && (
                    <ImageList>
                        {
                            data.documents.map(({ doc_url, image_url, thumbnail_url, display_sitename, collection, width, height, datetime }, i) => {
                                return (
                                    <li className="list-item" key={i}
                                        {...(!data?.meta?.isEnd && !loading && data.documents.length - 1 === i) ? { ref: isEnd } : {}}>
                                        <a className="list-item-link" href={doc_url} target="_blank" rel="noreferrer">
                                            <div className="thumbnail">
                                                <ImageView src={thumbnail_url} alt={display_sitename} />
                                            </div>
                                            <div className="content">
                                                <h3>{display_sitename}</h3>
                                                <ul>
                                                    <li>{collection}</li>
                                                    <li>이미지 크기: {width}x{height}</li>
                                                    <li>{dayjs(datetime).format('YYYY-MM-DD hh:mm')}</li>
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ImageList>
                )
            )}
        </div>
    );
});

export default ImageSearch