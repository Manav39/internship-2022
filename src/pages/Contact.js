import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  return (
    <div className='App'>
        <div className='dark-overlay'></div>
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Pet%20Store&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        title='Map Overlay'
                ></iframe>
                </div>
        </div>
        <div className='contact-form'>
            <h2 className='contact-text'>
                Contact&nbsp;Us
            </h2>
            <br />
            <Form>
                <Form.Control className='mb-3'type='text' placeholder='Your Name' required></Form.Control>
                <Form.Control className='mb-3' type='email' placeholder='Your Email' required></Form.Control>
                <Form.Control className='mb-3' type='text' placeholder='Your Phone Number' required></Form.Control>
                <textarea placeholder='Your Message' className='textarea-fixed'></textarea>
            </Form>
            <Button variant='primary' className='contact-button'>Send</Button>
        </div>
    </div>
  )
}

export default Contact