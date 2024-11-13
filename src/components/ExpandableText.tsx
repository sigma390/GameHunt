import { useState } from 'react';

import { Button, Text } from '@chakra-ui/react';

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  const description = expanded ? children : children?.substring(0, limit);

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  return (
    <>
      <Text>
        {description}
        {!expanded && children.length > limit && '...'}

        {/* Toggle button */}
        {children.length > limit && (
          <Button
            className='shadow-glow-yellow hover:bg-yellow-600'
            onClick={() => setExpanded(!expanded)}
            _hover={{ bg: 'yellow.500' }}
            rounded={'md'}
            size={'xs'}
            fontWeight={'bold'}
            ml={2} // Add some spacing from the description text
          >
            {expanded ? 'Show Less' : 'Show More'}
          </Button>
        )}
      </Text>
    </>
  );
};

export default ExpandableText;
