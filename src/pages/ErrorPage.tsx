import { Box, Heading, Text } from '@chakra-ui/react';
import { BiError } from 'react-icons/bi';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Box padding={5} placeItems={'center'} justifyContent={'center'}>
        <div className=' border-2 w-96 h-auto shadow-glow-red  rounded-md p-5  mt-56 justify-items-center items-center '>
          <div className=' flex '>
            <Heading>Oops</Heading>
            <BiError className=' text-4xl mt-2 ml-2 text-red-600' />
          </div>

          <Text className='mt-4 text-2xl'>
            {isRouteErrorResponse(error)
              ? 'Page Does Not Exist'
              : 'Unexpected Error'}
          </Text>
        </div>
      </Box>
    </>
  );
};

export default ErrorPage;
