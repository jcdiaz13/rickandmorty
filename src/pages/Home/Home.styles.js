import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardsContainer = styled.div`
  display: grid;
  gap: 5%;
  width: 90%;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  align-items: stretch; 
  flex-grow: 1; /* Permitir que Box crezca para ocupar el espacio disponible */
`;

export const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: inherit;
  display: flex; 
  flex-direction: column;
  height: 100%; 
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #44281d;
  width: 100%;
  min-height: 100vh; /* Asegúrate de que ocupe al menos toda la altura de la ventana */
`;

export const Header = styled.div`
  width: 100%;
  background-color: #f0e14a;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    color: #44281d;
    font-weight: bold;
    text-align: center;
    font-size: 4em;
    margin: 80px 0;
  }
`;

export const Card = styled.div`
  border: 3px black solid;
  border-radius: 25px;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;
  width: 100%; 
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 

  h2 {
    border-top: 3px black solid;
    background-color: #f0e14a;
    margin: 0;
    padding: 10px 0;
    width: 100%; 
    box-sizing: border-box;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: auto; 
  }

  img {
    width: 100%; 
    height: auto; 
    display: block; 
    margin: 0; 
    object-fit: cover;
  }
`;

export const Footer = styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  height: 200;
  text-align: center; 
  color: #f0e14a; 
  padding: 10px 0; 
`;
