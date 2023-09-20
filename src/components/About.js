import React from 'react'

function About() {
  return (
    <>
    <section className="content">
      <div className="container">
        <h2 className='con-head'>About Us</h2>
        <div className="row">
          <div className="col-md-6">
            {/* Image goes here */}
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              alt="Mountain"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-md-6">
            {/* Paragraph goes here */}
            <p>
            The Jaat people are a traditionally agricultural community in Northern India and Pakistan. Originally pastoralists in the lower Indus river-valley of Sindh, Jaats migrated north into the Punjab region in late medieval times, and subsequently into the Delhi Territory, northeastern Rajputana, and the western Gangetic Plain in the 17th and 18th centuries.Of Hindu, Muslim and Sikh faiths, they are now found mostly in the Indian states of Punjab, Haryana, Uttar Pradesh and Rajasthan and the Pakistani provinces of Sindh and Punjab.<br/></p>
          </div>
          <div className="col-md-6">
            {/* Paragraph goes here */}
            <p>
           The Jaats took up arms against the Mughal Empire during the late 17th and early 18th centuries. Gokula, a Hindu Jaat landlord was among the earliest rebel leaders against the Mughal rule during Aurangzeb's era.The Hindu Jaat kingdom reached its zenith under Maharaja Suraj Mal (1707–1763).The community played an important role in the development of the martial Khalsa panth of Sikhism.By the 20th century, the landowning Jaats became an influential group in several parts of North India, including Punjab,Western Uttar Pradesh,Rajasthan,Haryana and Delhi.Over the years, several Jaats abandoned agriculture in favour of urban jobs, and used their dominant economic and political status to claim higher social status.
            </p>
          </div>
          <div className="col-md-6">
            {/* Image goes here */}
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              alt="Mountain"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
         
        </div>
      </div>
      <div style={{"height":"100px"}}></div>
    </section>
    </>
  )
}

export default About