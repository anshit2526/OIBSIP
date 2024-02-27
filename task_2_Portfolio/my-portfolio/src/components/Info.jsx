import React from 'react'

export default function About() {
  return (
    <div className='p-10'>
      <div className='text-xl flex items-center font-light text-my-theme'>Information <span className='h-[1px] w-[35dvw] bg-my-theme mx-10 rounded-xl' > </span></div>

      <h3 className='text-4xl my-10 text-my-theme w-max'><a href="#about">About me</a></h3>
      <p className='font-light px-5'>Full-stack web developer, passionate, good, enthusiastic, motivated, highly, passionate, happy, charming, graduated, BCA, No backglog, </p>

      <div id="experience">
        <h3 className='text-4xl my-10 text-my-theme w-max'><a href="#experience">Experience</a></h3>
        {/* <span className='h-[2px] w-[40dvw] bg-my-theme-btn block mb-5'></span> */}
        <div className="flex items-center">
          <img src='oasis-logo.png' alt="oasis logo" className=' inline w-9 h-9' />
          <h1 className='text-3xl mx-2 inline'>Oasis Infobyte</h1>
        </div>
        <p className='text-sm italic px-2 py-1'>Web Developer Intern, Feb 2024 - Present</p>
        <p className='text-sm font-light px-5'>During my web development internship at Oasis Infobyte, I was assigned several individual project tasks that had to be completed within a specified deadline. Throughout the internship, I designed both the front-end and back-end of websites, using my knowledge and skills creatively to build excellent websites. The internship's aim was to teach me how to apply my knowledge and skills to real-world projects, providing me with a taste of how the industry operates. During the internship, I worked on various web technologies such as React.js, Node.js, Express.js, HTML, and Bootstrap CSS. I also learned a new one: Tailwind CSS. To see my work during the internship <a href="https://github.com/anshit2526/OIBSIP" className='underline text-my-theme hover:no-underline' target='_blank'>Click here</a>.</p>


        <div className="flex mt-5 items-center">
          <img src='wayspire-logo.png' alt="wayspire logo" className=' inline w-9 h-9' />
          <h1 className='text-3xl mx-2 inline'>Wayspire</h1>
        </div>
        <p className='text-sm italic px-2 py-1'>Full-stack Developer Intern, Jul 2023 - Sep 2023</p>
        <p className='text-sm font-light px-5'>During my role as a Full-Stack Developer at Wayspire, I honed my skills in both front-end and back-end development. I gained valuable experience and expanded my knowledge of diverse web technologies, learning how to effectively apply them to real-world projects. This internship enriched me with valuable skills, including collaboration with fellow developers, effective communication, and a deeper understanding of various web technologies.</p>

      </div>
    </div>


  )
}
