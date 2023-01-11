import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        {/* register() 안에 들어갈 문구는 띄어쓰기가 있으면 안됨, 대소문자 상관 없음 */}
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
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
