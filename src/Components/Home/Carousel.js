import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel';
import React, { useState } from 'react';
import styled from 'styled-components'

const StyContainer = styled.div`
  width: 200vh;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  z-index: 100;
 
`

const StyHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  font-family: 'Great Vibes';
`




const images = [
    'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    'https://img.freepik.com/premium-photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-new-year-holiday_127425-162.jpg?w=1800',
   'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
   'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
]

const Carousel = () => {
    const [forceActiveImage] = useState(-1)
    const [interval] = useState(1000)
    const [transition] = useState(3000)
    const [cycle] = useState(true)
    return (
        <div>
            <section class="relative">
                
            <StyContainer>
                    <StyOptionsContainer>
                        <StyHeader>ENJOY YOUR MEAL</StyHeader>
                    </StyOptionsContainer>
                    <CrossfadeCarousel
                        forceActiveImage={forceActiveImage < 0 ? null : forceActiveImage}
                        interval={interval}
                        transition={transition}
                        cycle={cycle}
                        images={images}
                    />
                </StyContainer>
            </section>
        </div>
    );
};

export default Carousel;