const EdEx_content = function content_education_experience(props) {
    return (
        <div className="edex-content">
            <p className="edex-year">{props.year}</p>
            <div className="edex-comments">
                <p className="edex-title">{props.title}</p>
                <p className="edex-place">{props.place}</p>
                <p className="edex-comment">{props.comment1}</p>
                <p className="edex-comment">{props.comment2}</p>
                <p className="edex-comment">{props.comment3}</p>
                <p className="edex-comment">{props.comment4}</p>
                <p className="edex-comment">{props.comment5}</p>
            </div>
        </div>
    );
};

function Experience_Section() {
    return (
        <div>
            <h4 className="sub-title" id="experience-sub-title">
                Experiences
            </h4>
            <EdEx_content
                year="Aug. 2023 ~ Present"
                title="Assistant Professor"
                place="Department of Computer/Informatin Science, Virginia Military Institute, Lexington, VA"
            />
            <EdEx_content
                year="Mar. 2021 ~ Jul. 2023"
                title="Assistant Professor"
                place="School of Art and Science, Carolina University, Winston-Salem, NC"
            />
            <EdEx_content
                year="Jul. 2018 ~ Feb. 2021"
                title="Air Force Attache'"
                place="Office of Defense Attache', Embassy of Republic of Korea, Washington D.C."
            />
            <EdEx_content
                year="Dec. 2015 ~ Jan. 2018"
                title="Director, Cyber Protection Branch"
                place="HQ's of Republic of Korea Air Force, Kyeryong-City, Korea"
                comment1="Policy Development and Management: Cybersecurity, Cyber Training & Education Systems"
                comment2="Supervision: Cybersecurity / Electronic Warfare Systems R&D and Procurement"
            />
            <EdEx_content
                year="Dec. 2013 ~ Dec. 2015"
                title="Inspector General /Group Commander"
                place="xx Tactical Training Wing, Republic of Korea Air Force"
                comment1="Command & Supervision: Flight Safety, Base Protection and Security"
            />
            <EdEx_content
                year="Dec. 2010 ~ Dec. 2012"
                title="Director, Information Systems Management Branch"
                place="HQ's of Republic of Korea Air Force, Kyeryong-City, Korea"
                comment1="Operaton and Management: ROKAF C4I Systems"
                comment2="Supervision: C4I Systems R&D and Procurement"
            />
            <EdEx_content
                year="Mar. 1990 ~ Jun. 2000"
                title="Pilot"
                place="xx Tactical Fighter Wing, Republic of Korea Air Force"
                comment1="F-4, F-5, T-50, A/T-37, T-41"
            />
        </div>
    );
}

function Education_Section() {
    return (
        <div>
            <h4 className="sub-title" id="edu-sub-title">
                Education
            </h4>
            <EdEx_content
                year="Aug. 2010"
                title="Ph.D. in Computer Science & Engineering"
                place="Wright State University, Dayton, OH."
                comment1="Dissertation: Privacy-Preserving Attribute-Based Access Control in a Grid. "
                comment2="Advisor: Soon M. Chung"
            />
            <EdEx_content
                year="Sep. 2002"
                title="M.S. in Systems Engineering"
                place="Air Force Institute of Technology(Wright-Patt AFB), Dayton, OH."
                comment1="Dissertation: Privacy-Preserving Attribute-Based Access Control in a Grid. "
                comment2="Advisor: David R. Jacques"
            />
            <EdEx_content
                year="Mar. 1990"
                title="B.S. in Aeroanutical Engineering"
                place="Air Force Academy, Republic of Korea"
            />
        </div>
    );
}
