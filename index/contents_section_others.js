function AboutMe_Section() {
    return (
        <div>
            <div className="about-me-content">
                <figure>
                    <img src="../images/my_photoa.png"></img>
                    <figcaption id="my-position">
                        Assistant Prof. Computer/Information Science <br />
                        School of Arts and Sciences, Carolina University
                    </figcaption>
                </figure>
                <div>
                    {/* <p id="my-position">
                    Assistant Prof. Computer/Information Science <br />
                    School of Arts and Sciences, Carolina University
                </p> */}
                </div>

                <p id="greetings">
                    I made a professional transition from the military to the
                    academic community in 2021 after completing 35 years of
                    service. The experiences in the military allowed me
                    invaluable opportunities of learning how to share the sense
                    of common goal awareness and supportive fellowships, and to
                    motivate colleagues to pursue the common goals. Working in a
                    University for students who have limitless potential is
                    always a rewarding mission. Students start their journey to
                    a university with expectations and enthusiasm. However, some
                    students lose interest when they feel difficult in following
                    classes or when they encounter personal issues. It is one of
                    the most important roles and missions for a teacher to make
                    students keep their strong sense of goal awareness and to
                    maintain supportive fellowships.
                    <br /> Computer Science is a challenging subject. However,
                    it is a worthy course to invest your time, effort, and
                    enthusiasm for your future.
                    <br />
                    <br />
                    <a
                        href="https://www.youtube.com/watch?v=6XvmhE1J9PY"
                        id="barack-obama-words"
                    >
                        President Barack Obama’s words.{" "}
                    </a>
                </p>
            </div>

            {/* <div className="about-me-content"> */}
            {/* <div > */}
            <div className="about-me-content">
                <p>
                    <h3>Research Interest</h3>I possess diverse research
                    experiences and backgrounds in different fields such as
                    cybersecurity, systems engineering, computer vision, machine
                    learning, and data science in accordance with my Master’s
                    and Ph.D. program, experiences in the Military, and personal
                    interests. The roles I went through for the research
                    programs include research engineer, project manager, and
                    project supervisor. <br />
                    Currently, I am focusing on automatic target recognition and
                    tracking system development through the analysis of
                    different image sources by employing machine learning tools,
                    such as TensorFlow, and object detection models and
                    libraries such as MediaPipe, Dlib, MobileNets. The
                    programming languages for this research are Python and
                    JavaScript. <br /> Another research area I am currently
                    interested in is web-based simulation system development.
                    The primary tools for the research are HTML/CSS/JavaScript
                    employing JavaScript libraries such as P5 and React etc.
                </p>
            </div>
            {/* </div> */}
        </div>
    );
}

function Skills_Section() {
    return (
        <div className="section-skills">
            <h3 className="sub-title" id="skills-sub-title">
                Skills
            </h3>
            <div className="section-skills-content">
                <p className="skill-field">Certification</p>
                <ul>
                    <li>
                        AWS CCP : Amazon Web Service Certified Cloud
                        Practictioner
                    </li>
                </ul>
            </div>
            <div className="section-skills-content">
                <p className="skill-field">Languages</p>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>R-Data Science</li>
                    <li>Matlab/Octave</li>
                    <li>C/C++</li>
                    <li>SQL</li>
                    <li>Android</li>
                </ul>
            </div>
            <div className="section-skills-content">
                <p className="skill-field">Toos & APIs</p>
                <ul>
                    <li>
                        IDE/Editor: VS Code, PyCharm, R-Studio, JupyterLab,
                        Eclipse, Android Studio ....{" "}
                    </li>
                    <li>Web-API: JavaScript CDNs, Google APIs, Yelp, ... </li>
                    <li>
                        Package/API: Globus Toolkit, OpenCV, Pandas, Matplotlib,
                        P5.js, MediaPipe, Dlib, TensorFlow, DJI Tello Drone, JS
                        React ....
                    </li>
                    <li>Peneteration Test: Shell CLIs, Zmap, WireShark ....</li>
                </ul>
            </div>
            <div className="section-skills-content">
                <p className="skill-field">Server(Linux)</p>
                <ul>
                    <li>Web: Apache/Tomcat, Simple CPI</li>
                    <li>DB: MySql, PostgreSql, Sqlite</li>
                    <li>Telnet/SSH</li>
                    <li>(S)FTP</li>
                    <li>VNC</li>
                </ul>
            </div>
        </div>
    );
}

