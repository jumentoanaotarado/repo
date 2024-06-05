/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td, Th,
  Thead, Tr,
  Text,
  Spinner,
  Link,
  HStack,
  LightMode,
  useColorModeValue,
  IconButton
} from "@chakra-ui/react";

import React from "react";
import { Sidebar } from "../../components/Form/Sidebar";
import Header from "../../components/Form/Header";
import { RiAddLine, RiCloseLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Form/Pagination";
import NextLink from 'next/link';
import { ConfirmationDialog } from '../../components/Dialog/ConfirmationDialog';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { useUsers } from "../../hooks/useUsers";

import Image from 'next/image'



interface ColumnsProps {
  name: string;
}

const LinkItems: Array<ColumnsProps> = [
  { name: 'name' }
  
  

];



export default function UserList() {
  const mainColor = useColorModeValue('white', 'gray.800');

  const { data, isFetching, error } = useUsers();

  const deleteUser = useDeleteUser();

  const handleDeleteUser = async (userId: number) => {
    await deleteUser.mutateAsync(userId)
  }


  return (

    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">QUOTE</Heading>
          </Flex>

          <>

            
              <Thead>
                <Tr>
                  {LinkItems.map((columns, index) => (
                    <Th key={columns.name}>
                      <Flex
                        justify={index == 0 ? 'start' : 'center' && index == (LinkItems.length - 1) ? 'flex-end' : 'center'}>
                        {columns.name}
                      </Flex>
                    </Th>
                  ))}
                </Tr>

              </Thead>


              <Thead>
                <Tr>
                  {LinkItems.map((columns, index) => (
                    <Th key={columns.name}>

                      <Image
                        src={sam}
                        alt="a"
                        height={1000}
                      
                      />

                    </Th>
                  ))}
                </Tr>                
              </Thead>


              <Tbody>

                {data?.map(user => {


                  return (
                    <Tr key={user.id}>
                      <Td>
                        <Box>
                          <Text fontWeight={"bold"} color={mainColor == 'white' ? 'gray.700' : 'purple.400'}
                          >{user.name}
                          </Text>
                          <Text fontSize={"sm"} color={"gray.300"}>{user.email}</Text>
                        </Box>
                      </Td>

                      <Td pl={0} pr={0}>
                        <Flex justify={"center"}>
                          <Text>{user.cpf}</Text>
                        </Flex>
                      </Td>

                      <Td pl={0} pr={0}>
                        <Flex justify={"center"}>
                          <Flex justify={"center"}>
                            <Text>{user.age}</Text>
                          </Flex>
                        </Flex>
                      </Td>

                      <Td pl={0} pr={0}>
                        <Flex justify={"center"}>
                          <Text fontWeight={"bold"}>2020/01/20</Text>
                        </Flex>
                      </Td>

                      <Td >
                        <Flex justify={"flex-end"}>
                          <HStack>
                            <LightMode>
                              <NextLink
                                href={{
                                  pathname: '/user/[id]',
                                  query: { id: user.id },
                                }}
                                passHref>

                                <Button
                                  size={"md"}
                                  fontSize={"md"}
                                  colorScheme={"facebook"}
                                  leftIcon={<Icon as={RiPencilLine} fontSize={"16"} />}
                                >
                                  Editar
                                </Button>
                              </NextLink>
                            </LightMode>

                            <LightMode>
                              <ConfirmationDialog
                                onOk={() => handleDeleteUser(user.id)}

                                trigger={(onOpen) => <IconButton
                                  as={"a"}
                                  colorScheme={"red"}
                                  aria-label={"Call Segun"}
                                  size="sm"
                                  icon={<Icon as={RiCloseLine} fontSize={"16"} />}
                                  onClick={onOpen} />}

                                title={"Delete"} mainColor={mainColor} buttonText={"Delete"}
                                description='no description' />
                            </LightMode>
                          </HStack>
                        </Flex>
                      </Td>


                    </Tr>
                  )
                })}
              </Tbody>
            
          </>
          <Pagination />
        </Box>


        
      </Flex>

    </Box>
  );
}