import React from 'react'
import Card from '../components/Card'

const Dashboard = () => {
    return (
        <div className='mx-auto font-source-sans'>
            <section id='uk-data'>
                <div className='px-10 pb-10 mx-auto' style={{ maxWidth: "1000px"}}>
                    <h1 className='pt-5 mb-5 text-2x1'>
                        UK Summary
                    </h1>
                    <div className='flex-non md:flex justify-between w-full'>
                        <Card
                            type='cases'
                            newTitle='New cases over 24 hour period'
                            totalTitle='Total cases'
                            color='white'
                        />
                        <Card
                            type='deaths'
                            newTitle='New deaths within 28 days of a positive test'
                            totalTitle='Total deaths'
                            color='white'
                        />
                    </div>
                </div>
            </section>

            <section id='regional-data'>
                <div className='px-10 pb-10 mx-auto' style={{ maxWidth: "1000px"}}>
                    <h1 className='pt-5 mb-5 text-2x1'>
                        {`Regional Data (24 Hours)`}
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
