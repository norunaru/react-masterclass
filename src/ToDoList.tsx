import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please wirte a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
//5.9 finished

//register사용시 객체 반환.
// <input {...register("Email")}/>로 register함수가 반환하는 객체를 input의 prop으로 준다
// -> onChange, value, useState 대체

//watch는 form의 입력값 변화를 관찰하는 함수

//handleSubmit은 validation 담당. preventDefault도 담당
//<form onSubmit={handleSubmit(onValid)}> 으로 form의 submit을 다룬다
//handleSubmit의 인수는 2개 --- 첫번째는 데이터 유효할때 실행할 함수(필수), 유효하지 않을때 실행할 함수
//<input {...register("firstName", { required: true })}placeholder="First Name"/>
//^은 JS로 required를 설정, 입력하지 않고 submit시 빈칸으로 커서 자동적으로 이동
//추가로 pattern같은 조건을 주면 required, pattern을 만족해야 에러 없이 실행

//formState은 에러를 발생시킴
//console.log(formState.errors) 실행시 객체 받음 ---
//type가 오류의 형식, message는 오류 발생시 보낼 메시지 { required: "Password required", minLength: 5 }
