import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformList from '../components/PlatformList';
import SortSelector from '../components/SortSelector';

function Homepage() {
  // const [gameQuery, setgameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: ` 'main main'`, //this are two cases where the grid is  rendered
          lg: ` "aside main"`,
        }}
        templateColumns={{
          base: '1fr', //takes entire Space on Small devices
          lg: `'200px' '1fr'`, //aside will take 200px and Remaining Will be Taken by Main
        }}
      >
        <Show above='lg'>
          <GridItem paddingX={5} paddingY={7} area='aside'>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameHeading />
          <HStack marginLeft={10}>
            <PlatformList />
            <SortSelector />
          </HStack>

          <GameGrid
          // selectedPlatform={gameQuery.platform}
          // selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default Homepage;
