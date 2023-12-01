// import SignIn from './SignIn';
import styled from 'styled-components';
import eclass_logo from '../Assets/Images/eclass_logo.png'
import { Link } from 'react-router-dom';
import {useContext, useState, useEffect} from "react";
import { useRecoilValue } from 'recoil';
import {AuthContext, AuthProvider} from "../context/authContext";
// import { isLoginCheck, EventState} from '../components/Atom';
import {useMutation, gql, useQuery} from "@apollo/client";
import {Text} from "@chakra-ui/react";

  const QUERY_USER = gql`
  query User($userId: ID!) {
     user(userId: $userId) {
      email
      isAdmin
      _id
      subjects {
        _id
      }
      username
    }
  }
`
// const LOGIN_USER = gql`
//   mutation Login($loginId: String!, $password: String!) {
//     login(id: $loginId, password: $password) {
//         token
//         user {
//           _id
//           isAdmin
//           username
//           subjects {
//             _id
//           }
//         }
//     }
//   }
// `
const Head = () => {
    // user가 null이 아닌 경우에만 'userId' 속성을 읽음
    // const userId = user && user.userId;

// const { logout } = useContext(AuthContext);
  const context = useContext(AuthContext);
  const values = { userId : context.user.userId };
  const { data, loading, error } = useQuery(QUERY_USER, {
      variables: values,
      onError(graphglError){
          console.log(graphglError);
      }
  });

  const handleLogout = () => {
      context.logout();

    };
  


const HeaderWapper = styled.div`
  height: 100px;
  display: flex;
  margin-left: 5rem;
`;
const EclassLogo = styled(Link)`
  position: relative;
  top: 0;
  botton: 0;
  margin: auto 10px auto 20px;
  height: 42px;
  width: 240px;
  background-image: url(${eclass_logo});
  background-size: cover;
`;

const SignInButton = styled(Link)`
  margin 33px 0;
  text-align: center;
  color: #fff;
  padding: 7px 16px;
  border: none;
  border-radius: 2px;
  background-color:#e72f4b;
  font-size: 12px;
  cursor: pointer;
`;

const SignOutButton = styled.button`
  margin: 33px 0;
  text-align: center;
  color: #fff;
  padding: 7px 16px;
  border: none;
  border-radius: 2px;
  background-color: #666;
  font-size: 12px;
  cursor: pointer;
`;

  // 로그인 상태에 따라 UI 변경
  const renderUserStatus = () => {


    if (context.user) {
      // 로그인된 경우
      return (
        <>
            <HeaderWapper>
            <EclassLogo > </EclassLogo>
            <Text color="black" fontWeight="bold" fontSize={14} align="center">
                            {data.user.username}     
          
            <SignOutButton onClick={handleLogout}>로그아웃</SignOutButton>
            </Text>
          </HeaderWapper>
        </>
      );

    
    } else {
      // 로그인되지 않은 경우
      return (
        <HeaderWapper>
            <EclassLogo > </EclassLogo>
          <SignInButton to='/login'>로그인</SignInButton>
        </HeaderWapper>
      );
    }
  };

  return (
    <div>
      {/* 기타 헤더 내용 */}
      {renderUserStatus()}
    </div>
  );
};

export default Head;
