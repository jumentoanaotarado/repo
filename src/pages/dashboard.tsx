import Header from "../components/Form/Header";
import dynamic from 'next/dynamic'
import { Box, Flex, Img, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Form/Sidebar";
import React from "react";

import { Image } from '@chakra-ui/react'



const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options = {
    chart: {
        toolbar: {
            show: false,

        },
        zoom: {
            enabled: false,

        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false,

    },
    dataLabels: {
        enabled: "false"
    },
    tooltip: {
        enabled: "false"
    },
    xaxis: {
        type: 'datetime'
    },
    axisBorder: {
        color: theme.colors.gray[600]
    },
    axisTicks: {
        color: theme.colors.gray[600]
    },
    categories: [

        '2021-03-18T00:00:00.000Z',
        '2021-03-19T00:00:00.000Z',
        '2021-03-20T00:00:00.000Z',
        '2021-03-21T00:00:00.000Z',
        '2021-03-22T00:00:00.000Z',
        '2021-03-23T00:00:00.000Z',

    ]
}


const series = [{
    name: 'series', data: [31, 120, 10, 28, 61, 18, 109]
}
]

export default function Dashboard() {

    return (

        <Flex direction="column" h="100vh">
            <Header />


            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">

                    <Box p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4">
                        <Text fontSize="lg" mb="4">Parental Educative Control</Text>


                        <Image src="https://images.squarespace-cdn.com/content/v1/5c5b174f01232c324917f3b2/1615163279265-BFLUU60CWLPIPI27OVW9/Screen+Shot+2021-03-06+at+4.48.31+PM.png?format=1500w"
                            alt='Dan Abramov'
                            width={420} height={520}
                        />
                    </Box>

                    <Box p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4">
                        <Text fontSize="lg" mb="4">Double-cross Investigation</Text>


                        <Image src="https://detetiveluciana.com.br/wp-content/uploads/2020/11/detetive-de-traicao-1000x600.jpg"
                            alt='Dan Abramov'
                            width={285} height={280}


                        />
                        <br />

                        <Text fontSize="lg" mb="4">Double-cross Investigationasdadsada
                            asdadadsadadsa
                            asdadassdadsdad
                            asdsadasdasdasdas
                            adsadasdadssd</Text>

                    </Box>


                    <Box p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4">
                        <Text fontSize="lg" mb="4">Parental Educative Control</Text>


                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPOMhko8g_3ef734LhJJxyOy0m0uH6QycaA&s"
                            alt='Dan Abramov'
                            width={340} height={280}
                        />

                        <br />
                        <Text fontSize="lg" mb="4">Double-cross Investigationasdadsada
                            asdadadsadadsa
                            asdadassdadsdad
                            asdsadasdasdasdas
                            adsadasdadssd</Text>
                    </Box>


                    <Box p="8"
                        bg="gray.800"
                        borderRadius={8}
                        pb="4">
                        <Text fontSize="lg" mb="4">Parental Educative Control</Text>


                        <Image src="https://palmafc.com/wp-content/uploads/2015/05/Financial-investigations-AS.jpg"
                            alt='Dan Abramov'
                            width={300} height={285}
                        />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>


    );
}