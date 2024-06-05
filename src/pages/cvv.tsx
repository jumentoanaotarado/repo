import { Button, Card, CardHeader, Flex, Heading, Input, Link, Stack } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import imgle from './cardsAccepted.jpeg';







type SignInFormData = {
  email: string;
  password: string;
}


export default function SignIn() {


  return (



    <Flex w="100vw" h="100vh" align="center" justifyContent="center">
      <Flex as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="white"
        border-radius="8"
        padding="8"
        borderRadius={8}
        flexDir="column">

        <Stack spacing='4'>

          <Image
            src={imgle}
            width={200}
            height={90}

          />


          <br />
          s


          <Input name='cvv' type='' placeholder="cvv" />

          <br />
          <br />
          <Link href="/user">
            <Button type='submit' mt="6" mr="6" colorScheme='orange' size='lg'>Enter</Button>
          </Link>

        </Stack>
      </Flex>
    </Flex>

  );
}




