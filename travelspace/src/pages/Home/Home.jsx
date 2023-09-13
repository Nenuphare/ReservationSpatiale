import React from 'react';
import Header from '../../components/Header/Header';
import Packs from '../../components/Pack/Pack';
import Form from '../../components/Form/Form';

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Packs />
        <Form />
    </div>
  )
}

export default Home