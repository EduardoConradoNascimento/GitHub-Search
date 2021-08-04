import styled from 'styled-components'





export const input = styled.input `
border: 1px solid #ddd;
border-radius: .5rem 0 0 .5rem;
height: 2rem;
padding: 0 .5rem;
border: 1 rem;
position: relative
`

export const button = styled.button `
position: relative;
height: 2rem;
border: 2px solid #000;
border-radius: 0 .25rem .25rem 0;
padding-right: 15px;
padding-left: 15px;
padding-bottom: 26px;
padding-top: 4.6px;
background-color: #0c182b;
color: white;
border: 2px solid #5480c4;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 16px;
&:hover{
 background-color: #4CAF50;
color: white;
cursor:pointer;
}

`;

export const Errormsg = styled.span`
display: block;
font-size: 1rem;
color: #c43346;
font-weight: 600;
margin-top: 1rem;
`
export const Main_div = styled.div`
position:static;
align-items: center;
background-color: rgb(140, 180, 160);
`

export const Main = styled.main`
position:static;
align-items: center;
background-color: rgb(140, 180, 160);

` 