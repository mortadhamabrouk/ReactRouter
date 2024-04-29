import {Routes, Route, Link } from "react-router-dom";
import './styles.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './Componets/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addmovies from './Componets/Addmovies';
import Filter from './Componets/Filter';
import MovieDetails from './Componets/MovieDetails';
import MovieCard from './Componets/MovieCard';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [SearchRate,setSearchRate]= useState(0);
  const params = useParams();
  const [movies, setMovies] = useState([
    {
      "Name": "Seigneur des anneaux 12 : La Communauté de l'anneau",
      "description": "Le Seigneur des anneaux : La Communauté de l'anneau est un film américano-néo-zélandais réalisé, coproduit et coécrit par Peter Jackson sorti en 2001. C'est le premier volet de la trilogie Le Seigneur des anneaux et l'adaptation du livre La Communauté de l'Anneau de JRR Tolkien",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRZe4jNlcI09WugmiGhAbhHh4ASo-OVBFGpIv6J9JF6AEhk_C",
      "note": 8.5 ,
      "titre": "La Communauté de l'anneau",
    
      "Resume":"Pour sauver le monde d'une force maléfique toute-puissante, un groupe de courageux aventuriers doit détruire un anneau sur le lieu même de sa création. Remarquable adaptation par Peter Jackson du premier épisode de la trilogie du Seigneur des anneaux, La Communauté de l'Anneau",

      "thriller":<iframe width="560" height="315" src="https://www.youtube.com/embed/nalLU8i4zgs?si=6xOohcQ57SR89nEK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },


    {
      "Name": "Le Seigneur des anneaux : Les Deux Tours",
      "description": "Le Seigneur des anneaux : Les Deux Tours est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2002. Il est adapté du deuxième tome de l'œuvre du même nom de J.R.R. Tolkien.",
      "image": "https://fr.web.img6.acsta.net/medias/nmedia/00/02/54/95/affiche2.jpg",
      "note": 10 ,
      "thriller":<iframe width="560" height="315" src="https://www.youtube.com/embed/c9blKqmyeV4?si=9EfEl-DeRRGmSzc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
    },
    {
      "Name": " Le Retour du roi",
      "description": "1Le Seigneur des anneaux : Le Retour du roi (The Lord of the Rings: The Return of the King) est un film américano-néo-zélandais réalisé par Peter Jackson, sorti en 2003. Adapté du livre Le Retour du roi de J. R. R. Tolkien, il incorpore également des événements du livre précédent, Les Deux Tours. C'est le troisième volet de la trilogie Le Seigneur des anneaux, après La Communauté de l'anneau et Les Deux Tours.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRH-WZAM0Jb2zo0yGMTdIdstlzh2jbSsw8HCDCImRFd1GWqC6B",
      "note": 3,
      "thriller":<iframe width="560" height="315" src="https://www.youtube.com/embed/RCuDRcK0BBM?si=A51EMgGrNoKiXFwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    }
  ]);
  useEffect(()=>{
    console.log(SearchRate)
  },[SearchRate])

  return (
    <div className="App">

<Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Movies App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Filter SearchRate={SearchRate} setSearchRate={setSearchRate} titel={setSearchValue} />
            <Addmovies setMovies={setMovies} movies={movies}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<Routes>
       <Route path='/' element={
        <>
          <h3>LISTES DE FILMS</h3>
        
      
      <MovieList movies={movies.filter((el)=>
el.Name.toUpperCase().trim().includes(searchValue.toUpperCase().trim())&& el.note>=SearchRate)}/>



        </>

       }></Route>


       <Route path="/donnee/:name" element={<MovieDetails movies={movies}/>}/>

       
       
     </Routes>
    

    </div>
  );
}

export default App;