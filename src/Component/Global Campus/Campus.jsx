import React from 'react'
import SectionHeader from '../Sectionheader/SectionHeader'
import campus1 from '../../img/c-1.jpg'
import campus2 from '../../img/c-2.jpg'
import campus3 from '../../img/c-3.jpg'
import './Campus.css'

const Campus = () => {
  return (
    <section className='Campus'>
        <div className="container campus__container">
            <SectionHeader title='Our Global Campus' desc1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus?' desc2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda facilis optio aut, ad accusantium excepturi?'/>
            <div className="campus__images">
                <div className="image">
                    <img src={campus1} alt="" />
                </div>
                <div className="image">
                    <img src={campus2} alt="" />
                </div>
                <div className="image">
                    <img src={campus3} alt="" />
                </div>
            </div>      
        </div>
    </section>
  )
}

export default Campus