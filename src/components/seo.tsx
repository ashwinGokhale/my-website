import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';

const defaultProps = {
    title: ``,
    description: false,
    image: false,
    children: null
};

type Props = {
    title?: string;
    description?: string;
    image?: string;
    children?: React.ReactNode;
};

const SEO = ({ children }: Props) => {
    const site = useSiteMetadata();

    const { title, siteUrl, description, language, author } = site;

    return (
        <Helmet title={title}>
            <html lang={language} />
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image:alt" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image:alt" content={description} />
            <meta name="twitter:creator" content={author} />
            <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-cara" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            {children}
        </Helmet>
    );
};

SEO.defaultProps = defaultProps;

export default SEO;
