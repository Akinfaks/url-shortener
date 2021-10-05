import React, { useState, createRef, useEffect } from 'react'
import styled from 'styled-components';
import { ButtonContainer, Welcome, TopContainer } from '../components/styled';

function HomeHook() {

  const [showLinks, setShowLinks] = useState(true);
  const linksRef = createRef(null);
  const tableRef = createRef(null)
  const [heightValue, setHeightValue] = useState(400);
  const [tableHeightValue, setTableHeightValue] = useState(400);
  const [timeoutTabRef, setTimeoutTableRef] = useState(false);

  const toggleButton = () => {
    setShowLinks(!showLinks);
  };
  

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    const tableHeight = tableRef.current.getBoundingClientRect().height;

    if (!heightValue && linksHeight)(
      setHeightValue(linksHeight)
    );

    if (!tableHeightValue && tableHeight)(
      setTableHeightValue(tableHeight)
    );

    if (linksRef.current){
      if (showLinks) {
        linksRef.current.style.height = `${heightValue}%`;
            tableRef.current.style.display = 'none';

        // linksContainerRef.current.style.height = `${linksHeight}px`;

      } else {
        // linksContainerRef.current.style.height = '0px';
        tableRef.current.style.display = `block`;

        linksRef.current.style.height = '0px';

        // setTimeout(()=>{
          // setTimeoutTableRef(x=>!x)

        // }, 2000);

        // if (timeoutTabRef) {
          // setTimeoutTableRef(x=>!x)

        // }
        
      }  
    }

    
  }, [,showLinks]);


  const HeaderTop = ({showLinks, toggleButton})=>(
    <TopContainer>
      <Welcome>We help you to create a short and precise url</Welcome>

      <ButtonContainer
          // as={Link}               
          onClick={toggleButton}
          // to="/user/addreceivers"
        >
          {/* <SpanText> */}
          {showLinks?  'List':'Back'}
          {/* </SpanText> */}
      </ButtonContainer>

  </TopContainer>

  )
  return {linksRef, tableRef, showLinks, toggleButton, HeaderTop }

}

export default HomeHook;
