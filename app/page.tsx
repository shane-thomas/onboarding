
import React from "react";
import "./page.css";
import Image from "next/image";
import dots from "./assets/Dots.png";

const UserInfoField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="input-container">
    <label className="label" htmlFor={label}>{label}</label>
    <input className="input" type="text" id={label} placeholder={placeholder} />
  </div>
);

export default function Home() {
  return (
    <div className="page">
      <header className="header"></header>
      <main className="main">
        <section className="sidebar">
          <span className="title">
            <span className="underline-offset">USER</span> WORKSPACE
          </span>
          <div className="info">
            <ul>
              User-Information
              <li className="listitem">Name</li>
              <li className="listitem">Registration Number</li>
              <li className="listitem">Mail ID</li>
              <li className="listitem">Phone Number</li>
            </ul>
          </div>
          <Image className="left-dots" src={dots} alt="left dots"></Image>
        </section>
        <section className="profile">
          <h1 className="heading">Profile</h1>
          <form className="form">
            <UserInfoField label="Name" placeholder="Srija Puvvada" />
            <UserInfoField
              label="Registration Number"
              placeholder="22BCE0000"
            />
            <UserInfoField
              label="Email ID"
              placeholder="Srija.Puvvada@vitstudent.ac.in"
            />
            <UserInfoField label="Phone no." placeholder="9090909090" />
            <button className="button" type="submit">Submit</button>
          </form>
          <Image className="right-dots" src={dots} alt="right dots"></Image>
        </section>
      </main>
      <aside className="terminal">
        PROBLEMS <span className="underline-offset">OUTPUT</span> DEBUG CONSOLE
        TERMINAL COMMENTS
      </aside>
    </div>
  );
}
