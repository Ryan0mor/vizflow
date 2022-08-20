import React from 'react';
import Button from '../components/Button/Button.js'
import Logo from '../components/Logo/Logo.js'
import FormInput from '../components/Atoms/FormInput.js'
import SimpleLink from '../components/Atoms/SimpleLink.js'



const Login = () => {
    
    return (
        <div className='gradient-bg flex flex-col justify-center w-full h-full p-4'>
            <div className='container bg-slate-50 mx-auto rounded-3xl'>
                <div className='md:grid md:grid-cols-2 flex flex-col-reverse'>
                    <form className='flex flex-col gap-6 p-[20%]'>
                        <h1 className='header01'>Log in</h1>
                        <FormInput
                            for="email"
                            label="Email address"
                            id="email"
                            type="text"
                            placeholder="Enter your email"
                        />
                        <FormInput
                            for="password"
                            label="Password"
                            id="email"
                            type="text"
                            placeholder="Enter your password"
                        />
                        <SimpleLink link='/password-recover' label='Forgot password?' />
                        <Button 
                            content='Log in' 
                            link='#'
                            choice='1'/>
                    </form>

                    <div className='bg-fixed bg-[url("https://www.domingoloro.com/images/portfolio_2/render-3d-espacio-interior-domingo-loro.jpg")] p-[10%] rounded-3xl flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-8 p-[10%] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 bg-slate-50'>
                            <Logo />
                            <h2 className='header02'>Log in to enjoy thousands of 3d assets</h2>
                            <p>Don't you have an account?</p>
                            <SimpleLink link='/sign-in' label='Sign in →' />

                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Login;