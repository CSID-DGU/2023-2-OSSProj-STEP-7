import {Box, Button, Container, Divider, HStack, Spinner, StackDivider, Text} from "@chakra-ui/react";
import {gql, useQuery} from "@apollo/client";
import backImage from '../Assets/Images/back.png';


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

// const TitleBox = (props) => {
//     const basicBoxStyles = {
//         background:
//             'url(../Assets/Images/back.png) center/cover no-repeat' 
//     }
    const TitleBox = (props) => {
        const basicBoxStyles = {
            background: `url(${backImage}) center/cover no-repeat`
        };

    // function get_id(title) {
    //     if(title) return title;
    //     else {
    //         if(props.data.user.isAdmin) {
    //             props.setTitle("6471ea1d8c0d64b3c26745d4");
    //             return "6471ea1d8c0d64b3c26745d4"
    //         }
    //         else props.setTitle(props.data.user.subjects[0]._id);
    //         return props.data.user.subjects[0]._id;
    //     }

    // }
    function get_id(title) {
        if (title) return title;
        else {
            if (props.data.user && props.data.user.isAdmin) {
                props.setTitle("6471ea1d8c0d64b3c26745d4");
                return "6471ea1d8c0d64b3c26745d4";
            } else if (props.data.user && props.data.user.subjects.length > 0) {
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

    if(loading) return (
        <Container
            display={ props.hidden ? "none" : "flex" }
            p={0}
            maxW="80%"
            wrap="wrap"
            justify="center"
            align="center"
        >
            <Box
                sx={basicBoxStyles}
                w="inherit"
                h="270px"
                mx="auto"
                objectFit='cover'
            >
                <Spinner size='xl'/>
            </Box>
        </Container>)

    if (!loading) return (
        <>
        <Container
            display={props.hidden ? "flex" : "none" }
            maxW="80%"
            h="65px"
        />
        <Container
            display={ props.hidden ? "none" : "flex" }
            p={0}
            maxW="80%"
            wrap="wrap"
            justify="center"
            align="center"
        >
            <Box
                sx={basicBoxStyles}
                w="inherit"
                h="270px"
                mx="auto"
                objectFit='cover'
            >
                <Text //과목명 Text
                    mt="90px"
                    fontSize={45}
                    fontWeight="extrabold"
                    color="white"
                >
                    {/* {data.subject.name} */}
                    {data.subject && data.subject.name ? data.subject.name : "이름 없음"}
                </Text>
                <Container //과목 상세 정보 Box
                    bg="whiteAlpha.700"
                    maxW="80%"
                    p="10px"
                    flexWrap="wrap"
                    borderRadius={10}
                >
                    <HStack
                        justifyContent="space-between"

                    >
                        <Box
                            bg="blackAlpha.700"
                            w="250px"
                            h="60px"
                            borderRadius={5}
                            align="center"
                        >
                            <HStack
                                divider={<StackDivider />}
                                color="white"
                                justify="space-evenly"
                                p={1}
                                fontSize={12}
                            >
                                <Text>
                                    이수 구분
                                </Text>
                                <Text>
                                    학점
                                </Text>
                                <Text>
                                    교수정보
                                </Text>
                            </HStack>
                            <Divider />
                            <HStack
                                divider={<StackDivider />}
                                color="white"
                                justify="space-evenly"
                                p={1}
                                fontSize={12}
                            >
                                <Text>
                                    {/* {data.subject.classification} */}
                                    {data.subject && data.subject.classification ? data.subject.classification : "구분 없음"}
                                </Text>
                                <Text>
                                    {/* {data.subject.credit} 점 */}
                                    {data.subject && data.subject.credit ? data.subject.credit + " 학점" : "학점 없음"}
                                </Text>
                                <Button size="xs" align="center" bgColor="blackAlpha.700">
                                    조회하기
                                </Button>
                            </HStack>
                        </Box>
                        <Box
                            bg="whiteAlpha.700"
                            w="350px"
                            h="60px"
                            borderRadius={5}
                        >
                            <HStack
                                divider={<StackDivider borderColor="blackAlpha.700"/>}
                                color="blackAlpha.700"
                                justify="space-evenly"
                                p={1}
                                fontSize={12}
                            >
                                <Text>
                                    지각 횟수
                                </Text>
                                <Text>
                                    결석 횟수
                                </Text>
                                <Text>
                                    미처리
                                </Text>
                             
                            </HStack>
                            <Divider borderColor="blackAlpha.700"/>
                            <HStack
                                divider={<StackDivider borderColor="blackAlpha.700"/>}
                                color="blackAlpha.700"
                                justify="space-evenly"
                                p={1}
                                fontSize={12}
                            >
                                <Text ml={7}>
                                    {/* {data.subject.capacity} 명
                                    {data.subject && data.subject.capacity ? data.subject.capacity + ' 명' : '정원 정보 없음'} */}
                                    {data.subject && data.subject.late_count ? data.subject.late_count + ' 번' : '0 번'}
                                </Text>
                                <Text> 
                                    {data.subject && data.subject.absent_count ? data.subject.absent_count + ' 번' : '0 번'}
                                </Text>
                                <Text>
                                    {data.subject && data.subject.nothandle_count ? data.subject.nothandle_count + ' 번' : '0 번'}
                                </Text>
                            </HStack>
                        </Box>

                        <Box
                            bg="whiteAlpha.700"
                            w="350px"
                            h="60px"
                            borderRadius={5}
                        >
                            <HStack
                                divider={<StackDivider borderColor="blackAlpha.700"/>}
                                color="blackAlpha.700"
                                justify="space-evenly"
                                p={1}
                                fontSize={12}
                            >
                                <Text>
                                    수강정원
                                </Text>
                                <Text>
                                    수강생 조회
                                </Text>
                            </HStack>
                            <Divider borderColor="blackAlpha.700"/>
                            <HStack
                                divider={<StackDivider borderColor="blackAlpha.700"/>}
                                color="blackAlpha.700"
                                justify="space-evenly"
                                p={1}
                                fontSize={12}
                            >
                                <Text ml={7}>
                                    {/* {data.subject.capacity} 명 */}
                                    {data.subject && data.subject.capacity ? data.subject.capacity + ' 명' : '정원 정보 없음'}
                                   

                                </Text>
                                <Button size="xs" align="center" bgColor="blackAlpha.700" color="whiteAlpha.900">
                                    조회하기
                                </Button>
                            </HStack>
                        </Box>
                    </HStack>
                </Container>
            </Box>

        </Container>
        </>
    )
};

export default TitleBox;