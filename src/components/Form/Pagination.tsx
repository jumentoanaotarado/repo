import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";





export function Pagination(){
    
    return(
        <Stack
           direction="row"
           spacing="6"
           mt="8"
           justify="space-between"
           align="center">

            <Box fontWeight="normal">
                <strong>0</strong>-<strong> 10 </strong> de <strong>100</strong>
            </Box>

            <Stack direction="row" spacing="2">
                <Button size="sm" fontSize="xs" colorScheme="pink" disabled _disabled={{
                    bg:'pink.500',
                    cursor: 'default',
                }}>
                    1
                </Button>
                <Button size="sm" fontSize="xs" colorScheme="pink" bg="gray.700" _hover={{
                    bg:'gray.500',
                    cursor: 'default',
                }}>
                    2
            </Button>
        </Stack>
    </Stack>



    );
}