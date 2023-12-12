import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Divider,
    Link,
    Text
} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import {gql, useQuery} from "@apollo/client";

const QUERY_ASSIGNMENT = gql`
query Subject($subjectId: ID!) {
  subject(subjectId: $subjectId) {
    users {
      _id
    }
    assignments {
        _id
        assignment_name
        assignment_status
        assignment_date
    }
  }
}
`

const ClassAccordionTab = (props) => {
    const setContents = (n, m) => {
        props.setContets(n, m)
    }

    function get_id(title) {
        if (title) return title;
        else {
            if (props.data && props.data.subject.assignments.length > 0) {
                props.setTitle(props.data.subject.assignments[0]._id);
                return props.data.subject.assignments[0]._id;
            } else {
                // Handle the case where props.data.user or props.data.user.subjects is null or empty.
                // You might want to provide a default value or handle it differently based on your requirements.
                return null;
            }
        }
    }

    const _id = String(get_id(props.title));
    const values = { assignmentId : _id };
    const { data, loading, error } = useQuery(QUERY_ASSIGNMENT, {
        variables: values,
        onError(graphglError){
            console.log(graphglError);
        }
    });

    return (
        <Accordion minW="200px"
                   h="850px"
                   color="whiteAlpha.700"
                   bgColor="blackAlpha.800"
                   borderColor="blackAlpha.300"
                   allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'aliceblue', color: 'black' }} >
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            학습목차
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600"  >
                    <Link onClick={() => setContents(0,0)} display="block"> 학습 목차 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link onClick={() => setContents(0,1)} display="block"> 강의 목록 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link onClick={() => setContents(0,2)} display="block"> 학습자료실 </Link>
                </AccordionPanel>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{bg: 'aliceblue', color: 'black' }}>
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            학습 정보
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600"  >
                    <Link onClick={() => setContents(2,0)} display="block"> 공지사항 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link onClick={() => setContents(2,1)} display="block"> 질의응답 </Link>
                </AccordionPanel>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'aliceblue', color: 'black'}}>
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            학습 활동 관리
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 수강생 조회 </Link>
                </AccordionPanel>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'aliceblue', color: 'black' }}>
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            학습 활동
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 출석 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 과제 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 토론 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 시험 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 설문 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 팀활동 </Link>
                </AccordionPanel>
                <Divider />
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'aliceblue', color: 'black' }}>
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            학습 현황
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 학습 현황 </Link>
                </AccordionPanel>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'aliceblue', color: 'black' }}>
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            과목 정보
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 강의 계획서 </Link>
                </AccordionPanel>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 과목 정보 </Link>
                </AccordionPanel>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{bg: 'aliceblue', color: 'black' }}>
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            성적
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block"> 성적 보기 </Link>
                </AccordionPanel>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'aliceblue', color: 'black' }}>
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            즐겨찾기
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600">
                    <Link display="block">  </Link>
                </AccordionPanel>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'aliceblue', color: 'black' }}>
                        <Box
                            as="span"
                            flex='1'
                            textAlign='left'
                            fontWeight="700"
                            fontSize="15px"
                        >
                            <EditIcon mr={2} />
                            내 할 일 보기
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600" height="200px" color="black" backgroundColor={"aliceblue"} >
                    <Link display="block">
                            {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <Box  border="1px" borderColor="gray.300" p={2} my={2} borderRadius="md">
                                    <Text>D - 7 </Text>
                                    <Text fontWeight="600" fontSize="16px">과제: Assignment-0</Text>
                                </Box>
                            ) : <>
                                <p>{data.subject && data.subject.assignments.assignment_name}</p>
                                <p>{data.subject && data.subject.assignments.assignment_status}</p>
                                <p>{data.subject && data.subject.assignments.assignment_date}</p>
                                </>
                            }
                    </Link>
                </AccordionPanel>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <Divider />
            </AccordionItem>

            
            
        </Accordion>
    )
}


export default ClassAccordionTab;