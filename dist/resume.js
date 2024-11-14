// import { userAddress,userEmail,userJob,userLanguage,userName,userNum,userPicture,userPortfolio,userProfile,schoolName ,schoolPeriod,collegeName,collegePeriod,universityName,universityPeriod,universitySub,lastCompany,lastJob,periodCompany,workExperience,userSkill} from "./app.js";
let resumeParent = document.querySelector(".resume-section");
//Download Resume Button
let downloadResumeBtn = document.querySelector(".download-btn");
// month list
const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
//Show the Resume
(() => {
    //get Resume Data from Local Storage
    let getResumeFromLocl = localStorage.getItem("Resume-Data");
    //convert into an Object
    let strtoObj = JSON.parse(getResumeFromLocl);
    console.log(strtoObj);
    // Convert birthDate from string to Date
    if (strtoObj.birthDate) {
        strtoObj.birthDate = new Date(strtoObj.birthDate); // Convert back to Date
    }
    if (!strtoObj) {
        resumeParent.innerHTML = `<section class="data-not-found">
                <h1>DATA - NOT - AVAILABLE</h1>
            </section>`;
    }
    else {
        resumeParent.innerHTML = `<section class="resume">
            <div class="resume-head">
                <div class="profile-img">
                    <img src=${strtoObj.img} alt="profile-photo">
                </div>
                <div class="name-jobtitle">
                    <h1>${strtoObj.name}</h1>
                    <h2>${strtoObj.jobTitle}</h2>
                </div>
            </div>
            <div class="resume-body">
                <div class="resume-left">
                    <div class="personal">
                        <h3>PERSONAL</h3>
                        <div class="pers-info">

                            <div class="pers-box">
                                <h4>Name</h4>
                                <p>${strtoObj.name}</p>
                            </div>
                            <div class="pers-box">
                                <h4>Birthday</h4>
                               <p>${strtoObj.birthDate
            ? `${strtoObj.birthDate.getDate()} ${monthList[strtoObj.birthDate.getMonth()]} ${strtoObj.birthDate.getFullYear()}`
            : "N/A"}</p>
                            </div>
                            <div class="pers-box">
                                <h4>Nationality</h4>
                                <p>${strtoObj.nationality}</p>
                            </div>
                            <div class="pers-box">
                                <h4>Portfolio</h4>
                                <p class="port">${strtoObj.portfolio}</p>
                            </div>
                        </div>
                    </div>
                    <div class="contact">
                        <h3>CONTACT</h3>
                        <div class="contct-info">

                            <div class="contct-box">
                                <h4>Email</h4>
                                <p>${strtoObj.email}</p>
                            </div>
                            <div class="contct-box">
                                <h4>Number</h4>
                                <p>${strtoObj.number}</p>
                            </div>
                            <div class="contct-box">
                                <h4>Address</h4>
                                <p>${strtoObj.address}</p>
                            </div>
                        </div>
                    </div>
                    <div class="skills">
                        <h3>SKILLS</h3>
                        <ul class="skill-list">
                        ${strtoObj.skill.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="resume-right">
                    <div class="profile">
                        <h3>PROFILE</h3>
                        <p>${strtoObj.profile}
                        </p>
                    </div>
                    <div class="experience">
                        <h3>EXPERIENCE</h3>
                       <div class="work-list">
                        <div class="work-box">
                            <div class="work-img">
                                <img src="../images/Vector (2).png" alt="">
                                <p>${strtoObj.periodCompany}</p>
                            </div>
                            <div class="company-job">
                                <h4>${strtoObj.lastJob}</h4>
                                <p>${strtoObj.lastCompany}</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div class="education">
                        <h3>EDUCATION</h3>
                       <div class="education-list">
                        <div class="education-box">
                            <div class="education-img">
                                <img src="../images/Vector (2).png" alt="">
                                <p>${strtoObj.schoolPeriod}</p>
                            </div>
                            <div class="school-college">
                                <h4>${strtoObj.schoolSub}</h4>
                                <p>${strtoObj.schoolName}</p>
                            </div>
                        </div>
                        <div class="education-box">
                            <div class="education-img">
                                <img src="../images/Vector (2).png" alt="">
                                <p>${strtoObj.collegePeriod}</p>
                            </div>
                            <div class="school-college">
                                <h4>${strtoObj.collegeSub}</h4>
                                <p>${strtoObj.collegeName}</p>
                            </div>
                        </div>
                        <div class="education-box">
                            <div class="education-img">
                                <img src="../images/Vector (2).png" alt="">
                                <p>${strtoObj.universityPeriod}</p>
                            </div>
                            <div class="school-college">
                                <h4>${strtoObj.universitySub}</h4>
                                <p>${strtoObj.university}</p>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div class="language">
                        <h3>LANGUAGE</h3>
                        <ul class="language-list">
                        ${strtoObj.language.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    </div>
                </div>

            </div>
            </section>`;
    }
    // get Resume section for download in PDF
    let resumeGet = document.querySelector(".resume");
    function downloadPdf() {
        const options = {
            margin: 10, // Margin for the PDF
            filename: 'resume.pdf', // File name for the PDF
            image: { type: 'jpeg', quality: 0.98 }, // Image type and quality
            html2canvas: { scale: 2 }, // Increases resolution for canvas
            jsPDF: { unit: 'mm', format: [297, 320], orientation: 'portrait' } // PDF format options
        };
        if (resumeGet) {
            html2pdf().from(resumeGet).set(options).save().then(() => {
                console.log("PDF generated successfully!");
            }).catch((error) => {
                console.error("Error generating PDF:", error);
            });
        }
        else {
            console.error("Resume element not found.");
        }
    }
    downloadResumeBtn.addEventListener("click", () => {
        downloadPdf();
        // alert('helo')
        // console.log(resumeGet)
    });
})();
export {};
