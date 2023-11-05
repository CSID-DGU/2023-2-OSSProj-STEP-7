import {
    Box,
    Container,
    Flex,
} from "@chakra-ui/react";
import { useState } from "react";

import ClassAccordionTab from "../components/classAccordionTab";
import ClassActivityContent from "../components/classActivityContent";
import ClassLearningContent from "../components/classLearningContent";
import ClassTitleBox from "../components/classTitleBox";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const Class = (props) => {

    const [index, setIndex ] = useState(0);
    const [tab, setTab ] = useState(0);
    const setContents = (n, m) => {
        setIndex(n);
        setTab(m);
    }

    return (<>
            <NavBar  user={props.user} isLogin={props.isLogin} setToken={props.setToken} setUser={props.setUser} setIsLogin={props.setIsLogin}/> {/* 네비게이션 컴포넌트 */}
        <ClassTitleBox />  {/*메인 과목명 Container*/}

        <Container
            maxW="80%"
            p={0}
        >
            <Flex>
                <ClassAccordionTab setContets={setContents}/>
                {(index == 0) ? <ClassLearningContent tab={tab} setTab={setTab}/> : <Box />}
                {(index == 2) ? <ClassActivityContent tab={tab} setTab={setTab}/> : <Box />}

                </Flex>
            <Footer />
        </Container>
    </>)
}
export default Class; 

