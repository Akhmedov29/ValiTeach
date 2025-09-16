import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Routes/SignUp";
import Login from "./components/Routes/LogIn";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useEffect, useState } from "react";

import SideBar from "./components/SideBar";
import Home from "./components/Routes/Home";
import Projects from "./components/Routes/Projects";
import Codefiles from "./components/Routes/Codefiles";
import Contact from "./components/Routes/Contact";
import Cources from "./components/Routes/Cources";

import Javascript from "./components/Routes/cource files/Javascript";
import Typescript from "./components/Routes/cource files/Typescript";
import React from "./components/Routes/cource files/Reactt";
import Vue from "./components/Routes/cource files/Vue";
import Angular from "./components/Routes/cource files/Angular";
import Foundation from "./components/Routes/cource files/Foundation";

import JavaScriptW from "./components/Routes/cource files/Cource watch/JavaScriptW";
import TypescriptW from "./components/Routes/cource files/Cource watch/TypescriptW";
import VueW from "./components/Routes/cource files/Cource watch/VueW";
import ReacttW from "./components/Routes/cource files/Cource watch/ReacttW";
import AngularW from "./components/Routes/cource files/Cource watch/AngularW";
import FoundationW from "./components/Routes/cource files/Cource watch/FoundationW";

import Tg from "./components/Routes/Project Watch/project/Tg";
import X from "./components/Routes/Project Watch/project/X";
import Drive from "./components/Routes/Project Watch/project/Drive";
import Netflix from "./components/Routes/Project Watch/project/Netflix";
import Tgbot from "./components/Routes/Project Watch/project/Tgbot";
import Jira from "./components/Routes/Project Watch/project/Jira";

import TgW from "./components/Routes/Project Watch/TgW";
import XW from "./components/Routes/Project Watch/XW";
import DriveW from "./components/Routes/Project Watch/DriveW";
import NetflixW from "./components/Routes/Project Watch/NetflixW";
import TgbotW from "./components/Routes/Project Watch/TgbotW";
import JiraW from "./components/Routes/Project Watch/JiraW";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);


  return (
    <>
      <div className="w-full h-full pl-[280px] pt-[1px] pr-[35px] pb-[35px] ">
        <div className="fixed left-0 top-0">
          <SideBar />
        </div>
        <div className="fixed top-0 left-0">
          <Navbar />
        </div>
        <div className="pt-[100px] px-6">
          <Toaster/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cources" element={<Cources />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/codefiles" element={<Codefiles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login user={user} setUser={setUser}/>} />
            {/* Cource */}
            <Route path="/cources/foundation" element={<Foundation />} />
            <Route path="/cources/javascript" element={<Javascript />} />
            <Route path="/cources/typescript" element={<Typescript />} />
            <Route path="/cources/react" element={<React />} />
            <Route path="/cources/vue" element={<Vue />} />
            <Route path="/cources/angular" element={<Angular />} />
            {/* Cource watch */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cources/foundation/watch" element={<FoundationW />} />
            <Route path="/cources/javascript/watch" element={<JavaScriptW />} />
            <Route path="/cources/typescript/watch" element={<TypescriptW />} />
            <Route path="/cources/angular/watch" element={<AngularW />} />
            <Route path="/cources/vue/watch" element={<VueW />} />
            <Route path="/cources/react/watch" element={<ReacttW />} />
            {/* Project */}
            <Route path="/project/tg" element={<Tg />} />
            <Route path="/project/x" element={<X />} />
            <Route path="/project/drive" element={<Drive />} />
            <Route path="/project/netflix" element={<Netflix />} />
            <Route path="/project/tg-bot" element={<Tgbot />} />
            <Route path="/project/jira" element={<Jira />} />
            {/* Project watch */}
            <Route path="/project/tgw" element={<TgW />} />
            <Route path="/project/xw" element={<XW />} />
            <Route path="/project/drivew" element={<DriveW />} />
            <Route path="/project/netflixw" element={<NetflixW />} />
            <Route path="/project/tg-botw" element={<TgbotW />} />
            <Route path="/project/jiraw" element={<JiraW />} />
            {/* Code */}
            <Route path="" element="" />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
