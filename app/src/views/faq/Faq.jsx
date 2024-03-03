import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { useState } from 'react'
import { faqData } from '../../static/data'
function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
    </svg>
  )
}
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
}
const Faq = () => {
  window.scrollTo(0, 0)
  const [open, setOpen] = useState(0)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <div className='800px:min-h-[calc(100vh-160px)] py-20  '>
      {faqData &&
        faqData.map((faq, index) => (
          <div key={index} className='w-11/12 mx-auto'>
            <Accordion
              animate={CUSTOM_ANIMATION}
              open={open === faq.id}
              icon={<Icon id={faq.id} open={open} />}
              className='mb-2 rounded-lg border dark:hover:bg-dark-background-secondary/50 hover:bg-light-background-secondary/50 duration-200 border-blue-gray-100 px-4'
            >
              <AccordionHeader
                onClick={() => handleOpen(faq.id)}
                className={`border-b-0  dark:text-inherit  transition-colors ${
                  open === faq.id ? 'text-blue-500 dark:text-blue-400 hover:!text-blue-700' : ''
                }`}
              >
                {faq.title}
              </AccordionHeader>
              <AccordionBody className='pt-0 w-11/12 text-base font-normal dark:text-inherit'>{faq.desc}</AccordionBody>
            </Accordion>
          </div>
        ))}
    </div>
  )
}
export default Faq
