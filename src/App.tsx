import { Grid, GridItem, Show } from '@chakra-ui/react';

import { useState } from 'react';
import './App.css';
import GameGrid, { Platform } from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformList from './components/PlatformList';
import { Genre } from './hooks/useGenre';

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav nav' 'main main'`, //this are two cases where the grid is  rendered
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr', //takes entire Space on Small devices
          lg: `'200px' '1fr'`, //aside will take 200px and Remaining Will be Taken by Main
        }}
      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem paddingX={5} paddingY={7} area='aside'>
            <GenreList
              selectedGenre={selectGenre}
              onSelectGenre={(genre) => setSelectGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <PlatformList
            selectedPlatform={selectPlatform}
            onSelectplatform={(platform) => setSelectPlatform(platform)}
          />
          <GameGrid
            selectedPlatform={selectPlatform}
            selectedGenre={selectGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
