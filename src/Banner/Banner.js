import React, {useState}from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from '../Search/Search';

function Banner() {

    const [showSearch, setShowSearch] = useState (false);


    return (
        <div className='banner'>
         <div className ='banner_search'>
            {showSearch && <Search />}

          
        <Button onClick ={() =>
        setShowSearch(!showSearch)}
        className= 'banner_searchButton'
        variant='outlined'> {showSearch ? "Esconder" : "Procurar Datas"}
        </Button>
       
        
        </div>


        
            <div className ='banner_info'>
                <h1>Saia da caixinha</h1>
                <h5> Planeje uma hospedagem  diferentona</h5>
            <Button variant='outlined'> Explore aos arredores
            </Button>
            
            
            
            </div>
        </div>
    )
}

export default Banner
