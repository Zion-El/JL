import {React, useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import GoogleIcon from '@mui/icons-material/Google';


function Signup(props) {

    const navigate = useNavigate()
    // const password = useRef({});
    
    const [plan, setPlan] = useState('starter')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        // username: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });

      const [errors, setErrors] = useState({});
    


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };
    


      const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
            
          const data = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          is_assistant: false
        }
    
        console.log(data)
            try {
              
              const response = await axios.post('https://pa.cleverapps.io/accounts/register', JSON.stringify(data));
              console.log(response)
              const result = response.data
               if (result.status === true){
                toast.success("Registration Successful")
                navigate("/signin")
               }else{
                toast.error("Registration failed")
               }

               
            } catch (error) {
              // Handle any errors
              console.error(error);
            }}
          
        }
      
    
      const validateFormData = (data) => {
        const errors = {};
        if (!data.firstName) {
          errors.firstName = 'Please enter your first name';
        }
        if (!data.lastName) {
          errors.lastName = 'Please enter your last name';
        }

        if (!data.email) {
          errors.email = 'Please enter your email address';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = 'Please enter a valid email address';
        }
        // if (!data.username) {
        //     errors.username = 'Please enter your username';
        //   } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(data.username)) {
        //     errors.username = 'username is invalid';
        //   }
          if (!data.phone) {
            errors.phone = 'Please enter your phone';
          } else if (data.phone.length < 11 || !/^\d{11}$/.test(data.phone)) {
            errors.phone = 'Phone number cannot be less than 11 and can only contain digits';
          }
        if (!data.password) {
          errors.password = 'Please enter your password';
        } else if (data.password.length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        }
        if (!data.confirmPassword) {
          errors.confirmPassword = 'Please confirm your password';
        } else if (data.password !== data.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
      };
    
 
   


        return (
        <div className='lg:grid grid-cols-2'>
            <div className='w-full bg-primaryColor'>

            </div>

            <div className='W-[100%] lg:w-[100%] lg:m-0 h-screen flex justify-center items-center'>
                <div className='w-[80%] md:w-[70%]  lg:w-[90%] mx-auto my-auto'>
                    <div  className='mt-8'>
                        <p className='lg:w-[100%] text-2xl text-center'>Hey, Sign Up to Get Instant Help <span className='text-primaryColor font-[700]'>!</span>  </p>
                    </div>
                    
                    <hr className='w-1/2 my-2 mx-auto'/>

{/* SIGN UP BTNS */}
                    <div className='w-[100%] flex justify-center items-center mt-8 gap-4'>
                      <h3 className='text-[14px] text-[tanik]'>Sign Up with</h3>
                      <a href="">
                        <button className='bg-primaryColor text-white text-[14px] p-2 rounded-[8px]'>
                          <GoogleIcon />
                        </button>
                      </a>

                      <a href="">
                        <button className=' border border-primaryColor rounded-[8px] py-1 px-4'>
                          <span className='font-[700] text-primaryColor text-2xl'>f</span>
                        </button>
                      </a>

                    </div>

                    <div className='flex justify-between items-center mt-10'>
                      <div className='h-[1px] w-1/4 md:w-1/3 bg-gray-200'></div>
                      <small className='text-[14px] text-[tanik] text-gray-500'> 
                          Or fill out your details
                      </small>
                      <div className='h-[1px] w-1/4 md:w-1/3 bg-gray-200'></div>
                    </div>



                    <form onSubmit={handleSubmit}>

                        <div className='lg:w-[100%] md:w-[100%]'>

                            <div className='mt-4 w-full  lg:px-[4rem]'>
                                {/* <p className='font-[500] text-[tanik] text-[14px]'>First Name</p> */}
                                <input className='p-2 w-full placeholder:text-lighter placeholder:text-[12px] rounded-md  outline-none drop-shadow-md drop-shadow-primaryColor' type="text" name="firstName" value={formData.firstName}  onChange={handleInputChange} placeholder='First Name'  />
                                {errors.firstName && (<p className="text-[#ff0000]">{errors.firstName}</p> )}
                            </div>

                            <div className='mt-4 w-full lg:px-[4rem]'>
                                {/* <p className='font-[500] text-[tanik] text-[14px]'>Last Name</p> */}
                                <input className='p-2  w-full placeholder:text-lighter placeholder:text-[12px] rounded-md  outline-none drop-shadow-md drop-shadow-primaryColor' type="text" name="lastName"  value={formData.lastName} onChange={handleInputChange} placeholder='Last Name'  required/>
                                {errors.lastName && (<p className="text-[#ff0000]">{errors.lastName}</p> )}

                            </div>

                            <div className='mt-4 w-full lg:px-[4rem]'>
                                {/* <p className='font-[500] text-[tanik] text-[14px]'>Email</p> */}
                                <input className='p-2 w-full placeholder:text-lighter placeholder:text-[12px] rounded-md  outline-none drop-shadow-md drop-shadow-primaryColor' type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email"  required/>
                                {errors.email && (<p className="text-[#ff0000]">{errors.email}</p> )}
                            </div>

                            <div className='mt-4 w-full lg:px-[4rem]'>
                              {/* <p className='font-[500] text-[tanik] text-[14px]'>Phone</p> */}
                                <input className='p-2  w-full placeholder:text-lighter placeholder:text-[12px] rounded-md  outline-none drop-shadow-md drop-shadow-primaryColor' type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="08123456789" required/>
                                {errors.phone && (<p className="text-[#ff0000]">{errors.phone}</p> )}
                            </div>


                            <div className='mt-4 w-full lg:px-[4rem]'>
                                {/* <p className='font-[500] text-[tanik] text-[14px]'>Password</p> */}
                                <input className='p-2  w-full placeholder:text-lighter placeholder:text-[12px] rounded-md  outline-none drop-shadow-md drop-shadow-primaryColor' type="Password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" required/>
                                {errors.password && (<p className="text-[#ff0000]">{errors.password}</p> )}
                                
                            </div>
                            <div className='mt-4 w-full lg:px-[4rem]'>
                                {/* <p className='font-[500] text-[tanik] text-[14px]'>Confirm Password</p> */}
                                <input className='p-2  w-full placeholder:text-lighter placeholder:text-[12px] rounded-md  outline-none drop-shadow-md drop-shadow-primaryColor' type="password" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" required  name="confirmPassword"/>
                                {errors.confirmPassword && (<p className="">{errors.confirmPassword}</p> )}
                            </div>

                            <div className='mt-4 w-full lg:px-[4rem] flex items-center m-auto'>
                                <ChakraProvider>
                                <Checkbox colorScheme='twitter' >
                                </Checkbox>
                                </ChakraProvider>
                                <small  className='ml-2'>
                                    I accept the  
                                    <Link className='ml-1 text-primaryColor' to="/termsofuse">
                                        Terms of Use
                                    </Link> and  
                                    <Link className='ml-2 text-primaryColor' to="/privacy">
                                        Privacy Policy
                                    </Link>
                                </small>
                            </div>


                            <div className=' w-full lg:px-[4rem]'>
                                    <input className='mb-4 mt-4 bg-primaryColor  text-center w-[100%] rounded-lg p-1 text-[#fff] ' type="submit"/>    
                                               
                            </div>

                            <div className='mt-4 w-full lg:px-[4rem] text-right'>
                              <small className='italic'>
                                   Already have an account? 
                                  <Link  className='ml-2 text-primaryColor' to="/login">Sign In</Link>
                                  </small>
                            </div>

                        </div>

                    </form>
                    




                </div>
            </div>
        </div>
    );
}

export default Signup;
