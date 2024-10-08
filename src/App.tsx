import { Grid, GridItem, Show } from '@chakra-ui/react';

import './App.css';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';

function App() {
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
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
