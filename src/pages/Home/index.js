import React, { useState } from 'react';
import axios from 'axios';
import * as S from './Style';
import { useHistory } from 'react-router-dom';
import Logo_Github from './Images/25231.png'

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

function handlePesquisa() { 
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      console.log(response.data)
      const repositoriesURL = []
      const repositoriesName = [];
      repositories.map((repositories => {
        repositoriesURL.push(repositories.html_url);
        repositoriesName.push(repositories.name);
      }));
      localStorage.setItem('repositoriesURL',JSON.stringify(repositoriesURL));
      localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
      setErro(false);
      history.push('./Repositories')
    })
    .catch(err => {
      setErro(true);
    })
}
return (

<>
<div class= "Main_page">
<a href= "https://github.com">
<img className= "Logo_github" src= {Logo_Github} alt= ""/>
</a>
<div class= "div-Escreva">
</div>
<S.input name = "usuario" Id = "usuario" value={usuario} classeName= "usuario" placeholder = "Usuário" onChange = {e => setUsuario(e.target.value)}/>
<S.button type="button" class="btnPesGit" onClick={handlePesquisa}>Pesquisar</S.button>
{erro ? <S.Errormsg>Usuário Não Encontrado</S.Errormsg>: ""}
</div>
<div class= "div-Escreva">

<p class= "Escreva">Escreva o nome de um usuário do Github e receba o seu repositório completo!</p>
</div>
</>

  );
}



export default App;

// [usuario, setUsuario]