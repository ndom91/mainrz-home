import React, { useState } from 'react'
import Alert from './Alert'

const Contact = ({ content }) => {
  const [agbAgree, setAgbAgree] = useState(false)
  const [openSentAlert, setOpenSentAlert] = useState(false)
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
            showAlert('Success', 'Info successfully sent!')
          } else {
            showAlert('Error', 'Info unsuccessfully sent')
          }
        })
    } else {
      showAlert('AGB', "Sie muessen zuerst die AGB's annehmen.")
    }
  }

  return (
    <section className='body-font relative text-gray-500 lg:mt-36'>
      <div className='sm:flex-no-wrap container flex flex-wrap mx-auto pb-24 pt-12 px-5 md:py-24'>
        <div className='relative flex items-end justify-start p-10 w-full h-96 bg-gray-900 rounded-lg overflow-hidden md:w-1/2 md:h-auto lg:w-2/3'>
          <iframe
            width='100%'
            height='100%'
            title='map'
            className='absolute inset-0'
            frameBorder='0'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
            loading='lazy'
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Am+Kieswerk+12+63791+Karlstein+am+Main`}
            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}
          ></iframe>
          <div className='relative flex flex-wrap py-6 bg-gray-900 rounded-md lg:w-2/3'>
            <div className='px-6 lg:w-1/2'>
              <h2 className='title-font text-white text-sm font-medium tracking-widest'>
                ADDRESS
              </h2>
              <a
                href='https://g.page/Newtelco?share'
                target='_blank'
                rel='noopener noreferrer'
                className='rounded focus:outline-none outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
              >
                <p
                  className='font-thin leading-relaxed'
                  dangerouslySetInnerHTML={{
                    __html: content.StreetAddress.replaceAll('\n', '<br />'),
                  }}
                />
              </a>
            </div>
            <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
              <h2 className='title-font text-white text-sm font-medium tracking-widest'>
                EMAIL
              </h2>
              <a
                href={`mailto:${content.EmailAddress}`}
                className='text-newtelco-500 font-thin leading-relaxed rounded focus:outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
                target='_blank'
                rel='noopener noreferrer'
              >
                {content.EmailAddress}
              </a>
              <h2 className='title-font mt-4 text-white text-sm font-medium tracking-widest'>
                PHONE
              </h2>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={`tel:${content.PhoneNumber.split(' ').join('')}`}
                className='font-thin rounded focus:outline-none outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-2'
              >
                {content.PhoneNumber}
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col align-bottom mt-8 w-full md:ml-auto md:mt-0 md:pl-8 md:w-1/2 lg:w-1/3'>
          <p className='mb-6 text-center text-gray-400 font-mono text-xl font-thin tracking-widest uppercase'>
            {content.Title}
          </p>
          <p className='mb-5 text-gray-400 font-thin'>
            Call us at{' '}
            <a
              alt='Call Jens Leuchters'
              href={`tel:${content.PhoneNumber.split(' ').join('')}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-newtelco-500 font-bold rounded focus:outline-none outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-30 focus:ring-4'
            >
              {content.PhoneNumber}
            </a>{' '}
            or fill out the contact form below and we will get back to you as
            soon as possible!
          </p>
          <form action='/api/contact' method='post'>
            <div className='relative mb-4'>
              <label
                htmlFor='name'
                className='text-gray-400 text-sm tracking-widest leading-7 uppercase'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='px-3 py-1 w-full text-gray-100 text-base font-thin leading-8 bg-gray-900 border border-gray-700 focus:border-newtelco-500 rounded outline-none focus:outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-20 focus:ring-4'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='text-gray-400 text-sm tracking-widest leading-7 uppercase'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='px-3 py-1 w-full text-gray-100 text-base font-thin leading-8 bg-gray-900 border border-gray-700 focus:border-newtelco-500 rounded outline-none focus:outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-20 focus:ring-4'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='phone'
                className='text-gray-400 text-sm tracking-widest leading-7 uppercase'
              >
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='px-3 py-1 w-full text-gray-100 text-base font-thin leading-8 bg-gray-900 border border-gray-700 focus:border-newtelco-500 rounded outline-none focus:outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-20 focus:ring-4'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='msg'
                className='text-gray-400 text-sm tracking-widest leading-7 uppercase'
              >
                Message
              </label>
              <textarea
                id='msg'
                name='msg'
                value={formData.msg}
                onChange={handleChange}
                className='px-3 py-1 w-full h-32 text-gray-100 text-base font-thin leading-6 bg-gray-900 border border-gray-700 focus:border-newtelco-500 rounded outline-none focus:outline-none resize-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-20 focus:ring-4'
              ></textarea>
            </div>
            <div className='relative flex flex-wrap justify-between'>
              <label
                htmlFor='agb'
                className='text-gray-500 text-xs leading-relaxed'
              >
                <input
                  type='checkbox'
                  id='agb'
                  checked={agbAgree}
                  onChange={() => setAgbAgree(!agbAgree)}
                  className='form-checkbox focus:ring-offset mr-1 w-4 h-4 text-newtelco-500 bg-gray-400 border-gray-300 rounded focus:outline-none outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring'
                />
                I hereby allow Main RZ to save and use the above entered
                personal data for marketing purposes and agree to the{' '}
                <a
                  href='https://newtelco.com/data-privacy-policy/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline-none transitions-all text-newtelco-500 hover:underline rounded focus:outline-none transition-shadow duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring'
                >
                  data privacy policy
                </a>
                .
              </label>
              <div className='flex justify-between mt-4 w-full'>
                <button
                  action='submit'
                  onClick={e => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                  className='px-6 py-3 w-full text-white text-lg bg-newtelco-500 hover:bg-newtelco-600 border-0 rounded focus:outline-none outline-none transition-all duration-500 focus:ring-newtelco-500 focus:ring-opacity-50 focus:ring-4'
                >
                  {content.ButtonText}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {openSentAlert && <Alert title={alert.title} body={alert.body} />}
    </section>
  )
}

export default Contact
