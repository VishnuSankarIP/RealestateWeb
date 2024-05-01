import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import logo from '../src/assets/loginpic.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';



function Auth({insideRegister}) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [userInputs, setUserInputs] = useState({ email: "", password: "" })
  console.log(userInputs);



  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };

  const handleRegister=async(e)=>{
    e.preventDefault()
    if( userInputs.email && userInputs.password)
    {
        // api call
        try{
          const result=await registerAPI(userInputs)
          console.log(result);
          if(result.status==200){
            toast.success(`welcome....Please login to explore`)
            // navigate('/login')
            setTimeout(() => {
                navigate('/login')
              }, 2000)
            setUserInputs({email:"",password:""})
            
          }
          else{
            alert(result.response.data)
          }
  
  
        }
        catch(err)
        {
          console.log(err);
  
        }
  
    }
    else{
      toast.warning("please fill the form")
    }
  
   }

   const handleLogin=async(e)=>{
    e.preventDefault()
    if(userInputs.email && userInputs.password){
        // api call
        try{

            const result=await loginAPI(userInputs)
            if(result.status==200){

                if(userInputs.email=="admin@gmail.com" && userInputs.password=="admin")
                {
                    sessionStorage.setItem("token", result.data.token);
                    toast.success("welcome admin")
                    setTimeout(() => {
                        navigate('/admin')
                      }, 2000)
                   
                }
                else
                {
                    // store existing user and token
                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)
                toast.success(`welcome ...User`)
                setUserInputs({email:"",password:""})
                setTimeout(() => {
                    navigate('/dash')
                  }, 2000)
               

                }
                

        

                
              }
              else{
                    toast.warning(result.response.data)
              }



        }catch(err)
        {
            console.log(err);
        }
    }
    else{
        toast.warning("please fill the form")
    }

   }





  return (
   <>
   <div className="mainDiv" style={{ height: '100vh' }}>

<div className="row">
    <div className="col-lg-8">
        <img src={logo} width={'100%'} height={'800px'}></img>
    </div>
    <div className="col-lg-4">
        <div className="d-flex flex-column align-items-center">
            <h4 className='mt-5'>Serenity Estates</h4>

            <h2 className='mt-5 ' style={{ fontFamily: "Playfair Display" }}>{insideRegister?'Register':'Welcome Back'}</h2>
            <p style={{ fontFamily: 'PT Sans' }}>Enter your email and password to access your account</p>
   {
    insideRegister?
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{ fontFamily: 'PT Sans' }}>Email</Form.Label>
        <Form.Control style={{ borderColor: '#2b2b2b' }} type="email" placeholder="Enter your email" value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ fontFamily: 'PT Sans' }} value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })}>Password</Form.Label>
        <InputGroup>
            <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                style={{ borderColor: '#2b2b2b' }}
                value={userInputs.password}
                onChange={e => setUserInputs({ ...userInputs, password: e.target.value })}
            />
            <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </Button>
        </InputGroup>
    </Form.Group>
</Form>  :
   
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontFamily: 'PT Sans' }}>Email</Form.Label>
                    <Form.Control style={{ borderColor: '#2b2b2b' }} type="email" placeholder="Enter your email" value={userInputs.email} onChange={e => setUserInputs({ ...userInputs, email: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{ fontFamily: 'PT Sans' }}>Password</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            style={{ borderColor: '#2b2b2b' }}
                            value={userInputs.password}
                            onChange={e => setUserInputs({ ...userInputs, password: e.target.value })}
                        />
                        <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>
}
            <div className="forgetDiv d-flex justify-content-between align-items-center w-50 mt-1">
                <label className="mb-1" style={{ fontSize: '12px', fontFamily: 'PT Sans' }}>
                    <input type="checkbox" className="me-2" />
                    Remember me
                </label>
                <label className="mb-1" style={{ fontSize: '12px', fontFamily: 'PT Sans' }}>
                    Forget password?
                </label>

            </div>
{
    insideRegister?
    <div className="btnDiv w-100 justify-content-center d-flex mt-5">
    <button onClick={handleRegister} className='w-75 rounded' style={{ backgroundColor: '#2b2b2b', color: 'white', height: '40px' }}>Sign up</button>

</div> :
    <div className="btnDiv w-100 justify-content-center d-flex mt-5">
    <button onClick={handleLogin}  className='w-75 rounded' style={{ backgroundColor: '#2b2b2b', color: 'white', height: '40px' }}>Sign in</button>

</div>
}
           
            <div className="btnDiv w-100  justify-content-center d-flex mt-4 " >
                {/* <button className='w-75 rounded' style={{backgroundColor:'#2b2b2b',color:'white',height:'40px'}}>Sign in</button> */}
                {/* <GoogleLogin
                
                    onSuccess={credentialResponse => {
                        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                        console.log(credentialResponseDecoded);
                        sessionStorage.setItem("userName", credentialResponseDecoded.name);
                        setTimeout(() => {
                            navigate('/dash')
                        }, 2000)
                        toast.success("Login Succesfully")
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                /> */}

            </div>
            {
                  insideRegister ?
                    <div className="mt-3">
                      
                      <p className='mt-2'>Already have an Account?<Link style={{ color: 'black' }} to={'/login'}>Sign in</Link></p>
                    </div>
                    :
                    <div className="mt-3">
                     
                      <p>Don't have an account? <Link style={{ color: 'black' }} to={'/register'}>Sign up</Link></p>
                    </div>
                }



        </div>

    </div>
</div>
<ToastContainer position='top-center' theme='colored' autoClose={3000} />
</div>
   
   </>
  )
}

export default Auth