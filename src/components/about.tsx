import React from 'react'

const About = () => {
  return (
    <div className={'home_col'}>
      <h2>About</h2>
      <hr />
      <p>
        I'm living life in KCMO with my wife and
        kids. Currently building and leading engineering at {' '}
        <a href="https://carputty.com" target={'_blank'}>
          Carputty
        </a>{' '}
        where we're re-engineering auto finance.
      </p>
      <p>
        I graduated from{' '}
        <a href="https://www.k-state.edu/">Kansas State University</a> in
        December 2012 with a bachelor's degree in{' '}
        <a href="https://www.k-state.edu/careercenter/students/exploration/majorin/infosys.html">
          Information Systems
        </a>{' '}
        and a minor in{' '}
        <a href="https://cba.k-state.edu/academics/undergraduate/business-minor.html">
          Business
        </a>
        .
      </p>
      <p>
        I truly enjoy my life, my line of work, and am always looking for ways
        to be challenged, grow, and improve.
      </p>
    </div>
  )
}
export default About
