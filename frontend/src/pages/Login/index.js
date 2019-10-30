import  React,{ useState } from 'react';
import api from '../../assets/services/api'

export default function Login({ history }){

    const[email, setEmail] = useState('');
  
    async function handleSubmint(event) {
      event.preventDefault(); 
      //console.log(email)
       const response = await api.post('/sessions', { email })
  
       const { _id } = response.data
       localStorage.setItem('user', _id)
       history.push('/dashboard')
  
    }

    return (
        <>
            <p>O Lorem <strong>Ipsum</strong> é um texto modelo da <strong>indústria</strong>.</p>

            <form onSubmit={handleSubmint}>
            <label htmlFor="">E-mail</label>
            <input
                type="email"
                name=""
                id="email"
                placeholder="seu email aqui"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}