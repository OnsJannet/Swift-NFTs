import React from 'react';
import { homeObjOne} from './Data';
import { InfoSection} from '../../components';
import Mint from '../../components/Mint/Mint';
import FAQ from '../../components/FAQ/Questions';
import Goals from '../../components/Goals/Goals';
import ScrollToTop from '../../components/ScrollToTop';
import { Navbar} from '../../components';
import GlobalStyle from '../..//globalStyles';

function Home() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <InfoSection {...homeObjOne} />
      <Mint className="section" id="mint"/>
      <Goals className="section" id="goals"/>
      <FAQ />


    </>
  );
}

export default Home;
