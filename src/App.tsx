import { Grid, GridItem, Show } from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav nav' 'main main'`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area='nav' bg='coral'>
          Nav
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg='gold'>
            Aside
          </GridItem>
        </Show>

        <GridItem area='main' bg='dodgerblue'>
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
