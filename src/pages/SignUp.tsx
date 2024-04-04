import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../services";
import { DevTool } from '@hookform/devtools'


const SignUp = () => {

  const {
    register, 
    control,
    handleSubmit, 
    formState: {errors, watch} 
  } = useForm<IFormInput>();

  const  onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }


  return (
    <div className="bg-white flex max-w-[1400px] mx-auto h-full">
      <div className="bg-my-Image bg-cover h-screen w-1/3">  
      </div>

      <div className="mx-auto mt-8 w-2/3 ">
        <div className="flex flex-col mx-auto w-[600px]">
          <div className="flex justify-between text-2xl uppercase font-semibold">
            <span>register</span>
            <span className="pr-8">log in</span>
          </div>
          <div className="h-[10px] bg-[#ccc] w-full mx-auto rounded-full mt-3"></div>
        </div>

        <h1 className="text-center mt-8 text-3xl font-semibold tracking-wide">
          Register as a Writer/Reader
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col w-[640px] mt-10 text-2xl mx-auto">
          <div className="flex mx-auto gap-4 ">
            <div className="flex flex-col w-1/2 mb-8">
              <label>First name</label>
              <input
                {...register('firstName', {
                  required: {
                    value: true,
                    message: 'First name cannot be blank.'
                  }
                })}
                type="text"
                name="firstName"
                placeholder="John"
                className="py-4 border border-[#ccc] rounded-md shadow-md mt-4 px-4"
              />
              {
                errors.firstName && 
                (<p className="text-[#dd0012]">{errors.firstName.message}</p>)
              }
            </div>

            <div className="flex flex-col  w-1/2 mb-8">
              <label>Last name</label>
              <input
                {...register('lastName', {
                  required: {
                    value: true,
                    message: 'Last name cannot be blank.'
                  }
                })}
                type="text"
                name="lastName"
                placeholder="Doe"
                className="py-4 border border-[#ccc] rounded-md shadow-md px-4 mt-4"
              />
              {
                errors.lastName && 
                (<p className="text-[#dd0012]">{errors.lastName.message}</p>)
              }
            </div>
          </div>

          <div className="flex flex-col mx-auto w-full">
              <label>You are joining as?</label>
              <select
                {...register('select', {required: true})}
                className="py-4 border border-[#ccc] rounded-md shadow-md px-4 mt-4 mb-8"
                >
                  <option value="Writer">Writer</option>
                  <option value="Writer"></option>
                </select>
            </div>

            <div className="flex flex-col mb-8">
              <label>Email</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Email is not valid'
                  }
                })}
                type="email"
                name="email"
                placeholder="Johndoe@gmail.com"
                className="py-4 border border-[#ccc] rounded-md shadow-md px-4 mt-4"
              />
              {
                errors.email && 
                (<p className="text-[#dd0012]">{errors.email.message}</p>)
              }
          </div>

          <div className="flex flex-col  mb-8">
              <label>Password</label>
              <input
                {...register('password', {
                  required: true,
                  minLength: 8 
                })}
                type="password"
                name="password"
                className="py-4 border border-[#ccc] rounded-md shadow-md px-4 mt-4"
              />
              {
                errors.password && errors.password.type === 'required' && (
                   <p className="text-[#dd0012]">Password is requird</p> 
                   )
              }
              {
                errors.password && errors.password.type === 'minLength' && 
                ( <p className="text-[#dd0012]">Password must contain at least 8 characters.</p> )
              }
          </div>

          <div className="flex flex-col  mb-8">
              <label>Confirm Password</label>
              <input
                {...register('confirmPassword', {
                  required: 'Password does not match',
                  validate: (value) => value === watch('password') || 'password does not match'
                })}
                type="password"
                name="confirmPassword"
                className="py-4 border border-[#ccc] rounded-md shadow-md px-4 mt-4"
              />
              {
                errors.confirmPassword && (
                   <p className="text-[#dd0012]">Passwords do not match.</p> 
                   )
              }
          </div>
            <button 
            type="submit" 
            className="w-full bg-[#4846b6] text-white py-4 rounded-md text-xl font-semibold mb-6">
              Create account
            </button>

            <button 
            type="submit" 
            className="flex items-center justify-center w-full gap-4 bg-white py-4 rounded-md text-xl font-semibold mb-6">
            <i className="text-2xl fa-brands fa-google"></i>
              Sign up with google
            </button>

            <button 
            type="submit" 
            className="flex items-center justify-center w-full gap-4 bg-white py-4 rounded-md text-xl font-semibold mb-6">
            <i className="text-3xl text-[#0033ff] fa-brands fa-linkedin"></i>
              Sign up with LinkedIn
            </button>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default SignUp;
