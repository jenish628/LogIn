import React from 'react';
import { Card, Col, Row } from 'antd';
import { createUseStyles } from 'react-jss';

const UseStyles = createUseStyles({
  cardwrapper:{
    margin: "5px"
  }
})

const Carddd = () => {
  const classes = UseStyles();
  return (
    <>

      <div className={classes.cardwrapper}>
        
         <Row gutter={16}>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>,
    </>
  )
}

export default Carddd;