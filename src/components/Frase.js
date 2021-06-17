import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types'

const ContenedorFrase = styled.div`
    padding:2rem;
    border-radius:.5rem;
    background-color:#fff;
    max-width:800px;
    @media (min-width:992px){
        margin-top:10rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left:4rem;
        font-size:clamp(1.2rem, 2vw, 2rem);

        &::before{
            content: open-quote;
            font-size: 10rem;
            position:absolute;
            left: -1rem;
            top: -2rem;

        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size:clamp(1rem, 2vw, 1.6rem);
        text-align:right;
        color: #666;
        margin-top: 2rem;
        font-weight:bold;
    }
    
`;

const Frase = ({frase}) => {
    
    if(Object.keys(frase).lenght === 0) return null;

    return ( 
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
        
     );
}

Frase.propTypes = {
    frase: PropTypes.object.isRequired
}

 
export default Frase;