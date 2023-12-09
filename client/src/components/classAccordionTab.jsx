import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Divider,
    Link
} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import {gql, useQuery} from "@apollo/client";




const QUERY_SUBJECT = gql`
query Subject($subjectId: ID!) {
  subject(subjectId: $subjectId) {
    name
    classification
    credit
    capacity
    absent_count
    late_count
    nothandle_count
    lecture_time
    lecture_date
    lecture_room
    users {
      _id
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
            if (props.data && props.data.user && props.data.user.isAdmin) {
                props.setTitle("6471ea1d8c0d64b3c26745d4");
                return "6471ea1d8c0d64b3c26745d4";
            } else if (props.data && props.data.user && props.data.user.subjects.length > 0) {
                props.setTitle(props.data.user.subjects[0]._id);
                return props.data.user.subjects[0]._id;
            } else {
                // Handle the case where props.data.user or props.data.user.subjects is null or empty.
                // You might want to provide a default value or handle it differently based on your requirements.
                return "defaultSubjectId";
            }
        }
    }
    const _id = get_id(props.title);
    const values = { subjectId : _id};
    const { data, loading, error } = useQuery(QUERY_SUBJECT, {
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
                            {/* data.subject가 존재하고, nothandle_count가 존재하면 해당 값을 보여줌 */}
                            내할일보기{' '}
      {data && data.subject && data.subject.nothandle_count
        ? `${data.subject.nothandle_count} 번`
        : '0 번'}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <Divider />
                <AccordionPanel py={2} fontSize="14px" fontWeight="600" height="200px" color="black" backgroundColor={"aliceblue"} >
                    <Link display="block"> list </Link>
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