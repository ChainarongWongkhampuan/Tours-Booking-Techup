import React, { useState, useContext, useMemo } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'
import getStripe from '../../utils/getStripe'
const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title } = tour
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  })

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }
  const handleChangeSize = (e) => {
    const numberInput = document.getElementById('numberInput')
    const inputValue = Number(numberInput.value)
    if (inputValue < 1) {
      setBooking((prev) => ({ ...prev, guestSize: 1 }))
    } else if (inputValue > 10) {
      setBooking((prev) => ({ ...prev, guestSize: 10 }))
    } else {
      setBooking((prev) => ({ ...prev, guestSize: inputValue }))
    }
  }


  const totalAmount = useMemo(() => {
    if (Number(booking.guestSize) < 4) {
      return price
    } else if (Number(booking.guestSize) < 7) {
      return price * 1.5
    } else {
      return price * 2
    }
  }, [booking.guestSize])

  
  const handleClick = async (e) => {
    e.preventDefault()

    try {
      if (!user || user === undefined || user === null) {
        return alert('Please sign in')
      }

      const token = localStorage.getItem('token')

      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
  
        body: JSON.stringify(booking),
      })

      const result = await res.json()

      if (!res.ok) {
        return alert(result.message)
      }
      handleCheckout()
    } catch (err) {
      alert(err.message)
    }
  }

  async function handleCheckout() {
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1NwOI8Aaac4N4QZyOUj54QiM',
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:3000/thank-you`,
      cancelUrl: `http://localhost:3000/tours`,
      customerEmail: 'customer@email.com',
    })
    console.warn(error.message)
  }

  return (
    <div className='booking'>
      <div className='booking__top d-flex align-items-center justify-content-between'>
        <h3>{title}</h3>
        <span className='tour__rating d-flex align-items-center '>
          <i class='ri-star-s-fill'></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>


      <div className='booking__form'>
        <h5>Information</h5>
        <Form
          className='booking__info-form'
          onSubmit={handleClick}
        >
          <FormGroup>
            <input
              type='text'
              placeholder='Full Name'
              id='fullName'
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type='number'
              placeholder='Phone'
              id='phone'
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input
              type='date'
              placeholder=''
              id='bookAt'
              required
              onChange={handleChange}
            />
            <input
              type='number'
              placeholder='Guest'
              id='numberInput'
              required
              max={10}
              min={1}
              onChange={handleChangeSize}
              value={booking.guestSize}
            />
          </FormGroup>
        </Form>
      </div>

      <div className='booking__bottom'>
        <ListGroup>
          <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span> {totalAmount}฿</span>
          </ListGroupItem>
        </ListGroup>

        <Button
          className='btn primary__btn w-100 mt-4'
          onClick={handleCheckout}
        >
          Book Now
        </Button>
      </div>
    </div>
  )
}

export default Booking
