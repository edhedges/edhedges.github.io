import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <div style={{ padding: `0 0 2rem 0` }}>
        Welcome to my personal website! I'm always open to working with like
        minded people that are passionate about technology. If that's you{' '}
        <a href="mailto:eddiehedges@gmail.com">let's talk business</a>.
      </div>
      <div className={'home_container'}>
        <div className={'home_row'}>
          <div className={'home_col'}>
            <h2>About</h2>
            <hr />
            <p>
              I am living a truly fortunate life in{' '}
              <a href="http://www.gardnerkansas.gov/">Gardner, KS</a> with my
              beautiful wife Katie, my amazing daughter Nora Eve, my dogs Ellie
              and Maeby, and my two cats Theo and Lucy. I'm employed by{' '}
              <a href="https://bloom.co/">Bloom</a> as a Full Stack Software
              Developer where we're building a decentralized identity and credit
              protocol on top of Ethereum.
            </p>
            <p>
              I graduated from{' '}
              <a href="http://www.k-state.edu/">Kansas State University</a> in
              December 2012 with a bachelor's degree in{' '}
              <a href="http://www.cis.ksu.edu/programs/undergrad/is">
                Information Systems
              </a>{' '}
              and a minor in{' '}
              <a href="http://catalog.k-state.edu/preview_program.php?poid=3379&amp;catoid=13">
                Business
              </a>
              .
            </p>
            <p>
              I truly enjoy my life, my line of work, and am always looking for
              ways to challenge and improve myself.
            </p>
          </div>
          <div className={'home_col'}>
            <h2>Blog</h2>
            <hr />
          </div>
        </div>
        <div className={'home_row'}>
          <div className={'home_col'}>
            <h2>Methodology</h2>
            <hr />
            <p>
              The following three principles have been extremely helpful to me
              when solving business problems through software:
            </p>
            <ul>
              <li>
                <a href="http://en.wikipedia.org/wiki/KISS_principle">
                  Keep It Simple Stupid
                </a>
              </li>
              <li>
                <a href="http://en.wikipedia.org/wiki/Don't_repeat_yourself">
                  Don't Repeat Yourself
                </a>
              </li>
              <li>
                <a href="http://c2.com/cgi/wiki?PrematureOptimization">
                  Premature optimization is the root of all evil
                </a>
              </li>
            </ul>
            <p>
              Personal methodologies aside, take a look at my résumé (it's under
              the Portfolio section) to see a detailed description of my
              professional experiences.
            </p>
          </div>
          <div className={'home_col'}>
            <h2>Portfolio</h2>
            <hr />
            <h3>Qualifications</h3>
            <p>
              <a href="/pdf/Resume.pdf">Résumé</a>
            </p>
            <h3>Current Work</h3>
            <p>Products for the next generation of 911.</p>
            <h3>Side projects</h3>
            <ul>
              <li>
                Financier - An internal website I developed that scrapes a
                number of websites to pull back my financial data (bank account
                balances, credit card debt, and event student loan debt).
                Financier is able to log in to websites with username and
                password credentials and can even answer security questions if
                required. The next step is to break past two factor
                authentication!
              </li>
              <li>
                <a href="/pensieve/">Pensieve</a> - A magical memory repository
              </li>
            </ul>
            <h3>Past Work</h3>
            <ul>
              <li>
                Backend services and internal tools/applications related to
                various products including{' '}
                <a href="http://software.garmin.com/en-US/express.html">
                  Garmin Express
                </a>
                .
              </li>
              <li>
                Full stack web applications for various ScriptPro produts,
                including{' '}
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
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
