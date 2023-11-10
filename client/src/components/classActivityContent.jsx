import {
    Box,
    Button,
    Heading,
    HStack, Progress,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, Tbody, Td, Text, Th, Thead, Tr
} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";

const ClassActivityContent = (props) => {
    const handleTabClick = (n) => {
        props.setTab(n);
    }

     return (
        <Box flex={1} h="850px">
            <Box h={100} p={10}>
                <HStack justify="space-between">
                    <Heading as="h2" fontSize={30}>학습 정보</Heading>
                    <Button>과목 정보</Button>
                </HStack>
            </Box>
            <Box h={550} p={5}>
                <Tabs variant='enclosed' colorScheme='gray' index={props.tab} onChange={handleTabClick}>
                    <TabList >
                        <Tab _selected={{ color: 'white', bg: 'blackAlpha.700' }} fontWeight="600">공지사항</Tab>
                        <Tab _selected={{ color: 'white', bg: 'blackAlpha.700' }} fontWeight="600">질의응답</Tab>
                    </TabList>
                    <TabPanels>
                    <TabPanel>
                            {/*Table*/}
                            <TableContainer  >
                                <Table variant='simple' >
                                    <Thead >
                                        <Tr >
                                            <Th bgColor="blackAlpha.800"></Th>
                                            <Th bgColor="blackAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">번호 </Text>
                                                </HStack>                                                
                                            </Th>
                                            <Th bgColor="blackAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">제목</Text>                                                   
                                                </HStack>                                            
                                            </Th>
                                            <Th bgColor="blackAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">파일</Text>                                                   
                                                </HStack>                                                
                                            </Th>
                                            <Th bgColor="blackAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">작성자</Text>                                                   
                                                </HStack>                                                
                                            </Th>
                                            <Th bgColor="blackAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">작성일</Text>                                                   
                                                </HStack>                                                
                                            </Th>
                                            <Th bgColor="blackAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">조회수</Text>                                                   
                                                </HStack>                                                
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody >                                        
                                    <Tr>
                                        <Td bgColor="whiteAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">. </Text>
                                                </HStack>                                                
                                        </Td>
                                        <Td bgColor="whiteAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="black">001 </Text>
                                                </HStack>                                                
                                        </Td>
                                        <Td bgColor="whiteAlpha.800">
                                                <HStack >        
                                               {/*<Link onClick={() => setContents(2,1)} display="block">첫 번째 공지</Link>  */}                                           
                                                <Text fontSize="15" textColor="black" Link to="s">첫 번째 공지 </Text>
                                                </HStack>                                                
                                        </Td>
                                        <Td bgColor="whiteAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="black">첨부파일 </Text>
                                                </HStack>                                                
                                        </Td>
                                        <Td bgColor="whiteAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="black">작성자1 </Text>
                                                </HStack>                                                
                                        </Td>
                                        <Td bgColor="whiteAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="black">2023-10-27 </Text>
                                                </HStack>                                                
                                        </Td>
                                        <Td bgColor="whiteAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="black">100 </Text>
                                                </HStack>                                                
                                        </Td>
                                     </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    )
}

export default ClassActivityContent;