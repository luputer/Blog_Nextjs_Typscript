import React from 'react'
import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center '>
      <div className=" border rounded-md p-8 mx-10 bg-gradient-to-tr from-blue-300 to-purple-400">
        <h4 className='font-semibold text-center mb-5'>Login Page</h4>
        <div className="">
          <label htmlFor="username" className='mr-3 ml-4 font-semibold'>Username</label>
          <input className='border border-blue-600 rounded-sm mb-3 hover:border-blue-400 py-1 bg-slate-200' type="text" placeholder='Your Name ' name="" id="username" /><br />
          <label htmlFor="password" className='mr-3 ml-5 font-semibold' >Password</label>
          <input className='border border-blue-600 rounded-sm py-1 bg-slate-200' type="password" placeholder='Your password' name="" id="password" /><br />
          <div className="gap-5">  
          <Button variant={'secondary'} className='mt-4 ml-3 mr-3 bg-blue-500 w-32'>kirim</Button>
          <Button className='mt-4  bg-red-500 w-32'>batal</Button>
          </div>
        </div>
        <div className="mt-3 item-center flex justify-center  ">Tidak punya akun
        </div>
      </div>
    </div>
  )
}

export default About
