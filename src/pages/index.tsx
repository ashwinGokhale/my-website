import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Contact from '../components/contact';

const Index = () => (
    <Layout>
        <Parallax pages={2}>
            <Hero offset={0} />
            <Contact offset={1} />
        </Parallax>
    </Layout>
);

export default Index;
