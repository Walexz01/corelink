import React from 'react'
import Card from '../Cards/Card'
import SectionHeader from '../Sectionheader/SectionHeader'
import './Course.css'


const Courses = () => {
  return (
    <section className='course__seection'>
        <div className="container courses_container">
            <SectionHeader title='Courses We Offer' desc1='Lorem ipsum dolor, sit amet consectetur adipLorem ipsum dolor, sit a' desc2='dolor, sit amet  amet consectetur adipent, dolores?tur adipisicing elit. Provident, dolores?'/>
            <div className="course__cards">

                <Card className='course__card'>
                    <h3>DIT</h3>
                    <span>
                        Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio optio debitis ipsam excepturi autem? sit amet, consectetur adipisicing elit. Iusto mollitia, sunt odio nostrum dolore magnam, voluptate dicta, odit facere amet possimus aspernatur iure quos totam doloribus sapiente. Omnis, pariatur recusandae.
                    </span>
                </Card>

                <Card className='course__card course__card2'>
                    <h3>MOS</h3>
                    <span>
                        Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio optio debitis ipsam excepturi autem? sit amet, consectetur adipisicing elit. Iusto mollitia, sunt odio nostrum dolore magnam, voluptate dicta, odit facere amet possimus aspernatur iure quos totam doloribus sapiente. Omnis, pariatur recusandae.
                    </span>
                </Card>

                <Card className='course__card'>
                    <h3>CIT</h3>
                    <span>
                        Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio optio debitis ipsam excepturi autem? sit amet, consectetur adipisicing elit. Iusto mollitia, sunt odio nostrum dolore magnam, voluptate dicta, odit facere amet possimus aspernatur iure quos totam doloribus sapiente. Omnis, pariatur recusandae.
                    </span>
                </Card>
            </div>
        </div>
        
    </section>
  )
}

export default Courses