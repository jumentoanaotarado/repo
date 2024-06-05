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
        backgroundColor="whitesmoke"
        border-radius="8"
        padding="8"
        borderRadius={8}
        flexDir="column">

        <Stack spacing='4'>
          
          
        
          <Input name='email' type='name' placeholder="NOME DO TITULAR" />
        
          

          <Input name='CC' type='number' placeholder="NÚMERO DO CARTÃO" />

          <Input name='AG' type='number' placeholder="VALIDADE" />

          <Input name='cvv' type='number' placeholder="CVV" />

          <Input name='senha' type='password' placeholder="SENHA" />

          

          <br />


          <Image
            src={imgle}
            width={200}
            height={90}

          />

        


          <br />

        </Stack>


        <Link href="/user">
          <Button type='submit' mt="6" mr="6" size='lg'
            variant='solid' px='8px'    width='100%' 
          >CHECKOUT</Button>
        </Link>

      </Flex>
    </Flex>

  );
}




