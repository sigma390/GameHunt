import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';

import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformList from './components/PlatformList';
import SortSelector from './components/SortSelector';
import useGameQueryStore from './store';

function App() {
  // const [gameQuery, setgameQuery] = useState<GameQuery>({} as GameQuery);
  const { gameQuery, setSearchText, setGenreId, setPlatformId, setSortOrder } =
    useGameQueryStore();
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
          <NavBar onSearch={(searchTxt) => setSearchText(searchTxt)} />
        </GridItem>
        <Show above='lg'>
          <GridItem paddingX={5} paddingY={7} area='aside'>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) => setGenreId(genre.id)}
            />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginLeft={10}>
            <PlatformList
              selectedPlatformId={gameQuery.platformId}
              onSelectplatform={(platform) => setPlatformId(platform.id)}
            />
            <SortSelector
              sortOrderr={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
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