function WorkingProject_Section() {
    return (
        <div>
            <h2 className="sub-title" id="workingon-sub-title">
                Working on ....{" "}
            </h2>
            <div className="section-skills-content">
                <p className="skill-field">Web Programming</p>
                <ul>
                    <li>
                        <em>Algorithm Demo:</em>{" "}
                        <a href="../AstarAlgorithm/a_star.html">
                            A-star Path Finder
                        </a>
                    </li>
                    <li>
                        <em>Algorithm Demo:</em>{" "}
                        <a href="../SortingAlgorithms/sorting_algorithms.html">
                            Sorting Algorithms
                        </a>
                    </li>
                    <li>
                        <em>Algorithm Demo:</em>{" "}
                        <a href="../BinarySearchTree/binaryTree.html">
                            Binary Search Tree(DFS)
                        </a>
                    </li>
                    <li>
                        <em>Algorithm Demo:</em>
                        <a href="../DirectedGraph/graph_BFS.html">
                            Directed Graph
                        </a>
                    </li>
                    <li>
                        <em>Algorithm Demo:</em>{" "}
                        <a href="../GeneticAlgorithmText/genetic_algorithm.html">
                            Genetic Algorithm(Text Align)
                        </a>
                    </li>
                    <li>
                        <em>Algorithm Demo:</em>{" "}
                        <a href="../GeneticAlgorithmAnimal/genetic_alogrithm_fish.html">
                            Genetic Algorithm(Fish Learning)
                        </a>
                    </li>
                    <li>
                        <em>Algorithm Demo:</em>
                        <a href="../SalesmanTravel/salesman_travel.html">
                            Salesman Travel
                        </a>
                    </li>
                    <li>
                        <em>Algorithm Demo:</em>
                        <a href="../LinearRegression/linear_regression.html">
                            Linear Regression
                        </a>
                    </li>
                    <li>
                        <em>Algorithm Demo:</em>
                        <a href="../FourierTransform/FourierSeries.html">
                            Fourier Series
                        </a>
                    </li>
                    <li>
                        <em>Game:</em>
                        <a href="../SnakeFoodGame/snake_eat_food.html">
                            Snake Take Food
                        </a>
                    </li>
                    <li>
                        <em>Game:</em>
                        <a href="../BubbleSplashsByMouse/splash_bubbles.html">
                            Splash Bubbles
                        </a>
                    </li>
                    <li>
                        <em>Utility:</em>
                        <a href="../SimpleCalculator/simple_calculator.html">
                            Simple Calculator
                        </a>
                    </li>
                    <li>
                        <em>Simulation:</em>{" "}
                        <a href="../BubbleSizeChangeByMouse/bubble_mouse.html">
                            Expand Bubbles by Mouse-On
                        </a>
                    </li>
                    <li>
                        <em>Simulation:</em>{" "}
                        <a href="../BubbleGrabityDrops/bubble_gravity.html">
                            Gravity
                        </a>
                    </li>
                    <li>
                        <em>Simulation:</em>{" "}
                        <a href="../FireworksDemo/firework.html">Firework</a>
                    </li>
                    <li>
                        <em>Simulation:</em>{" "}
                        <a href="../Fractals/RecursiveTree.html">
                            Fractral Tree-1
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

function Courses_Section() {
    return (
        <div className="section-courses">
            <h2 className="sub-title" id="courses-sub-title">
                Courses Teaching / Taught
            </h2>
            <ul className="section-courses-content">
                <li>
                    <a href="https://github.com/silverwing-coder/AlgorithmsDataStrucutire">
                        CS-210/310: Algorithms and Data Structures I / II
                    </a>
                </li>
                <li>
                    <a href="https://github.com/silverwing-coder/Cybersecurity/tree/master/CS435%24EthicalHacking">
                        CS-435: Ethical Hacking
                    </a>
                </li>
                <li>
                    <a href="https://github.com/silverwing-coder/Cybersecurity">
                        IS-222: Cybersecurity Fundamentals
                    </a>
                </li>
                <li>
                    <a href="https://github.com/silverwing-coder/DroneProgramming">
                        IS-210: Intro. to Drone Programming
                    </a>
                </li>
                <li>
                    <a href="https://github.com/silverwing-coder/PythonProgramming">
                        IS-370: Python Programming
                    </a>
                </li>
                <li>
                    <a href="https://github.com/silverwing-coder/DataScience">
                        DCS-510: Foundations of Data Science
                    </a>
                </li>
                <li>
                    <a href="https://github.com/silverwing-coder/MIS">
                        MG-245: Management of Information Systems{" "}
                    </a>
                </li>
                <li>IS-1XX: Drone Fundamentals: Remote Pilot Certificate</li>
            </ul>
        </div>
    );
}

function Publications_Section() {
    return (
        <div className="section-publication">
            <h2 className="sub-title" id="publications-sub-title">
                Published Book{" "}
            </h2>
            <ul className="section-publication-content">
                <li>
                    "Analysis for Cooperative Behavior Effectiveness of
                    Autonomous Wide Area Search Munitions." BiblioBazaar, Nov.
                    2012, <em>ISBN: 128828604X, ISBN13: 9781288286041.</em>
                </li>
            </ul>
            <h2 className="sub-title" id="publications-sub-title">
                Publications / Presentations{" "}
            </h2>
            <ul className="section-publication-content">
                <li>
                    S. M. Park and S. M. Chung, "Privacy-Preserving
                    Attribute-Based Access Control for Grid Computing,"
                    International Journal of Grid and Utility Computing, Vol. 5,
                    No. 4, Inderscience, 2014, pp. 286-296.
                </li>
                <li>
                    S. M. Park and S. M. Chung, "Privacy-Preserving Attribute
                    Distribution Mechanism for Access Control in a Grid," Proc.
                    of the 21st IEEE Int'l Conf. on Tools with Artificial
                    Intelligence — ICTAI 2009, IEEE Computer Society, 2009, pp.
                    308--313.
                </li>
                <li>
                    A. Pantelopoulos, M. Alamaniotis, T. Jevremovic, S. M. Park,
                    S. M. Chung, and N. Bourbakis, "LG-Graph Based Detection of
                    NRF Spectrum Signatures: Initial Results and Comparison,"
                    Proc. of the 21st IEEE Int'l Conf. on Tools with Artificial
                    Intelligence — ICTAI 2009, IEEE Computer Society, 2009, pp.
                    683-686.
                </li>
                <li>
                    S.M. Park and S. M. Chung, "Enhanced CAS Certificate for
                    Metadata-Based Access Control in Grids," Proc. of the 20th
                    IEEE Int'l Conf. on Tools with Artificial Intelligence —
                    ICTAI 2008, Vol. 2, IEEE Computer Society, 2008, pp.
                    323-329.
                </li>
                <li>
                    The Future of ROK Air Force Electronic Warfare Systems,
                    2010, Electronic Warfare Conference, Agency of Defense
                    Development, South Korea{" "}
                </li>
                <li>
                    Anticipated Cyber Threats to Military Assets, 2016, ROK-US
                    Defence Analysis Conference, Korea Institute of Defense
                    Analysis, South Korea
                </li>
                <li>
                    N.K Cyber Capabilities and Threats, 2016, Pacific Air Force
                    Conference, ROK Air Force, South Korea
                </li>
                <li>
                    Military Cyber Threats and Counter Measures, 2017, Annual
                    Conference of the Association of Military Studies, South
                    Korea
                </li>
            </ul>
        </div>
    );
}
