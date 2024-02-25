import React from 'react'

export default function Contact() {
    return (
        <div className='p-10'>
            <div className='text-xl flex items-center font-light text-my-theme mb-8'>Contact me <span className='h-[1px] w-[35dvw] bg-my-theme mx-10 rounded-xl' > </span></div>
                <p className='text-3xl w-[50vw] mx-auto mb-2'>Contact me</p>
                <form action="#" className='flex flex-col border border-my-theme rounded-lg py-2 px-7 w-[50vw] mx-auto'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' />

                    <label htmlFor="email">Email</label>
                    <input type='mail' name='email' id='email' />
                    
                    <label htmlFor="Message">Message</label>
                    <textarea type="text" name='message' id='message' rows={4}/>

                    <button className='bg-my-theme w-max px-4 rounded-md mx-auto mt-5'>Send</button>
                </form>
        </div>
    )
}
