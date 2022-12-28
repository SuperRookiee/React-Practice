import React, {memo, useState, useEffect} from 'react';
import axios from 'axios';

import NewsList from '../components/NewsList';
import Spinner from '../components/Spinner';

const News = memo(() => {
    const [newsList, setNewsList] = useState([]);
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(loading => true);

            let json = null;

            try {
                const response = await axios.get("/news");
                json = response.data;
            } catch (e) {
                console.error(e);
                alert(`데이터 요청에 실패했습니다. \n${e.message}`);
                return;
            }finally {
                setLoading(loading => false);
            }
            setNewsList(newsList => json);
        })();
    }, []);

    return (
        <div>
            <Spinner loading={loading} />
            <NewsList news={newsList} />
        </div>
    );
});

export default News;