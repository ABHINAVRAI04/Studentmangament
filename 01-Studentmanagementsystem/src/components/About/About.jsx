import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
export default function About() {
  const auth = localStorage.getItem("user")
  const navigator = useNavigate()
  useEffect(()=>{
    if(!auth){navigator("/login")}
  })
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
            src="https://play-lh.googleusercontent.com/QnW_gvq3KcKT0_ecfGI1YciWLq73yi5cuJeAvXHXB3U3Bf4fS-pOBj56c331gDdal9Zp"
            alt="image"
            style={{ width:"100vw"}}

            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold md:text-4xl text-red-600">
              Learning is a journey..Let's begin it with Studyadda....
            </h2>
            <p className="mt-6 text-gray-600">
              With an endeavour to provide a unique interactive educational
              platform where learning takes precedence, Studyadda was
              conceptualized. Education is expensive and buying costly books is
              not possible for everyone. Studyadda is that oasis in the desert
              that gives you the most updated educational news, exam alerts and
              sample papers, all on one interactive web portal. Providing you
              quality, educational material at simple, affordable rates is our
              humble endeavour. Studyadda, unlike its many counterparts, takes
              pride in educating the youth at the most minimal charges. We are
              the only interactive web portal which periodically updates its
              study material keeping abreast with the latest educational trends.
              Created by the enterprising IIT alumni, Studyadda is a web portal
              where students can find all types of solutions to their various,
              complicated educational queries. Study materials ranging from the
              6th to 12th standard, engineering and Medical examination papers,
              previous questions, theory notes, we have it all here for you. If
              you are looking for answers pertaining to course materials from
              the CBSE or ICSE or any qualified board, your search ends with
              Studyadda!! It is our mission to empower you, our young learners
              with an affordable, well-informed portal where you can take online
              tests to test your abilities. Studyadda is unique in its demeanour
              because we provide renowned periodic magazines like Hybrid, IITJEE
              Times and PMT Times at your doorstep, with minimal subscription
              charges.
            </p>
            <p className="mt-4 text-gray-600">
              When you bond with Studyadda, you experience and evolve in the
              following ways: By taking our online assessments, you can identify
              your strengths, weaknesses, and brush upon them periodically.
              Gather most informative educational material on one platform, at a
              minimal cost Create a strong learning foundation for yourself from
              where you can climb towards challenging examinations. Your journey
              of finding the road to an enterprising career starts here with
              Studyadda. Lets find your destination...together...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
