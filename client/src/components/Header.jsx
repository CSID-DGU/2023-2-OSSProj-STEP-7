// import SignIn from './SignIn';
import {
  Text,
} from "@chakra-ui/react";
import styled from 'styled-components';
import eclass_logo from '../Assets/Images/eclass_logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoginCheck, EventState,userInfoState } from '../components/Atom';
import {useContext, useEffect, useRef, useState} from "react";
import {AuthContext} from "../context/authContext";
import {gql, useQuery} from "@apollo/client";
import {logout} from '../components/utils';
import {UserInfo} from '../components/GlobalState';
import {IAuthForm} from '../components/IAuthForm';
import { useForm, SubmitHandler } from 'react-hook-form';



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
  margin: 33px 0;
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


const Header = () => {

  const context = useContext(AuthContext);
  const userId = context.user ? context.user.userId : null;

  const { data, loading, error } = useQuery(QUERY_USER, {
    variables: { userId: userId },
    onError(graphglError){
        console.log(graphglError);
    }
});


const [loginCheck, setLoginCheck] = useRecoilState(isLoginCheck);

const LogoutHandler = () =>{
  logout(); 
  setLoginCheck(false); }
  // context.user=null;

  const renderUserStatus = () => {

    if (data && data.user) {
      return (
        <HeaderWapper>
          <EclassLogo> </EclassLogo>
          <Text color="black" fontWeight="bold" fontSize={14} align="center">
            {data.user.username}
            <SignOutButton onClick={LogoutHandler}>로그아웃</SignOutButton>
          </Text>
        </HeaderWapper>
      );    
    } else {
      // 유저 정보가 없는 경우 (즉, 로그아웃 된 상태)
      return (
        <HeaderWapper>
          <EclassLogo> </EclassLogo>
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

export default Header;