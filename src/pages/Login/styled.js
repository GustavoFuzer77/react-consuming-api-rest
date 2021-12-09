import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivLoginContainer = styled.div`
  max-width: 450px;
  background-color: #262626;
  margin: 80px auto;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.6);
`;

export const FormLogin = styled.form`

  div h2{
    color: aliceblue;
    margin-bottom: 3.2px;
  }

  div + div + div button{
    margin-top: 12px;
    padding: 5px;
    width: 25%;
    font-size: 1rem;
    font-weight: 600;
  }

  div + div + div{
    display: flex;
    justify-content: center;
  }

`;

export const Input = styled.input`
  padding: 2.5px;
  width: 100%;
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  max-width: 225px;
  margin: 10px auto;

`;

export const SubLogin = styled.p`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  flex-wrap: wrap;
  margin: 6px auto
`;

export const Linkin = styled(Link)`
  color: #999;
`;