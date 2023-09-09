import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";

export default function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-gray-200">
      <form method="POST">
        <div className="px-6 text-center flex flex-col items-center md:w-[400px] border-2 border-gray-800 rounded-lg p-8 bg-white">
          <FormInput label="Email" type="email" labelStyles="text-black" />
          <FormInput
            label="Password"
            type="password"
            labelStyles="text-black"
          />
          <div className="items-center flex w-full justify-between mt-4 mb-4">
            <div className="items-center align-middle flex ">
              <input
                type="checkbox"
                id="remember"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out mr-2"
              />
              <label
                htmlFor="remember"
                className="inline-flex items-center text-black"
              >
                Remember me
              </label>
            </div>
            <a
              className="text-indigo-600 hover:underline"
              href="https://google.com"
            >
              Forgot password?
            </a>
          </div>
          <CustomButton buttonText="Log in" type="submit" />
          <CustomButton
            buttonText="Sign up"
            type="button"
            customStyles="border-2 bg-white text-black border-indigo-600 w-full rounded-md py-3 font-bold mt-2 hover:bg-indigo-600 hover:text-white"
          />
        </div>
      </form>
    </div>
  );
}
