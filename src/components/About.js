import React from "react";
export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-start">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-start">
                    <h1 className="title-font sm:text-4xl font-serif text-3xl mb-4 font-medium text-ash-gray">
                        Hi, I'm Jennifer.
                        <br className="hidden lg:inline-block" /> I love to code and learn new things!
                    </h1>
                    <p className="mb-8 leading-relaxed text-ebony">
                        I'm a first year software 
                        engineering (co-op) student @McMaster University. I'm currently 
                        interested in web development, back-end development, frameworks and APIs!
                    </p>
                    <div className="flex justify-self-start">
                        <a
                            href="./resume.pdf"
                            className="inline-flex font-normal text-white bg-artichoke border-0 py-2 px-6 focus:outline-none hover:bg-ebony rounded-full text-lg">
                            Check out my resume
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex font-normal text-white bg-artichoke border-0 py-2 px-6 focus:outline-none hover:bg-ebony rounded-full text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://image.freepik.com/free-vector/young-tiny-girl-sitting-coding-via-laptop-computer-programmer-code-flat-vector-illustration-it-digital-technology_74855-8751.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
