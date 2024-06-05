import { Box, Button, Divider, Flex, Heading, HStack, Link, SimpleGrid, Tooltip, VStack } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import NextLink from 'next/link'

import Header from '../../components/Form/Header';
import { InputFormik } from '../../components/Form/Input';
import { Sidebar } from '../../components/Form/Sidebar';
import { useRouter } from 'next/router';
import { useCreateUser } from '../../hooks/useCreateUser';
import { type } from 'os';

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'




const initialValues = {
    name: '',
    login: '',
    email: '',
    password: '',
    telefone:'',
    password_confirmation: '',

}

type ErrorType = {
    title: string;
    details: string;
}

export const createUserValidationSchema = yup.object().shape({
    name: yup.string().required('Mandatory Field!'),
    login: yup.string().required('Mandatory Field!'),
    email: yup.string().required('Mandatory Field!').email('Invalid e-mail'),
    password: yup.string().required('Mandatory Field!'),
    password_confirmation: yup.string().oneOf([
       yup.ref('password')
    ], 'Passwords do not match')
});

const validationSchema = yup.object({
    name: yup.string().required(),
});



export default function CreateUser(){

   const router = useRouter()
   
   const createUser = useCreateUser(() => router.push('/user'))

    const handleCreateUser = async (values) => {
    await createUser.mutateAsync(values)
  }

    return(
    <Box>
        <Header/>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Formik initialValues={initialValues}
                            validateOnChange={false}
                            //validationSchema={createUserValidationSchema}
                            onSubmit={handleCreateUser}>   

                            {({handleSubmit, handleChange, values, errors}) =>
                                <>
                    
                        <form method='post' onSubmit={handleSubmit}>
                            
                            <Heading size="lg" fontWeight="larger">Register</Heading>
                            <Divider my="6" borderColor="gray.700"/>
                            <VStack spacing="8">
                                
                                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">        
                                    <InputFormik label={"Full Name"}
                                                name={"name"}
                                                important={"*"}
                                                type={"text"}
                                                onChange={handleChange}
                                                value={values.name}
                                                error={errors.name}/>
                                </SimpleGrid>

                                <SimpleGrid minChildWidth={"240px"} spacing={8} w={"100%"}>
                                    <Tooltip hasArrow label='Login de acesso parar logar na aplicação.' mt='3'>
                                    <InputFormik label={"E-mal"}
                                                name={"login"}
                                                important={"*"}
                                                type={"text"}
                                                onChange={handleChange}
                                                value={values.login}
                                                error={errors.login}
                                    />
                                    </Tooltip>
                                    <InputFormik label={"Phone"}
                                                name={"telefone"}
                                                important={"*"}
                                                type={"text"}
                                                onChange={handleChange}
                                                value={values.telefone}
                                                error={errors.telefone}/>
                                </SimpleGrid>
                                
                            </VStack>
                            
                            
                                <Flex mt="8" justify="flex-end">
                                        <HStack spacing="4">

                                        <Link href="/user" >
                                            <Button colorScheme="whiteAlpha">Cancel</Button>
                                        </Link>
                                            
                                        <Button 
                                            type={"submit"}
                                            colorScheme="pink"
                                            loadingText='Submitting'
                                            > PAGAMENTO
                                            </Button>

                                    </HStack>
                                </Flex>
                            
                            </form>
                            </>
                            }
                        </Formik>
                    </Box>
                </Flex>
            </Box>
    );
}

