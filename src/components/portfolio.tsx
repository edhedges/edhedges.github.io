import React from 'react'
import resume from '../pdf/Resume.pdf'

const Portfolio = () => {
  return (
    <div className={'home_col'}>
      <h2>Portfolio</h2>
      <hr />
      <h3>Qualifications</h3>
      <p>
        <a href={resume}>Résumé</a>
      </p>
      <h3>Past Work</h3>
      <ul>
        <li>
          Full stack development and later Director of Engineering - Consumer App at <a href="https://bloom.co">Bloom</a>.
          I designed and built platform features with a focus on third party integrations, open source libraries, and consumer mobile app apis.
          I went on to lead the consumer mobile app team as we shipped native iOS and Android apps that gave users the ability to create decentralized
          identities, claim and share verifiable credentials, and enroll in credit and hack monitoring products.
        </li>
        <li>
          Full stack development at{' '}
          <a href="https://911datamaster.com/">911 Datamaster, Inc.</a> focusing
          on <a href="https://911datamaster.com/datanexus/">DataNexus</a>.
        </li>
        <li>
          Backend services and internal tools/applications related to various
          products including{' '}
          <a href="http://software.garmin.com/en-US/express.html">
            Garmin Express
          </a>
          .
        </li>
        <li>
          Full stack web applications for various ScriptPro produts, including{' '}
          <a href="http://www.scriptpro.com/Products/SP-Central-Pharmacy-Management-System/">
            Pharmacy Management Software System
          </a>{' '}
          and{' '}
          <a href="http://www.scriptpro.com/Products/SP-Central-Workflow-System/">
            SP Central Workflow System
          </a>
          .
        </li>
      </ul>
    </div>
  )
}

export default Portfolio
