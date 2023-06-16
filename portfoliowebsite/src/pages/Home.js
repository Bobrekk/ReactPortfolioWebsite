import React from 'react'


function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, I am Burak</h2>
            <div className='prompt'>
                <p>A software developer with a passion for learning and creating</p>
                
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>Html, Css, ReactJs, Redux</span>
                </li>

                <li className='item'>
                    <h2>Back-End</h2>
                    <span>NodeJs, .NetCore, Spring, ExpressJs</span>
                </li>

                <li className='item'>
                    <h2>Programming Languages</h2>
                    <span>C#, C, C++, Python, Java, Javascript</span>
                </li>

                <li className='item'>
                    <h2>Languages</h2>
                    <span>Turkish, English, French, Korean</span>
                </li>

            </ol>
        </div>
    </div>
  )
}

export default Home
