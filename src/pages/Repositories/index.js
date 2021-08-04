import React, {useEffect, useState} from 'react';
import * as S from './Style';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

export default function Repositories() {
    const history = useHistory();
    const [repositories, setRespositories] = useState([]);
    const [URL, setURL] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        let repositoriesURL = localStorage.getItem('repositoriesURL');
        let usuario = localStorage.getItem('usuario')
        if (repositoriesName != null){
        repositoriesName = JSON.parse(repositoriesName);
        repositoriesURL = JSON.parse(repositoriesURL);
        setRespositories(repositoriesName);
        setURL(repositoriesURL);
        localStorage.clear()} else {
            history.push('/')

        }
    }, []); 
    return (
        <S.Container>
            <div class= "Repositorios">
        <S.Title>Repositórios</S.Title>
        <S.List>
        {URL.map(URLS => {
                return(
                    <a href ={ URLS } >
                        <S.ListItem>Acesse o Repositório: { URLS }</S.ListItem>
                    </a>
                )
            })}
        </S.List>
        <Link to= '/'>
        <S.button type="button">Voltar</S.button>
        </Link>
        </div>
        </S.Container>
    )
}

