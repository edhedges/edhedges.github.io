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
