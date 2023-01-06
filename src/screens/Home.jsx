import React from 'react'
import Card from '../component/Card'
import Crad from '../component/FooterSection'
import Header from '../component/Header'
import Leftsection from '../component/Leftsection'
import Movingcontent from '../component/MovingContent'
import data from "../data/feature"

export default function Home() {
    return (
        <div className="main">
            <section>
                <Header />
            </section>
            {/* <Leftsection/> */}
            <Movingcontent/>
            < section className='screen-container' >
                <h2 className="main-heading">
                    Experience the full power of QuillBot
                </h2>

                <div className="feature-container">
                    {
                        data.map((e, i) => (
                            <Card e={e} key={i} />
                        ))
                    }
                </div>
            </section >

            <section>
                <Crad />
            </section>

        </div>
    )
}
