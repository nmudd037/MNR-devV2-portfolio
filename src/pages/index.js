import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import React from 'react';
import { Helmet } from 'react-helmet';

import App from '../components/App';
import { headData } from '../mock/data';

const index = () => {
  const { title, lang, description, keyword, url, image } = headData;

  return (
    <>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <App />
    </>
  );
};

export default index;
