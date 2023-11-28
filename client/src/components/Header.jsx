// import SignIn from './SignIn';
import styled from 'styled-components';
import eclass_logo from '../Assets/Images/eclass_logo.png'
import { Link } from 'react-router-dom';

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


const SignUpButton = styled(Link)`
  margin 33px 0;
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

  return(
    <HeaderWapper>
      <EclassLogo to='/'></EclassLogo>

      <SignInButton to='/login'>로그인</SignInButton>
      {/* <SignUpButton>회원가입</SignUpButton> */}
    </HeaderWapper>
  )
}

export default Header;
