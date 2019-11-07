import React, { useState, useMemo } from 'react';
import api  from '../../assets/services/api'

import camera from '../../assets/camera.svg';
import './style.css';

export default function New({history}) {
  
   const [thumbnail,setThumbnail] = useState('');
   const [company, setCompany] = useState('');
   const [techs, setTechs] = useState('');
   const [price, setPrice] = useState('');
   
   const preview = useMemo(() =>{
      return thumbnail ? URL.createObjectURL(thumbnail) : null;
      },[thumbnail]
   )

   async function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData();
      const user_id = localStorage.getItem('user');

      data.append('thumbnail', thumbnail);
      data.append('company', company);
      data.append('techs', techs);
      data.append('price', price);

      await api.post('/spots', data, {
         headers: { user_id }
      })

      history.push('/dashboard')
   }

   return (
      <>
         <form onSubmit={handleSubmit}>

            <label id="thumbnail"
                   style ={{ backgroundImage: `url(${preview})`}}
                   className= {thumbnail ? 'has-thumbnail':''}
                   >
               <input type="file" onChange={ event => setThumbnail(event.target.files[0])}/>
               <img src={camera} alt="Select your img..."/>
            </label>

            <label htmlFor="company">Empressa</label>
            <input
               placeholder="Sua empressa incrivel"
               value={company}
               onChange={event => setCompany(event.target.value)} />

            <label htmlFor="techs">Tecnologias * <span>(separadas por virgulas)</span></label>
            <input
               placeholder="Quais tecnolias usam"
               value={techs}
               onChange={event => setTechs(event.target.value)} />

            <label htmlFor="price">Valor da diaria * <span>(Embranco para gratis)</span></label>
            <input
               placeholder="Valor cobrado por dia"
               value={price}
               onChange={event => setPrice(event.target.value)} />

            <button className="btn">Cadastrar</button>
         </form>

      </>
   )
}