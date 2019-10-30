import  React, {  useState} from 'react';

export default function New(){
   const [company, setCompany] = useState('');
   const [techs, setTechs] = useState('');
   const [price, setPrice] = useState('')

   function handleSubmit(){

   }

    return (
        <>
         <form onSubmit={handleSubmit}>
          <label htmlFor="company">Empressa</label>
          <input 
            placeholder="Sua empressa incrivel"
            value={company}
            onChange={event => setCompany(event.target.value)}/>    
         </form> 
         <form onSubmit={handleSubmit}>
          <label htmlFor="techs">Tecnologias * <span>(separadas por virgulas)</span></label>
          <input 
            placeholder="Quais tecnolias usam"
            value={techs}
            onChange={event => setTechs(event.target.value)}/>    
         </form> 
         <form onSubmit={handleSubmit}>
          <label htmlFor="price">Valor da diaria * <span>(Embranco para gratis)</span></label>
          <input 
            placeholder="Valor cobrado por dia"
            value={price}
            onChange={event => setPrice(event.target.value)}/>    
         </form> 
        
        </>
    )
}