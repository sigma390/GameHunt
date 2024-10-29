import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';

import { useState } from 'react';
import './App.css';
import GameGrid, { Platform } from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformList from './components/PlatformList';
import SortSelector from './components/SortSelector';
import { Genre } from './services/genreService';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchTxt: string;
}

function App() {
  const [gameQuery, setgameQuery] = useState<GameQuery>({} as GameQuery);

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
          <NavBar
            onSearch={(searchTxt) =>
              setgameQuery({ ...gameQuery, searchTxt: searchTxt })
            }
          />
        </GridItem>
        <Show above='lg'>
          <GridItem paddingX={5} paddingY={7} area='aside'>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginLeft={10}>
            <PlatformList
              selectedPlatform={gameQuery.platform}
              onSelectplatform={(platform) =>
                setgameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrderr={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setgameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>

          <GameGrid
            // selectedPlatform={gameQuery.platform}
            // selectedGenre={gameQuery.genre}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
