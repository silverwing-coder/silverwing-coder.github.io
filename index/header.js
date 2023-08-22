function Header() {
    return (
        <header>
            <nav id="header-nav-top">
                <button className="header-button">
                    <a href="#aboutme-sub-title">About Me</a>
                </button>
                <button className="header-button">
                    <a href="#edu-sub-title">Education</a>
                </button>
                <button className="header-button">
                    <a href="#experience-sub-title">Experiences</a>
                </button>
                <button className="header-button">
                    <a href="#skills-sub-title">Skills</a>
                </button>
                <button className="header-button">
                    <a href="#courses-sub-title">Courses</a>
                </button>
                <button className="header-button">
                    <a href="#publications-sub-title">Publications</a>
                </button>
                <button className="header-button">
                    <a href="#workingon-sub-title">Working on .....</a>
                </button>
            </nav>

            <div id="header-content">
                <h1 id="title">Dr. Sangmork "SAM" Park </h1>
                <div id="header-contact-info">
                    <img
                        className="icon-img"
                        src="../../images/icn-address.gif"
                        alt="address"
                    />
                    316 Mallory Hall, VMI, Lexington, VA 24450 <br />
                    <img
                        className="icon-img"
                        src="../../images/icn-email.gif"
                        alt="email"
                    />
                    sangmork.park@gmail.com, park@vmi.edu
                    <br />
                    <img
                        className="icon-img"
                        src="../../images/icn-web.gif"
                        alt="phone"
                    />
                    https://silverwing-coder.github.io/
                    <br />
                    <img
                        className="icon-img"
                        src="../../images/icn-phone.gif"
                        alt="phone"
                    />
                    +1 - 202 - 674 - 0698
                    <br />
                </div>
            </div>
        </header>
    );
}
