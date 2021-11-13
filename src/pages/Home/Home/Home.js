import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import NewWatch from '../NewWatch/NewWatch';
import Products from '../Products/Products';
import Reviewers from '../Reviewers/Reviewers';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div style={{backgroundColor:"#aad4f556"}}>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <NewWatch></NewWatch>
            <Products></Products>
            <Reviewers></Reviewers>
            <Footer></Footer>
        </div>
    );
};

export default Home;