import React, { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import Image from 'next/image'
import Alert from './Alert'

const ContactModal = ({ toggleModal }) => {
  const [agbAgree, setAgbAgree] = useState(false)
  const [openSentAlert, setOpenSentAlert] = useState(false)
  const [modalSent, setModalSent] = useState(false)
  const [sentText, setSentText] = useState('Absenden')
  const modalRef = useRef(null)
  useClickAway(modalRef, () => {
    toggleModal(false)
  })
  const [alert, setAlert] = useState({
    title: '',
    body: '',
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    msg: '',
  })

  const showAlert = (title, body) => {
    setAlert({
      title,
      body,
    })
    setOpenSentAlert(true)
    setTimeout(() => {
      setOpenSentAlert(false)
    }, 5000)
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (modalSent) {
      setSentText('Gesendet!')
      setTimeout(() => {
        toggleModal(false)
      }, 5000)
    }
  }, [modalSent])

  const handleSubmit = () => {
    if (agbAgree) {
      fetch('/api/contact', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          formData,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.code === 200) {
            setFormData({
              name: '',
              email: '',
              phone: '',
              msg: '',
            })
            // showAlert("Success", "Info successfully sent")
            setModalSent(true)
          } else {
            showAlert('Error', 'Info unsuccessfully sent')
          }
        })
    } else {
      showAlert(
        'Datenschutz',
        'Sie müssen zuerst die Datenschutzrichtlinien zustimmen.'
      )
    }
  }

  return (
    <section className='body-font fixed z-50 left-0 top-0 flex items-center justify-center w-full h-full text-gray-500 bg-gray-900 bg-opacity-40 motion-safe:animate-fade'>
      <div
        className='container relative flex justify-center mx-auto w-5/6 max-w-screen-md h-auto bg-gray-300 rounded-lg shadow-2xl md:w-1/2 lg:w-2/3'
        ref={modalRef}
      >
        <button
          className='modal-close absolute z-50 right-0 top-0 flex flex-col items-center mr-4 mt-4 text-gray-600 text-sm rounded focus:outline-none cursor-pointer focus:ring-white focus:ring-opacity-50 focus:ring-2'
          onClick={() => toggleModal(false)}
        >
          <svg
            className='text-gray-600 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 18 18'
          >
            <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
          </svg>
          <span className='text-sm'>(Esc)</span>
        </button>
        <div className='flex w-full md:ml-auto'>
          <div className='hidden flex-col justify-around p-12 w-1/2 bg-gray-200 rounded-l-lg lg:flex'>
            <Image
              src='/img/server2.webp'
              height='900'
              width='512'
              layout='responsive'
              className='max-w-md rounded-lg opacity-80 filter grayscale'
              style={{ maxWidth: '276px' }}
            />
          </div>
          <div className='flex flex-col justify-around mx-auto p-8 w-5/6 lg:p-8 lg:w-1/2'>
            <h2 className='title-font md:text-md mb-3 mr-4 text-center text-gray-700 text-xl font-semibold'>
              Contact us for a free consultation
            </h2>
            <p className='mb-2 text-center text-gray-700 font-thin'>
              Call us at{' '}
              <a
                alt='Call Main RZ'
                href='tel:00496975002720'
                className='text-newtelco-500 font-bold'
              >
                069 75 00 27 20
              </a>{' '}
              or fill out the contact form below to hear back from our qualified
              representatives as soon as possible!
            </p>
            <form action='/api/contact' method='post'>
              <div className='relative mb-2'>
                <label
                  htmlFor='name'
                  className='text-gray-700 text-sm leading-7'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  disabled={modalSent}
                  value={formData.name}
                  onChange={handleChange}
                  className='px-3 py-1 w-full text-gray-900 text-base font-thin leading-8 bg-gray-200 disabled:bg-gray-800 border border-gray-500 focus:border-newtelco-500 rounded outline-none transition-colors'
                />
              </div>
              <div className='relative mb-2'>
                <label
                  htmlFor='email'
                  className='text-gray-700 text-sm leading-7'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  disabled={modalSent}
                  value={formData.email}
                  onChange={handleChange}
                  className='px-3 py-1 w-full text-gray-900 text-base font-thin leading-8 bg-gray-200 disabled:bg-gray-800 border border-gray-500 focus:border-newtelco-500 rounded outline-none transition-colors'
                />
              </div>
              <div className='relative mb-2'>
                <label
                  htmlFor='email'
                  className='text-gray-700 text-sm leading-7'
                >
                  Telephone
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  disabled={modalSent}
                  value={formData.phone}
                  onChange={handleChange}
                  className='px-3 py-1 w-full text-gray-900 text-base font-thin leading-8 bg-gray-200 disabled:bg-gray-800 border border-gray-500 focus:border-newtelco-500 rounded outline-none transition-colors'
                />
              </div>
              <div className='relative mb-2'>
                <label
                  htmlFor='message'
                  className='text-gray-700 text-sm leading-7'
                >
                  Message
                </label>
                <textarea
                  id='msg'
                  name='msg'
                  disabled={modalSent}
                  value={formData.msg}
                  onChange={handleChange}
                  className='px-3 py-1 w-full h-24 text-gray-900 text-base font-thin leading-6 bg-gray-200 disabled:bg-gray-800 border border-gray-500 focus:border-newtelco-500 rounded outline-none resize-none transition-colors'
                ></textarea>
              </div>
              <div className='relative flex flex-wrap justify-between'>
                <label htmlFor='agb' className='mb-4 text-gray-600 text-xs'>
                  <input
                    type='checkbox'
                    id='agb'
                    checked={agbAgree}
                    onChange={() => setAgbAgree(!agbAgree)}
                    className='form-checkbox focus:ring-offset mr-1 w-4 h-4 text-newtelco-500 bg-gray-200 border-gray-300 rounded focus:outline-none focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring'
                  />
                  I hereby allow Main RZ to save and use the above entered
                  personal data for marketing purposes and agree to the
                  <a
                    href='https://newtelco.com/data-privacy-policy/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline-none transitions-all text-newtelco-500 hover:underline rounded focus:outline-none focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring'
                  >
                    {' '}
                    data privacy policy
                  </a>
                </label>
                <button
                  action='submit'
                  onClick={e => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  className='px-2 py-2 w-full text-white text-lg bg-newtelco-500 hover:bg-newtelco-600 border-0 rounded focus:outline-none transition-colors focus:ring-white focus:ring-opacity-50 focus:ring-2'
                >
                  {sentText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {openSentAlert && <Alert title={alert.title} body={alert.body} />}
    </section>
  )
}

export default ContactModal
