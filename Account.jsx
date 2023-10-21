import React from 'react'

function Account() {
  return (
    <div className='account'>
      <div className='ml-5 mb-20'>
        <p className='text-3xl text-red-600 underline mb-3 font-bold'>Account Setting</p>
        <p className='text-xl text-gray-600'>View and update details your account</p>
      </div>
      <div class="flex flex-col-2 justify-center space-x-40">
        <div class="col-span-1">
          <p class="mb-10">General information</p>
          <p>Username</p>
          <input type="text" placeholder='username' 
            className='border rounded-lg border-gray-500 pl-3
            w-[400px] h-[50px] mb-5 shadow-lg'/>
          <p>Email</p>
          <input type="text" placeholder='Email' 
            className='border rounded-lg border-gray-500 pl-3
            w-[400px] h-[50px] mb-20 shadow-lg'/>
          <div class="flex justify-end">
            <button className='bg-blue-700 border border-black text-white border-none
              rounded-lg w-[200px] h-[40px] mb-4 shadow-lg shadow-blue-700 cursor-pointer'>Update account</button>
          </div>
        </div>

        <div class="col-span-1">
          <p class="mb-10">Update password</p>
          <p>Current password</p>
          <input type="text" placeholder='current pssword' 
            className='border rounded-lg border-gray-500 pl-3
            w-[400px] h-[50px] mb-5 shadow-lg'/>
          <p>New password</p>
          <input type="text" placeholder='new password' 
            className='border rounded-lg border-gray-500 pl-3
            w-[400px] h-[50px] mb-5 shadow-lg'/>
          <p>Confirm password</p>
          <input type="text" placeholder='confirm password' 
            className='border rounded-lg border-gray-500 pl-3
            w-[400px] h-[50px] mb-20 shadow-lg'/>
          <div class="flex justify-end mb-20">
            <button className='bg-blue-700 border border-black text-white border-none
              rounded-lg w-[200px] h-[40px] mb-4 shadow-lg shadow-blue-700 cursor-pointer'>Update password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account