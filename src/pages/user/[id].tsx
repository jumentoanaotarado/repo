import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    LightMode,
    SimpleGrid,
    Tooltip,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import * as yup from 'yup';

import { InputFormik } from '../../components/Form/Input';
import { useUpdateUser } from '../../hooks/useUpdateUser';
import { api } from '../../services/api';
import { useMe } from './useMe';
import Header from '../../components/Form/Header';

    
type RouteParams = {
    id: string;
}
  
  export default function EditUser() {
    const mainColor = useColorModeValue('facebook', 'gray.800');
    const router = useRouter()
    const {id} = router.query as RouteParams;
    const {data: me} = useMe();
  
    const {data: user, isLoading} = useQuery(['user', id], async () => {
      const res = await api.get('user/' + id);
      return res.data;
    }); 
  
    const updateUser = useUpdateUser(() => router.push('/user'));
  
    const handleUpdateUser = async (values) => {
      await updateUser.mutateAsync(values);
    }
  
    if(isLoading){
        return null;
    }

    return (
        
        <>

        <Header/>
      
        <Box>
          <Flex w="100%" maxWidth={"auto"} mx={"auto"}>
            <Box flex={1} borderRadius={8} bg={mainColor} p={8}>
              <Formik initialValues={user}
                      validateOnChange={false}
                      //validationSchema={updateUserValidationSchema}
                      onSubmit={handleUpdateUser}
              >
                {({handleSubmit, isSubmitting, handleChange, values, errors}) =>
                  <>
                    <form onSubmit={handleSubmit}>
        
                      <Divider my={6} borderColor={"gray.700"} />
  
                      <VStack spacing={8}>
                        <SimpleGrid minChildWidth={"240px"} spacing={8} w={"100%"}>
                          <InputFormik label={"Full Name"}
                                       name={"name"}
                                       important={"*"}
                                       type={"text"}
                                       onChange={handleChange}
                                       value={values.name}
                                       error={errors.name}
                          />
  
                          <Tooltip hasArrow label='Login ' shouldWrapChildren mt='3'>
                            <InputFormik label={"Unique Login"}
                                         name={"login"}
                                         important={"*"}
                                         type={"text"}
                                         onChange={handleChange}
                                         value={values.login}
                                         error={errors.login}
                            />
                          </Tooltip>
                          <InputFormik label={"Email"}
                                       name={"email"}
                                       important={"*"}
                                       type={"text"}
                                       onChange={handleChange}
                                       value={values.email}
                                       error={errors.email}
                          />
                        </SimpleGrid>
                      </VStack>
  
                      <Flex mt={8} justify={"flex-end"}>
                        <HStack spacing={4}>
                          <LightMode>
                            <NextLink href={"/users"} passHref>
                              <Button colorScheme={"red"}>cancel</Button>
                            </NextLink>
                          </LightMode>
  
                          <LightMode>
                            <Button type={"submit"} isLoading={isSubmitting} colorScheme={"facebook"}>save</Button>
                          </LightMode>
                        </HStack>
                      </Flex>
                    </form>
                  </>
                }
              </Formik>
            </Box>
          </Flex>
        </Box>
        </>
    );
  }

