import React, { useEffect, useState } from 'react';
import { callApi } from './call-api';
import HeroListItem from './components/HeroListItem';
import { useHeroes } from './hooks/useHeroes';


function HeroesList() {
  const { heroes, loading, errors, toggleAvailablity } = useHeroes();

  if(errors) {
    return (
      <>
        <h2>Heroes</h2>
        <p>{errors}</p>
      </>
    );
  }

  if(loading) {
    return (
      <>
        <h2>Heroes</h2>
        <div className='loader'></div>
        <p className='loading-text'>Loading...</p>
      </>
    );
  }

  return (
    <div>
      <h2>Heroes</h2>
      <ol className="heroes-list">
        {heroes.map(hero => (
          <HeroListItem 
          key={hero.id}
          id={hero.id}
          name={hero.name}
          available={hero.available}
          toggleAvailablity={toggleAvailablity}
          />
        ))}
      </ol>
    </div>
  );
}

export default HeroesList;
