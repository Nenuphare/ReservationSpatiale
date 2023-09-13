import React from 'react';
import Header from '../../components/Header/Header';
import Packs from '../../components/Pack/Pack';
import Form from '../../components/Form/Form';
/* import User from '../../services/User.service';
var toutuser = User.getAll();
console.log(toutuser); */
const Home = () => {
  return (
    <div className='home'>
        <Packs />
        <Form />
    </div>
  )
}

export default Home