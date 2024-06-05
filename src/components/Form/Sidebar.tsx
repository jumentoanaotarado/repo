import { Stack, Box, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Button, ButtonGroup } from '@chakra-ui/react'



export function Sidebar() {

    return (

        <><Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">Geral</Text>
                    <Stack spacing="4" mt="8" align="stretch">



                        <Button type="submit" colorScheme='green'>Whatsapp

                            <Link href='https://wa.link/tn4c77' display="flex" color="gray.300" py="1">
                            <Button type="submit" colorScheme='green'>Whatsapp</Button>
                                <Text ml="4" fontWeight="medium"></Text>
                            </Link>

                        </Button>



                        <Link display="flex" color="gray.300" py="1">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Enquires</Text>
                        </Link>
                        <Link display="flex" color="gray.300" py="1">
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Call</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">Automation</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" color="gray.300" py="1">
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Form</Text>
                        </Link>
                        <Link display="flex" color="gray.300" py="1">
                            <Icon as={RiGitMergeLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Git</Text>
                        </Link>


                    </Stack>
                </Box>
            </Stack>
        </Box>
        </>


    );
}