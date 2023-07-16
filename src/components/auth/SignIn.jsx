import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Spinner } from '@chakra-ui/react';
import { AuthContext } from './authContext';
import GoogleIcon from '@mui/icons-material/Google';

// import { SHA256 } from 'crypto-js';

function Login(props) {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    async function hashToken(token) {
      const encoder = new TextEncoder();
      const data = encoder.encode(token);
      const buffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(buffer));
      const hashedToken = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
      return hashedToken;
    }

    const handleClick = () => {
      // Perform button click logic here

      // Disable the button
      if (loading){
        setButtonDisabled(true);
      }else{
        setButtonDisabled(false)
      }
      
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
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
            setLoading(true)
            const data = {
            email: formData.email,
            password: formData.password
          }
    
            try {
              const response = await axios.post('https://pa.cleverapps.io/accounts/login', JSON.stringify(data), {
                headers: {'Content-Type' : 'application/json'}
              });
              console.log(data)
              console.log(response)
              const result = response.data
              console.log(result)
              setLoading(false)
              if (result.status === true){

                const userData = result.data;
                const access_token = result.data.api_key 
                hashToken(access_token)
                  .then(hashedToken => {
                    login(hashedToken, userData);
                    // fetchUserData(userData);
                    toast.success('Login successful');
                      navigate('/dashboard')
              
                    
                  })
                  .catch(error => {
                    console.error('Error hashing token:', error);
                  });
              }else{
                setLoading(false)
                toast.error('Login Unsuccessful')
              }
               
            } catch (error) {
              // Handle any errors
              setLoading(false)
              console.error(error);
            }}
          
        }



      const validateFormData = (data) => {
        const errors = {};
        if (!data.email) {
          errors.email = 'Please enter your email address';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
          errors.email = 'Please enter a valid email address';
        }
        if (!data.password) {
          errors.password = 'Please enter your password';
        } else if (data.password.length < 8) {
          errors.password = 'Password must be at least 8 characters long';
        }
        return errors;
      };



    return (
        <div className='lg:grid grid-cols-2'>
            <div className='w-full bg-primaryColor'>

            </div>

            <div className='W-[100%] lg:w-[100%] lg:m-0 h-screen flex justify-center items-center '>
                <div className='w-[80%] md:w-[70%]  lg:w-[90%] mx-auto'>
                    <div  className='mt-8'>
                        <p className='lg:w-[100%] text-2xl text-center'>Hey, Sign In to Get Help Instantly <span className='text-primaryColor font-[700]'>!</span>  </p>
                    </div>
                    
                    <hr className='w-1/2 my-2 mx-auto'/>

{/* SIGN UP BTNS */}
                    <div className='w-[100%] flex justify-center items-center mt-8 gap-4'>
                      <h3 className='text-[14px] text-[tanik]'>Sign In with</h3>
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


                            <div className='mt-4 w-full lg:px-[4rem]'>
                                {/* <p className='font-[500] text-[tanik] text-[14px]'>Email</p> */}
                                <input className='p-2 w-full placeholder:text-lighter placeholder:text-[12px] rounded-md  outline-none drop-shadow-md drop-shadow-primaryColor' type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email"  required/>
                                {errors.email && (<p className="text-[#ff0000]">{errors.email}</p> )}
                            </div>




                            <div className='mt-4 w-full lg:px-[4rem]'>
                                {/* <p className='font-[500] text-[tanik] text-[14px]'>Password</p> */}
                                <input className='p-2  w-full placeholder:text-lighter placeholder:text-[12px] rounded-md  outline-none drop-shadow-md drop-shadow-primaryColor' type="Password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter password" required/>
                                {errors.password && (<p className="text-[#ff0000]">{errors.password}</p> )}
                                
                            </div>



                            <div className=' w-full lg:px-[4rem]'>
                                    <input className='mb-4 mt-4 bg-primaryColor  text-center w-[100%] rounded-lg p-1 text-[#fff] ' type="submit"/>    
                                               
                            </div>

                            <div className='mt-4 w-full lg:px-[4rem] text-right'>
                              <small className='italic'>
                                   Don't have an account? 
                                  <Link  className='ml-2 text-primaryColor' to="/signUp">Sign Up</Link>
                                  </small>
                            </div>

                        </div>

                    </form>
                    




                </div>
            </div>
        </div>
    );
}

export default Login;