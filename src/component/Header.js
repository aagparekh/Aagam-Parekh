import React, { useEffect, useState } from 'react'
import tunnel from './tunnel.jpg'
function Header() {
    const titles = ["Software Developer.", "Full-Stack Developer.", "AI Enthusiast."];
    const [currentTitle, setCurrentTitle] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = titles[index];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            let updatedText = isDeleting
                ? currentText.substring(0, charIndex - 1)
                : currentText.substring(0, charIndex + 1);

            setCurrentTitle(updatedText);
            setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

            if (!isDeleting && updatedText === currentText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % titles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '600px', backgroundImage: `url(${tunnel})`, backgroundRepeat: 'no-repeat, repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div style={{ height: '250px', width: '750px' }} className=' text-center'>
                <h3 style={{ letterSpacing: '2px' }} className='text-white fw-bold'>Hello I'm Aagam Parekh</h3>
                <h2 className='text-white fs-1' style={{
                    background: "linear-gradient(90deg, #00C9FF, #92FE9D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>{currentTitle}<span style={{
                    WebkitBackgroundClip: "initial",
                    WebkitTextFillColor: "white",
                    color: "white", // fallback
                }} className='blink-cursor'>|</span> </h2>
                <p className='text-white fw-semibold'>Turning coffee and curiosity into code. </p>
                <div data-toggle="tooltip" data-placement="bottom" title="Aagam Parekh" className='mt-2'><a href="https://bit.ly/3bPb4yD"><i class="fa-brands fa-linkedin fa-3x"></i></a>
                    <a href="https://leetcode.com/u/Aagam04/"><span class="devicon--leetcode mx-3"></span></a>
                    <a href="https://github.com/aagparekh"><i class="fa-brands fa-github fa-3x text-white me-3"></i></a>
                    <a href="https://bit.ly/3AFymBc"><i class="fa-brands fa-hackerrank fa-3x text-success "></i></a>
                </div>
                {/* <button type="button" class="btn btn-sm btn-outline-light col-lg-9 mt-3 fw-bolder">Get Resume</button> */}
                <a class="btn btn-sm btn-outline-light col-lg-4 mt-3 fw-bolder" href="https://bit.ly/aagamParekh_resume" role="button">Get Resume</a>
            </div>
        </div>
    )
}

export default Header
