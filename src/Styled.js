import styled from 'styled-components';
const FONTCOLOR= '#F78719'
const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100vh;
  background-color:#ffffff;
  @media (max-width:640px){
    grid-template-columns: 100%;
    margin-bottom:12rem;
  }

`;

const LeftGrid = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:640px) {
    order:2
  }
  
`;

const RightGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
background: #FFF;
box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
margin:2rem;
@media (max-width:640px){
  padding:2rem;
}
`;

const LoginForm = styled.form`
  max-width: 490px;
  // margin: auto 10vw;
  width: 100%;
  text-align: center;
`;

const FormControl = styled.div `
 display:flex;
 flex-direction:column;
 justify-content:flex-start;
 margin-bottom:1rem;
`
const FormLabel = styled.label `
display:block;
text-align:left
`

const Image = styled.img`
  max-width: 80%;
  height: auto;
`;

const LoginInput = styled.input`
  width: auto;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  flex:1
`;

const LoginButton = styled.button`
  width: 80%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-align:center
  display:block;
  margin:20px;
`;

const JustifyContainer = styled.div `
 display:flex;
 align-items:center;
 justify-content: space-between;


`

const UnstyledAnchor = styled.a `
 text-decoration:none;
 color:${FONTCOLOR}
`
const ColoredAnchor = styled.a `
 color:${FONTCOLOR}
`
const Hidepassword =  styled.img `
 position:absolute;
 top:50%;
 transform:translateY(-50%);
 right:2%;
`

const CheckBox = styled.input `
 background-color:green;
`
const Checkboxtext =  styled.span `
 margin:auto 0.2rem; 

`

export { FormControl,
  FormLabel,
  LoginForm,
  LoginContainer,
  LeftGrid,
  RightGrid,
  Image,
  LoginInput,
  LoginButton,
  JustifyContainer,
  UnstyledAnchor,
  ColoredAnchor,
  Hidepassword,
  CheckBox,
  Checkboxtext
};



