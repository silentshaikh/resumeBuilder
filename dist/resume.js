// import { userAddress,userEmail,userJob,userLanguage,userName,userNum,userPicture,userPortfolio,userProfile,schoolName ,schoolPeriod,collegeName,collegePeriod,universityName,universityPeriod,universitySub,lastCompany,lastJob,periodCompany,workExperience,userSkill} from "./app.js";
let resumeParent = document.getElementById("resume-parent");
//Download Resume Button
let downloadResumeBtn = document.querySelector(".downladPdf");
//Generate Url For Resume Button
let generateResumeUrl = document.querySelector(".generate-url");
//Show the Resume
(() => {
    //get Resume Data from Local Storage
    let getResumeFromLocl = localStorage.getItem("Resume-Data");
    //convert into an Object
    let strtoObj = JSON.parse(getResumeFromLocl);
    console.log(strtoObj);
    if (!strtoObj) {
        resumeParent.innerHTML = `<section class="data-not-found">
                <h1>DATA - NOT - AVAILABLE</h1>
            </section>`;
    }
    else {
        resumeParent.innerHTML = `<section class="resume" id="resum">
                <div class="user-img-name">
                    <div class="usr-img">
                        <img src="${strtoObj.img}" alt="resume-image">
                    </div>
                    <div class="user-name">
                        <h1 >${strtoObj.name}</h1>
                        <h2>${strtoObj.jobTitle}</h2>
                    </div>
                </div>
                <div class="contect-about">
                    <div class="contact">
                        <h3>CONTACT</h3>
                        <div class="cont-info">
                            <p><i class="fa-solid fa-phone"></i> ${strtoObj.number}</p>
                            <p><i class="fa-solid fa-envelope"></i> ${strtoObj.email}</p>
                            <p><i class="fa-brands fa-firefox"></i> ${strtoObj.portfolio}</p>
                            <p><i class="fa-solid fa-location-pin"></i> ${strtoObj.address}</p>
                        </div>
                    </div>
                    <div class="about">
                        <h3>ABOUT ME</h3>
                        <p>${strtoObj.profile}</p>
                    </div>
                </div>
                <div class="education-experience">
                    <div class="education">
                        <h3>education</h3>
                        <div class="educ">
                            <div class="educ-1">
                                <h4>${strtoObj.university}</h4>
                                <h5>${strtoObj.universitySub}</h5>
                                <h6>${strtoObj.universityPeriod}</h6>
                            </div>
                            <div class="educ-1">
                                <h4>${strtoObj.collegeName}</h4>
                                <h6>${strtoObj.collegePeriod}</h6>
                            </div>
                            <div class="educ-1">
                                <h4>${strtoObj.schoolName}</h4>
                                <h6>${strtoObj.schoolPeriod}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="work-experience">
                        <h3>work experience</h3>
                        <div class="work">
                            <h4>${strtoObj.lastJob}</h4>
                            <p>${strtoObj.work}</p>
                            <h5>${strtoObj.lastCompany}</h5>
                            <h6>${strtoObj.periodCompany}</h6>
                        </div>
                    </div>
                </div>
                <div class="skill-language">
                    <div class="language">
                        <h3>LANGUAGE</h3>
                        <ul>
                            ${strtoObj.language.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="skills">
                        <h3>SKILL</h3>
                        <ul>
                        ${strtoObj.skill.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </section> `;
    }
    // get Resume section for download in PDF
    let resumeGet = document.querySelector("#resum");
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
    });
})();
export {};
