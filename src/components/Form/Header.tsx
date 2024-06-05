import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
import Image from 'next/image'

import Imagesssss from 'next/image'
import React from 'react'
import samsonite from './pronto.png';


export default function Header() {


    return (

        <Flex
            as="header"
            w="100%"

            h="200"
            mx="auto"
            mt="4"
            px="6"
            align="center">

            <Image
                src={samsonite}
                width={600}
                height={345}

            />





            <Flex align="center" ml="auto">
                <HStack spacing="4">

                </HStack>
               
            </Flex>
        </Flex>

    );
}