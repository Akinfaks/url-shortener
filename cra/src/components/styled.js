import styled from 'styled-components';

export const InputMain = styled.input`
  width: 100%;

  background-color: transparent;
  /* position: absolute; */
  /* left:0; top: 0%; */
  /* background: rgba(255,255,255,1); */
  padding: 8px 20px;
  /* margin: 367px; */
  opacity: 1;
  padding-left: 20px;
  border: #B9B9B9 1px solid;
  
  /* position: absolute; */
  /* margin: 30px; */
  /* left: 0px; */

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
  -webkit-background-clip: text !important;  
  min-height: 30px;
`;

export const  Welcome = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  color: #343C6A;
`;

export const ButtonContainer = styled.button`
    background: rgba(18,50,136,1);
    padding: 8px 27px;
    opacity: 1;
    position: relative;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    overflow: hidden;
    color: rgba(255,255,255,1);
    /* align-self: center;
    justify-self: center; */
    /* width: 50%; */
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-direction: row;
  margin: 20px;
`;