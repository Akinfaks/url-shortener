import React from 'react'
import styled from 'styled-components';
import HomeHook from '../hooks/HomeHook';
import TableHook from '../hooks/TableHook';
import ShortenerForm from './ShortenerForm';
import Table from './TTable';

const DocCard = styled.div`
    /* background: orange; */
    overflow: hidden;
    color: #000;   
    line-height: 50px;
    /* border: 1px solid red; */
    transition: all .5s ease-in-out;
    /* min-height: 200px; */
    /* width: 85%; */
      /* height: 400px; */
    & .item {
        height: 500px;
    }
    width: 100%;
    position: relative;

`;
//function, Scalability && load testing
export default function Home(props) {
    
    const { Spinner, data, loading, getList } = TableHook();

    const {linksRef, tableRef, showLinks, toggleButton, HeaderTop } = HomeHook(getList);

    return (
        <div>
            
                <HeaderTop toggleButton = {toggleButton} showLinks = { showLinks } />


                    <div className=""  style={{display: 'flex',  justifyContent: 'space-between', position: 'relative', top: 50}} ref={linksRef}  >

                        <DocCard  className='item' >

                            <ShortenerForm />
                        
                        </DocCard>
                
                    </div>

                
                    <div style={{zIndex:1}} >

                        <div className="mb-4" ref = {tableRef}>

                            <Table
                                Spinner = { Spinner}
                                data = { data }
                                loading = { loading }
                            />

                        </div>


                    </div>


            </div>
    )
}
