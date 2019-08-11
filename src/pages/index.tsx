import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Contact from '../components/contact';

const Index = () => (
    <Layout>
        <Parallax pages={3}>
            <Hero offset={0} />
            <About offset={1} />
            <Contact offset={2} />
        </Parallax>
    </Layout>
);

export default Index;
