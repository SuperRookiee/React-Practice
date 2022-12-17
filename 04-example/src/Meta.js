// @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
// @author: Go H.W

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../src/logo.svg'

// @param props
// @returns {JSX.Element}

const Meta = (props) => {
    return (
     <HelmetProvider>
        <Helmet>
            <meta charSet='utf-8' />
            <title>{props.title}</title>
            {/* SEO 태그 */}
            <meta name='description' content={props.description} />
            <meta name='keywords' content={props.keywords} />
            <meta name='author' content={props.author} />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={props.title} />
            <meta property='og:description' content={props.description} />
            <meta property='og:url' content={props.url} />
            <meta property='og:image' content={props.image} />
        </Helmet>
     </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: 'React 연습문제',
    description: 'React 연습문제 입니다.',
    keywords: 'React',
    author: 'Hyunwook',
    url: window.location.href,
    image: logo
};

export default Meta;