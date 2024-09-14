import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) =>{
        const userInfo={
            name:data.name,
            email:data.email,
            Message:data.Message,
        };
        try {
            await axios.post("https://getform.io/f/bvrenxgb" ,userInfo);
            toast.success("Your message has been sent");
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };
    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 md:flex-row my-16'>
                <h1 className='text-3xl font-bold mb-5'>Contact me</h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                   // action="https://getform.io/f/bvrenxgb"
                    //method="POST" 
                    className='bg-slate-200 w-96 px-9 py-7 rounded-xl mt-8 dark:bg-slate-600 dark:text-slate-100'>    
                        <h1 className='text-xl font-semibold mb-4'>Send your message</h1>
                        <div className='flex flex-col mb-4'>
                            <label
                                className='block font-semibold mt-3' htmlFor='name'>Full Name</label>
                            <input
                            {...register("name", { required: true })}
                                className='mt-1 shadow rounded-lg appearance-none-border py-2 px-3 text-gray-700 leading-light focu:outline-none focus:shadow-outline'
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your Full Name"
                            />
                            {errors.name && <span>This field is required</span>}

                        </div>
                        <div className='flex flex-col mb-4'>
                            <label
                                className='block font-semibold' htmlFor='name'>Email Address</label>
                            <input
                            {...register("email", { required: true })}
                                className='mt-1 shadow rounded-lg appearance-none-border py-2 px-3 text-gray-700 leading-light focu:outline-none focus:shadow-outline'
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                            />
                            {errors.email && <span>This field is required</span>}

                        </div>
                        <div className='flex flex-col mb-4'>
                            <label
                                className='block font-semibold' htmlFor='name'>Message</label>
                            <textarea
                            {...register("Message", { required: true })}
                                className='mt-1 shadow rounded-lg appearance-none-border py-2 px-3 text-gray-700 leading-light focu:outline-none focus:shadow-outline'
                                id="Message"
                                name="Message"
                                type="text"
                                placeholder="Type your message here"
                            />
                            {errors.Message && <span>This field is required</span>}
                        </div>
                        <button type="submit" className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration:300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}
