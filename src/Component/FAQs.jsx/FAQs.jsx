import React from 'react'
import SectionHeader from '../Sectionheader/SectionHeader'
import FAQ from './FAQ'
import { FaQuestion } from 'react-icons/fa'
import './FAQs.css'

const FAQs = () => {
  return (
    <section className='faqs'>
        <div className="container faqs__container">
            <SectionHeader icon={<FaQuestion/>} title="FAQ" className='faq__header' />
            <div className="faqs__box">
                <FAQ question='what is the hhshsjj' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ut blanditiis eaque. Nobis veritatis ab et doloribus dolorem, a, id voluptas architecto consequuntur, adipisci assumenda quae natusipsum dolor sit, amet consectetur adipisicing elit. Asperiores ut blanditiis eaque. Nobis veritatis ab et doloribus dolorem, a, id voluptas architecto consequuntur, adipisci assumenda quae natus est necessitatibus quibusdam!'  className='faq' />
                <FAQ question='whhen is the hhshsjj' answer='Lorem ipsum dolor sit, amet lit. Asperiores ut blanditiis eaque. Nobis veritatis ab et  , id voluptas architecto consequuntur, adipisci assumenda quae natus doloribus dolorem, a, id voluptas architecto consequuntur, adipisci assumenda quae natus est necessitatibus quibusdam!'  className='faq' />
                <FAQ question='where is the hhshsjj' answer='Lorem ipsuelit. Asperiores ut blanditiis eaque. Nobis veritatis ab et doloribus dolorem, a, id voluptas architecto consequuntur, adipisci assumenda quae natus est necessitatibus quibusdam!'  className='faq' />
                <FAQ question='how is the hhshsjj' answer='Lorem ipsum doloreriores ut blanditiis eaque. Nobis veritatis ab et doloribus dolorem , id voluptas architecto consequuntur, adipisci assumenda quae natus , a, id voluptas architecto consequuntur, adipisci assumenda quae natus est necessitatibus quibusdam!'  className='faq' />
                
            </div>
        </div>
        
        
    </section>
  )
}

export default FAQs