import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm {
  // 필수 항목이 아닌 것들은 ?:
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
}
const Error = styled.span`
  color: red;
`;
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      // 각 항목별로 기본값을 지정해 줄 수 있음
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        {/* register() 안에 들어갈 문구는 띄어쓰기가 있으면 안됨, 대소문자 상관 없음 */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: />^[A-Za-z0-9._/+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <Error> {errors?.email?.message as string}</Error>
        <input {...register("firstName", { required: "write here" })} placeholder="First Name" />
        <Error> {errors?.firstName?.message as string}</Error>
        <input {...register("lastName", { required: "write here" })} placeholder="Last Name" />
        <Error> {errors?.lastName?.message as string}</Error>
        <input
          {...register("userName", { required: "write here", minLength: 10 })}
          placeholder="Username"
        />
        <Error> {errors?.userName?.message as string}</Error>
        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <Error> {errors?.password?.message as string}</Error>
        <input
          {...register("password1", {
            required: "Password if required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password1"
        />
        <Error> {errors?.password1?.message as string}</Error>
        <button>Add</button>
      </form>
    </div>
  );
}

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   // React.FormEvent<HTMLInputElement> 이건 타입스크립트 사용 시에만!
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       // event의 currentTarget 내부 value를 distructuring 문법을 이용해 가져옴
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   console.log(toDo);
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("submit", toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
