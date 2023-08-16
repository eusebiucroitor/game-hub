import React, { useEffect, useState } from 'react'
import useGames from '../Hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardConteiner from './GameCardConteiner';


const GameGrid = () => {
 const {data,error,isLoading} =useGames();
 const skeletons = [1,2,3,4,5,6]
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} padding='10px' spacing={10}>
        {isLoading && skeletons.map(skeleton => <GameCardConteiner> <GameCardSkeleton key={skeleton} /></GameCardConteiner> ) }
        {data.map(game => 
         <GameCardConteiner>
           <GameCard key={game.id} game={game} />
         </GameCardConteiner>
          )}
    </SimpleGrid>
    </>
 )
}

export default GameGrid
