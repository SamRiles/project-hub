import React, {Fragment} from 'react';
import BaseLayout from '../components/Layout/BaseLayout';
import { Introduction } from '../components/Introduction';
import { Information } from '../components/Information';

const Home = () => {

    return (
        <Fragment>
            <BaseLayout />
            <Introduction />
            <Information />
        </Fragment>
        
    );
};

export default Home;