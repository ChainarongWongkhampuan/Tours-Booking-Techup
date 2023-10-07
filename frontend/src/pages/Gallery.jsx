import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import '../styles/thank-you.css'
import GalleryImg from '../components/GalleryImg'
import "../styles/gallery.css"; 

const Gallery = () => {
  return (
    <section className='gallery'>
      <Container>
        <Row>
          <Col
            lg='12'
            className=' text-center'
          >
            <div className='gallety_img'>
              <h1 className='mb-3 fw-semibold'>Gallery</h1>
              <GalleryImg />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery
