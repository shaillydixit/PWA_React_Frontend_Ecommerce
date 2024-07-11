import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

class FeaturedProducts extends Component {
  render() {
    return (
    <Fragment>
      <Container className='text-center' fluid={true}>
        <div className='section-title text-center mb-55'><h2>Featured Product</h2>
        <p>Some of Our exclusive collection, You may like</p></div>
        <Row>
          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box card'>
              <img className='center' src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/w/e/-original-imagtyw9fdfnsune.jpeg?q=70" alt="" />
              <Card.Body>
                  <p className='product-name-on-card'>SAMSUNG Galaxy F34 5G (Mystic Green, 128 GB)  (6 GB RAM)</p>
                  <p className='product-price-on-card'>Price : ₹13,499</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box card'>
              <img className='center' src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/8/n/-original-imagymhwtgmdr3v2.jpeg?q=70" alt="" />
              <Card.Body>
                  <p className='product-name-on-card'>SAMSUNG Galaxy F15 5G (Ash Black, 128 GB)  (4 GB RAM)</p>
                  <p className='product-price-on-card'>Price : ₹12,999</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box card'>
              <img className='center' src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70" alt="" />
              <Card.Body>
                  <p className='product-name-on-card'>Apple iPhone 15 (Pink, 128 GB)</p>
                  <p className='product-price-on-card'>Price : ₹70,999</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box card'>
              <img className='center' src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/4/r/-original-imagtc4g22rcatjg.jpeg?q=70&crop=false" alt="" />
              <Card.Body>
                  <p className='product-name-on-card'>Apple iPhone 15 Pro (Blue Titanium, 256 GB)</p>
                  <p className='product-price-on-card'>Price : ₹1,34,990</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box card'>
              <img className='center' src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=70" alt="" />
              <Card.Body>
                  <p className='product-name-on-card'>vivo T3x 5G (Celestial Green, 128 GB)  (4 GB RAM)</p>
                  <p className='product-price-on-card'>Price : ₹13,499</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
            <Card className='image-box card'>
              <img className='center' src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/c/e/-original-imahyhmepafe4bkp.jpeg?q=70&crop=false" alt="" />
              <Card.Body>
                  <p className='product-name-on-card'>vivo V30e (Velvet Red, 256 GB)  (8 GB RAM)</p>
                  <p className='product-price-on-card'>Price : ₹29,999</p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

    </Fragment>
    )
  }
}

export default FeaturedProducts
