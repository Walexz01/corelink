import React from 'react'
import SectionHeader from '../Sectionheader/SectionHeader'
import Facility1 from '../../img/f-1.jpg'
import Facility2 from '../../img/f-2.jpg'
import Facility3 from '../../img/f-3.jpg'
import './Facilities.css'

const Facilities = () => {
  return (
    <section className='facilities'>
        <div className="container facilities__container">
            <SectionHeader title="Our Facilties" desc1='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, id.' desc2='Lorem, ipsum dolor sit amet consectetur adipis'/>
                
                <div className="facilites__facility">

                    <div className="image">
                        <img src={Facility1} alt="" />
                        <h3>World Class Library</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, vitae voluptate. Repudiandae possimus at nesciunt vel id sint obcaecati velit asperiores accusantium.
                        </p>
                    </div>
                    <div className="image">
                        <img src={Facility2} alt="" />
                        <h3>Largest Playground </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, vitae voluptate. Repudiandae possimus at nesciunt vel id sint obcaecati velit asperiores accusantium.
                        </p>
                    </div>
                    <div className="image">
                        <img src={Facility3} alt="" />
                        <h3>Safe and Healthy Food</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, vitae voluptate. Repudiandae possimus at nesciunt vel id sint obcaecati velit asperiores accusantium.
                        </p>
                    </div>

                </div>
        </div>
        
        
    </section>
  )
}

export default Facilities