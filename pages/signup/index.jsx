import React from "react";
import Link from "next/dist/client/link";
import Input from "../../Components/Login/InputGroup";
import Joi, { object } from "joi";
import { useState } from "react";
import LoadButton from "./../../Components/LoadingButton/index";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirm, setConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    password: "",
    firstName: "",
    lastName: "",
    confirm: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState();

  const Schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required()
      .label("Email"),
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    password: Joi.string().required().min(4).label("Password"),
    confirm: Joi.ref("password"),
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const { error } = Schema.validate(
      {
        email,
        firstName,
        password,
        confirm,
        lastName,
      },
      { abortEarly: false }
    );
    if (error) {
      const errorArray = { ...errors };
      errorArray.email = error.details.find((item) => item.path[0] == ["email"])
        ? error.details.find((item) => item.path[0] == ["email"]).message
        : "";
      errorArray.password = error.details.find(
        (item) => item.path[0] == ["password"]
      )
        ? error.details.find((item) => item.path[0] == ["password"]).message
        : "";
      errorArray.firstName = error.details.find(
        (item) => item.path[0] == ["firstName"]
      )
        ? error.details.find((item) => item.path[0] == ["firstName"]).message
        : "";
      errorArray.lastName = error.details.find(
        (item) => item.path[0] == ["lastName"]
      )
        ? error.details.find((item) => item.path[0] == ["lastName"]).message
        : "";
      errorArray.confirm = error.details.find(
        (item) => item.path[0] == ["confirm"]
      )
        ? error.details.find((item) => item.path[0] == ["confirm"]).message
        : "";
      setErrors(errorArray);
    } else {
      try {
        setIsLoading(true);
      } catch (error) {}
    }
  };

  return (
    <div className="w-screen h-screen flex flex-row-reverse">
      <section className="w-[60%] hidden lg:flex flex-col items-center">
        <img
          className="w-[80%] h-[60%] flex flex-col items-center mt-4"
          src="./assets/illustration.svg"
          alt=""
        />
        <p className="text-[28px] w-[60%] font-medium mt-8">
          Begin your productivity journey today with timeline
        </p>
      </section>
      <main className="flex flex-col lg:pl-[40px] px-[20px] lg:px-0 lg:w-[40%] w-full ">
        <div className="flex flex-row gap-x-2 lg:my-[30px] justify-center lg:justify-start py-4 ">
          <img src="./assets/logo.svg" className="w-[60px] h-[60px]" alt="" />
        </div>
        <h2 className="font-medium text-[32px] mb-4">
          Sign up for a timeline account
        </h2>
        <span className="flex flex-row mb-4 ">
          <p className="mr-2">Already have an account with us?</p>
          <Link href="/login">
            <p className="text-timeline">Log in</p>
          </Link>
        </span>
        <div className="h-[300px] w-full  flex flex-col   items-center">
          <Input
            value={email}
            label={"Email"}
            setValue={setEmail}
            errors={errors.email}
            type="text"
          />

          <div className="w-full flex flex-row gap-x-4">
            <Input
              value={firstName}
              label={"First Name"}
              setValue={setFirstName}
              errors={errors.firstName}
              type="text"
            />
            <Input
              value={lastName}
              label={"Last Name"}
              setValue={setLastName}
              errors={errors.lastName}
              type="text"
            />
          </div>

          <Input
            value={password}
            label={"Password"}
            setValue={setPassword}
            errors={errors.password}
            type="password"
          />

          <Input
            value={confirm}
            label={"Confirm Password"}
            setValue={setConfirm}
            errors={errors.confirm}
            type="password"
          />

          <div onClick={onSubmit} className="w-[40%] py-2 px-6 ">
            <LoadButton content={"Sign Up"} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
