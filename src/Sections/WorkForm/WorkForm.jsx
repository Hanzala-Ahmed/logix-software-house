import React from "react";
import MyHeading from "../../Components/Heading/MyHeading";
import MessageInput from "../../Components/MyInput/MessageInput";
import MyInput from "../../Components/MyInput/MyInput";
import workFormCss from "./WorkForm.module.css";

const WorkForm = () => {
  return (
    <>
      <div className={workFormCss.mainContainer}>
        <div className={workFormCss.workFormBox}>
          <MyHeading text="WANT TO WORK WITH US?" className="blackText" />
          <div className={workFormCss.formBox}>
           <MyInput value="Name"/>
           <MyInput value="Email*"/>
           <MyInput value="Interested" />
           <MyInput value="Budget" />
           <MyInput value="Subject" />
           <MyInput value="Phone" />
           <MessageInput value="Message" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkForm;
