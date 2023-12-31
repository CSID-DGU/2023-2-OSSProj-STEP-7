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
    Tabs, Tbody, Td, Text, Th, Thead, Tr,
    Spacer,IconButton, Image
    
} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import calendar from "./calendar"
import icon from '../Assets/Images/calendar2.jpeg';
// import Link from 'next/link';
var react_router_dom = require("react-router-dom");



const ClassLearningContent = (props) => {

    var navigate = (0, react_router_dom.useNavigate)();

var moveToCalendar = function (e) {
    navigate("/Dal/");
    // navigate("/class/" + subjectId, { state: { subjectId: subjectId, subjectName: subjectName } });

};

    const handleTabClick = (n) => {
        props.setTab(n);
    }
    return (
        <Box
            flex={1}
            h="850px"
        >
            <HStack>
            <Box
         
                h={100}
                p={10}

            >
                <HStack justify="space-between">
                    <Heading as="h2" fontSize={30}>학습 목차  </Heading>

                </HStack>
            </Box>
            <Spacer />
            <Box
               
                h={100}
                p={10} >

      
              < IconButton
              aria-label="calendar"
              icon={<Image src={icon}  boxSize="150%" borderRadius="5px"></Image> }
              onClick={moveToCalendar}
            
              />
                {/* <ClassButton onClick={moveToCalendar} value={subjectId} data-subject-name={subjectName}>강의실 가기</ClassButton> */}
        
             </Box>
             </HStack>
            <Box
                h={550}
                p={5}
            >
                <Tabs variant='enclosed' colorScheme='gray' index={props.tab} onChange={handleTabClick}>
                    <TabList >
                        <Tab _selected={{ color: 'white', bg: 'blackAlpha.700' }} fontWeight="600">학습 목차</Tab>
                        <Tab _selected={{ color: 'white', bg: 'blackAlpha.700' }} fontWeight="600">강의 목록</Tab>
                        <Tab _selected={{ color: 'white', bg: 'blackAlpha.700' }}  fontWeight="600">학습자료실</Tab>
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
                                                    <Text fontSize="15" textColor="white">X주차 </Text>
                                                    <Button colorScheme="orange" size="xs">학습목표 보기</Button>
                                                </HStack>
                                                <Text textColor="white">2023-XX-XX ~ 2023-XX-XX</Text>
                                            </Th>
                                            <Th bgColor="blackAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">X주차</Text>
                                                    <Button colorScheme="orange" size="xs">학습목표 보기</Button>
                                                </HStack>
                                                <Text textColor="white">2023-XX-XX ~ 2023-XX-XX</Text>
                                            </Th>
                                            <Th bgColor="blackAlpha.800">
                                                <HStack >
                                                    <Text fontSize="15" textColor="white">X주차</Text>
                                                    <Button colorScheme="orange" size="xs">학습목표 보기</Button>
                                                </HStack>
                                                <Text textColor="white">2023-XX-XX ~ 2023-XX-XX</Text>
                                            </Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody >
                                        <Tr >
                                            <Td fontWeight="700" textAlign="center" bgColor="#AAAFBE" >출 석 <EditIcon mr={2} /></Td>
                                            <Td p={0} >
                                                <Box w="100%" h="120px" p={3} bgColor="#DFF2C2">
                                                    <Text textColor="#2A410E" fontWeight="600" fontSize="12px">
                                                        X주차 1강
                                                    </Text>
                                                    <Text textColor="#2A410E" fontWeight="700" fontSize="12px">
                                                        강의 기간 : 2023-XX-XX ~ 2023-XX-XX
                                                    </Text>
                                                    <Progress mt={4} value={100} size='md' />
                                                </Box>
                                                <Box w="100%" h="120px" p={3} bgColor="#DFF2C2">
                                                    <Text textColor="#2A410E" fontWeight="600" fontSize="12px">
                                                        X주차 2강
                                                    </Text>
                                                    <Text textColor="#2A410E" fontWeight="700" fontSize="12px">
                                                        강의 기간 : 2023-XX-XX ~ 2023-XX-XX
                                                    </Text>
                                                    <Progress mt={4} value={100} size='md' />
                                                </Box>
                                            </Td>
                                            <Td p={0} >
                                                <Box w="100%" h="120px" p={3} bgColor="#DFF2C2">
                                                    <Text textColor="#2A410E" fontWeight="600" fontSize="12px">
                                                        X주차 1강
                                                    </Text>
                                                    <Text textColor="#2A410E" fontWeight="700" fontSize="12px">
                                                        강의 기간 : 2023-XX-XX ~ 2023-XX-XX
                                                    </Text>
                                                    <Progress mt={4} value={100} size='md' />
                                                </Box>
                                                <Box w="100%" h="120px" p={3} bgColor="#DFF2C2">
                                                    <Text textColor="#2A410E" fontWeight="600" fontSize="12px">
                                                        X주차 2강
                                                    </Text>
                                                    <Text textColor="#2A410E" fontWeight="700" fontSize="12px">
                                                        강의 기간 : 2023-XX-XX ~ 2023-XX-XX
                                                    </Text>
                                                    <Progress mt={4} value={100} size='md' />
                                                </Box>
                                            </Td>
                                            <Td p={0} >
                                                <Box w="100%" h="120px" p={3} bgColor="#DFF2C2">
                                                {/* <Box w="100%" h="120px" p={3} bgColor="#DFF2C2" border="2px solid #4CAF50"> */}
                                                    <Text textColor="#2A410E" fontWeight="600" fontSize="12px">
                                                        X주차 1강
                                                    </Text>
                                                    <Text textColor="#2A410E" fontWeight="700" fontSize="12px">
                                                        강의 기간 : 2023-XX-XX ~ 2023-XX-XX
                                                    </Text>
                                                    <Progress mt={4} size='md' value={100} />
                                                </Box>
                                                <Box w="100%" h="120px" p={3} bgColor="#DFF2C2">
                                                {/* <Box w="100%" h="120px" p={3} bgColor="#DFF2C2" border="2px solid #4CAF50"> */}
                                                    <Text textColor="#2A410E" fontWeight="600" fontSize="12px">
                                                        X주차 2강
                                                    </Text>
                                                    <Text textColor="#2A410E" fontWeight="700" fontSize="12px">
                                                        강의 기간 : 2023-XX-XX ~ 2023-XX-XX
                                                    </Text>
                                                    <Progress isAnimated mt={4} size='md' value={100} />
                                                </Box>
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td fontWeight="700" textAlign="center" bgColor="#AAAFBE">공지사항 <EditIcon mr={2} /></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                        </Tr>
                                        <Tr>
                                            <Td fontWeight="700" textAlign="center" bgColor="#AAAFBE">학습자료실 <EditIcon mr={2} /></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                        </Tr>
                                        <Tr>
                                            <Td fontWeight="700" textAlign="center" bgColor="#AAAFBE">과제 <EditIcon mr={2} /></Td>
                                            <Td></Td>
                                            <Td ></Td>
                                            <Td></Td>
                                        </Tr>
                                        <Tr>
                                            <Td fontWeight="700" textAlign="center" bgColor="#AAAFBE">팀 활동 <EditIcon mr={2} /></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                        <TabPanel>

                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Box>
    )
}

export default ClassLearningContent;