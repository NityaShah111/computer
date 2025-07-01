import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import msOfficeImg from './assets/cone.jpg';
import tallyImg from './assets/tallyone.jpg';
import graphicsImg from './assets/designone.jpg';
import ai from './assets/pythonai.jpg';
import c from './assets/c++.jpg';
import autocad from './assets/autocad.jpg';
import basic from './assets/basic.jpg';
import excel from './assets/excel.jpg';
import hardware from './assets/hardware.jpg';
import sql from './assets/sqltwo.jpg';
import python from './assets/pythonsimple.jpg';
import php from './assets/php.jpg';
import vbnet from './assets/vb.jpg';
import java from './assets/java.jpg';
import aione from './assets/ai.jpg';
const Courses = () => {
  const [showExcelContent, setShowExcelContent] = useState(false);
  return (
    <div>
      {/* Placement Student Banner Section */}
      <div className="placement-banner">
        <div className="placement-banner-bg">
          <h1 className="placement-title">Courses</h1>
          <nav className="placement-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">&#8250;</span>
            <span className="breadcrumb-current">Courses</span>
          </nav>
          <div className="placement-bg-decor"></div>
        </div>
      </div>
      {/* Courses Section */}
      <div className="courses-section">
        <div className="course-card">
          <img src={msOfficeImg} alt="MS-Office" className="course-image" />
          <h2>C Language</h2>
          <p>
            Kickstart your programming journey with the powerful and versatile C language! At Ideal Education Institute, we offer expert-led training that strengthens your logical thinking and coding fundamentals.This course is your first step toward a successful tech career.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={tallyImg} alt="Tally with GST" className="course-image" />
          <h2>Tally with GST</h2>
          <p>
            Become a skilled accounting professional with our Tally with GST course at Ideal Education Institute. Learn practical business accounting, GST compliance, inventory handling, and more — all through India's leading accounting software.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={graphicsImg} alt="Graphics Designing" className="course-image" />
          <h2>Graphics Designing</h2>
          <p>
            Enter the world of cutting-edge technology with Python — the language behind AI, data science, web apps, and automation. At Ideal Education Institute, our beginner-friendly Python course is designed to help you think creatively and solve problems through code.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={ai} alt="Graphics Designing" className="course-image" />
          <h2>Python With AI</h2>
          <p>
           At Ideal Education Center, dive into the world of Python and Artificial Intelligence. This course is perfect for beginners and aspiring tech professionals, offering a strong foundation in Python programming along with practical applications in AI like machine learning and automation.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={c} alt="Graphics Designing" className="course-image" />
          <h2>C++ Language</h2>
          <p>
            Learn the fundamentals of coding at Ideal Education Center with our in-depth C++ Programming course. You'll explore the core concepts of software development, from variables and loops to object-oriented programming, this course sets you on the right path.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={autocad} alt="Graphics Designing" className="course-image" />
          <h2>AutoCad</h2>
          <p>
            At Ideal Education Center, bring your technical ideas to life with our professional AutoCAD training. Learn to design accurate 2D and 3D models used in architecture, engineering, manufacturing and drafting and design software.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={basic} alt="Graphics Designing" className="course-image" />
          <h2>Basic Course</h2>
          <p>
            At Ideal Education Center, our Basic Computer Course is the perfect starting point for beginners. Learn essential computer skills, including how to work with Microsoft PowerPoint for impactful presentations and Microsoft Excel for organizing and analyzing data.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={excel} alt="Graphics Designing" className="course-image" />
          <h2>Advanced Excel</h2>
          <p>
            At Ideal Education Center, our Advanced Excel Course is designed for those who want to truly harness the power of spreadsheets. Learn how to simplify complex data using advanced formulas, create dynamic reports with Pivot Tables, and automate tasks through Macros and VBA.
          </p>
          <Link to="/courses/excel" className="enroll-button">Enroll Now ➤</Link>
        </div>
        <div className="course-card">
          <img src={hardware} alt="Graphics Designing" className="course-image" />
          <h2>HardWare</h2>
          <p>
            At Ideal Education Center, our Computer Hardware Course is the perfect choice for anyone curious about how computers work. From assembling and upgrading PCs to troubleshooting and repairing common issues, this hands-on course equips you with practical skills and deep technical knowledge.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={sql} alt="Graphics Designing" className="course-image" />
          <h2>SQL</h2>
          <p>
          Step into the world of data with our expert-led SQL Course at Ideal Education Center. Designed for both beginners and aspiring developers, this course covers everything from basic queries to advanced database operations. Learn how to retrieve, insert, update, and manage data efficiently using SQL commands.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={python} alt="Graphics Designing" className="course-image" />
          <h2>Python</h2>
          <p>
          At Ideal Education Center, our Python Programming Course is designed to make coding simple, fun, and powerful. Whether you're a complete beginner or looking to expand your programming skills, Python is the perfect language to start with. You'll learn the fundamentals of coding, from variables and loops to functions, file handling, and real-world project building.  
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={php} alt="Graphics Designing" className="course-image" />
          <h2>PHP</h2>
          <p>
          Discover the power of web development with our PHP Course at Ideal Education Center. PHP is one of the most widely used server-side scripting languages for creating dynamic, interactive websites and web applications. In this course, you’ll learn how to connect your website to databases, manage forms, handle sessions, and build fully functional web.
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={vbnet} alt="Graphics Designing" className="course-image" />
          <h2>VB.NET</h2>
          <p>
          Step into the world of programming with VB.NET — the perfect language to build powerful Windows applications with ease. At Ideal Education Center, our hands-on training, expert guidance, and real-world projects help you master the skills needed in today’s software industry. Enroll now and turn your coding dreams into a professional reality!
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={java} alt="Graphics Designing" className="course-image" />
          <h2>JAVA Programming</h2>
          <p>
          Dive into the world of object-oriented programming with Java — one of the most in-demand languages in the tech industry. At Ideal Education Center, we offer expert-led training, practical projects, and a supportive learning environment to help you build strong foundations in software development.Enroll now and take the first step toward a successful coding career!
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
        <div className="course-card">
          <img src={aione} alt="Graphics Designing" className="course-image" />
          <h2>Artificial Intelligence</h2>
          <p>
          Dive into the world of object-oriented programming with Java — one of the most in-demand languages in the tech industry. At Ideal Education Center, we offer expert-led training, practical projects, and a supportive learning environment to help you build strong foundations in software development.Enroll now and take the first step toward a successful coding career!
          </p>
          <button className="enroll-button">Enroll Now ➤</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
