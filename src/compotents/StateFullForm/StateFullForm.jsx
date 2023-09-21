import React, { useState } from 'react';

const StateFullForm = () => {

    const  [email,setEmail] = useState(null);
    const  [password,setPassword] = useState(null);
    const  [error,setError] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(email)
        if (password.length < 6) {
            setError('Password must be 6 character or longer')
        }
    } 
    const handleEmailChange = e =>{
        setEmail(e.target.value)
        setPassword(e.target.value)
    } 



    return (
        <div>
            <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Simple Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input required
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Your Name"
            
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input required onChange={handleEmailChange}
            type="email"
            
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Your Email"
            
          />
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input required onChange={handleEmailChange}
            type="password"
            
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Your Password"
            
          />

        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
           
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="Your Message"
            
          ></textarea>
        </div>
        <div className="mb-4">
            {
                error && <p>{error}</p>
            }
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default StateFullForm;