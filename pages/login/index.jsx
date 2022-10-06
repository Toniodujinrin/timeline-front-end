import React from "react";
import Link from "next/dist/client/link";
import Input from "../../Components/Login/InputGroup";
import Joi from "joi";
import LoadButton from "../../Components/LoadingButton";
import { useState } from "react";
import Calender from "./../../Components/Dashboard/SideNav/icons/calenderIcon";
const Login = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const Schema = Joi.object({
    password: Joi.string().required().min(4).label("Password"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .label("Email")
      .required(),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const { error } = Schema.validate(
      { password, email },
      { abortEarly: false }
    );
    if (error) {
      const errors = {
        email: error.details.find((item) => item.path[0] == ["email"])
          ? error.details.find((item) => item.path[0] == ["email"]).message
          : "",
        password: error.details.find((item) => item.path[0] == ["password"])
          ? error.details.find((item) => item.path[0] == ["password"]).message
          : "",
      };
      setErrors(errors);
    } else {
      setIsLoading(true);
      setErrors(errors);
    }
  };

  return (
    <div id="main" className="w-screen h-screen  flex flex-row-reverse">
      <section className="lg:w-[60%] hidden lg:flex lg:flex-col items-center">
        <img
          className="w-[80%] h-[60%] flex flex-col items-center mt-4"
          src="./assets/illustration2.svg"
          alt=""
        />
        <p className="text-[28px] font-medium mt-8 w-[60%]">
          Are you ready to be productive. Log into your timeline account
        </p>
      </section>
      <main className="flex flex-col lg:w-[40%] w-full pt-[20px] lg:pl-[50px] px-[20px] lg:px-0 ">
        <div className="flex w-full flex-row items-center py-[30px] justify-center lg:justify-start ">
          <img
            src="./assets/logo.svg"
            className="w-[60px] mt-6 h-[60px]"
            alt=""
          />
        </div>
        <h2 className=" font-medium w-[80%] text-[32px]">
          Log into your Timeline account
        </h2>
        <span className="flex flex-row mb-4 ">
          <p className="mr-2">Dont have an account yet?</p>
          <Link href="/signup">
            <p className="text-timeline">Sign up</p>
          </Link>
        </span>
        <div className="h-[300px] w-[100%]   flex flex-col rounded-md mt-4 items-center">
          <Input
            value={email}
            label={"Email"}
            setValue={setEmail}
            errors={errors.email}
            type="text"
          />
          <Input
            value={password}
            label={"Password"}
            setValue={setPassword}
            errors={errors.password}
            type="password"
          />

          <div onClick={onSubmit} className="w-[40%] py-2 px-6 ">
            <LoadButton content="Log in" isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
