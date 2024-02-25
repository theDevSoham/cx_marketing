import React, { useEffect, useRef } from 'react';
import { Card, Col, ConfigProvider, Flex, Row, Space } from 'antd';
import Link from 'next/link';

export default function AnimatedHorizontalScroll({ cardData, scrollDirection = 'rightToLeft' }) {

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const speed = 1; // Speed of the scroll
    const directionMultiplier = scrollDirection === 'rightToLeft' ? 1 : -1;

    const scroll = () => {
      if (scrollDirection === 'rightToLeft' && scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
        scrollContainer.scrollLeft = 0;
      } else if (scrollDirection === 'leftToRight' && scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
      } else {
        scrollContainer.scrollLeft += speed * directionMultiplier;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [scrollDirection]);

  return (
    <ConfigProvider
      theme={{
		token: {
		  colorLink: '#F29557',
		},
	  }}
    >
    <div ref={scrollContainerRef} style={{ overflowX: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
      <div style={{ display: 'inline-flex' }}>
        {cardData.concat(cardData).map((card, index) => (
          <Card key={index} bodyStyle={{padding:"5px"}} style={{ width: 300,  marginRight: '16px' }}>
            <Row>
              <Col xs={7} lg={7} xl={7}>
                <Flex justify='start' >
                <img src={card.iconUrl} width={70} style={{padding:"5px"}} />
                </Flex>
              </Col>
              
              <Col xs={16} lg={16} xl={16}>
                <Flex justify="center" vertical={true} style={{padding:"10px 0"}}>
                  <b>{card.text}</b>
                  <span style={{fontWeight:"600"}}><Link href={card.flightUrl}>Flights</Link> - <Link href={card.hotelUrl}>Hotels</Link></span>
                </Flex>
                
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </div>
    </ConfigProvider>
  );
};
