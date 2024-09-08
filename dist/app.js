let userName = document.getElementById("username");
let userEmail = document.getElementById("useremail");
let userJob = document.getElementById("userjob");
let lastJob = document.getElementById("job");
let userNum = document.getElementById("usernumber");
let schoolName = document.getElementById("schoolname");
let schoolPeriod = document.getElementById("schoolperiod");
let collegeName = document.getElementById("collegename");
let collegePeriod = document.getElementById("collegeperiod");
let universityName = document.getElementById("university");
let universitySub = document.getElementById("universitysub");
let universityPeriod = document.getElementById("universityperiod");
let lastCompany = document.getElementById("company");
let periodCompany = document.getElementById("period");
let workExperience = document.getElementById("work-experience");
let userSkill = document.getElementById("skill");
let userLanguage = document.getElementById("language");
let userAddress = document.getElementById("address");
let userPortfolio = document.getElementById("portfolio");
let userPicture = document.getElementById("picture");
let userProfile = document.getElementById("profile");
// HTML Form
let resumeForm = document.querySelector(".resume-form");
//Handle Name
let userTrue = false;
userName?.addEventListener("blur", (e) => {
    if (userName.value.trim() === "" || userName.value.length < 10) {
        // console.log(userName.nextElementSibling);
        userName.nextElementSibling.textContent = "Please Enter a username atleast 8 character";
        setTimeout(() => {
            userName.nextElementSibling.textContent = "";
        }, 3000);
        userTrue = false;
    }
    else {
        userTrue = true;
    }
    ;
});
// Handle Email
let emailTrue = false;
userEmail?.addEventListener("blur", () => {
    if (userEmail.value.match(/^[a-zA-Z0-9\_\.\%\+\-]+\@[a-zA-Z0-9\.\-]+\.[a-z]{2,7}$/)) {
        emailTrue = true;
    }
    else {
        userEmail.nextElementSibling.textContent = "Please Enter a correct email";
        setTimeout(() => {
            userEmail.nextElementSibling.textContent = "";
        }, 3000);
        emailTrue = false;
    }
    ;
});
// Handle Phone Number
let numberTrue = false;
userNum?.addEventListener("blur", () => {
    if (userNum.value.match(/^[0-9]{11}$/)) {
        numberTrue = true;
    }
    else {
        userNum.nextElementSibling.textContent = "Please Enter Number only 11 Digits";
        setTimeout(() => {
            userNum.nextElementSibling.textContent = "";
        }, 3000);
        numberTrue = false;
    }
});
// Handle Job Title
let jobTrue = false;
userJob?.addEventListener("blur", () => {
    if (userJob.value.trim() === "" || userJob.value.length < 10) {
        userJob.nextElementSibling.textContent = "Please Enter Job Name atleast 10 character";
        setTimeout(() => {
            userJob.nextElementSibling.textContent = "";
        }, 3000);
        jobTrue = false;
    }
    else {
        jobTrue = true;
    }
});
// Handle Skill
let skillTrue = false;
userSkill?.addEventListener("blur", () => {
    if (userSkill.value.trim() === "" || userSkill.value.length < 3) {
        userSkill.nextElementSibling.textContent = "Please Enter a skill atleast ";
        setTimeout(() => {
            userSkill.nextElementSibling.textContent = "";
        }, 3000);
        skillTrue = false;
    }
    else {
        skillTrue = true;
    }
});
// Handle School Name
let schoolNameTrue = false;
schoolName?.addEventListener("blur", () => {
    if (schoolName.value.trim() === "" || schoolName.value.length < 9) {
        schoolName.nextElementSibling.textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            schoolName.nextElementSibling.textContent = "";
        }, 3000);
        schoolNameTrue = false;
    }
    else {
        schoolNameTrue = true;
    }
});
// Handle School Period
let schoolPeriodTrue = false;
schoolPeriod?.addEventListener("blur", () => {
    if (schoolPeriod.value.trim() === "" || schoolPeriod.value.length < 9) {
        schoolPeriod.nextElementSibling.textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            schoolPeriod.nextElementSibling.textContent = "";
        }, 3000);
        schoolPeriodTrue = false;
    }
    else {
        schoolPeriodTrue = true;
    }
});
// Handle College Name
let collegeNameTrue = false;
collegeName?.addEventListener("blur", () => {
    if (collegeName.value.trim() === "" || collegeName.value.length < 9) {
        collegeName.nextElementSibling.textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            collegeName.nextElementSibling.textContent = "";
        }, 3000);
        collegeNameTrue = false;
    }
    else {
        collegeNameTrue = true;
    }
});
// Handle College Period
let collegePeriodTrue = false;
collegePeriod?.addEventListener("blur", () => {
    if (collegePeriod.value.trim() === "" || collegePeriod.value.length < 9) {
        collegePeriod.nextElementSibling.textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            collegePeriod.nextElementSibling.textContent = "";
        }, 3000);
        collegePeriodTrue = false;
    }
    else {
        collegePeriodTrue = true;
    }
});
// Handle University Name
let universityNameTrue = false;
universityName?.addEventListener("blur", () => {
    if (universityName.value.trim() === "" || universityName.value.length < 9) {
        universityName.nextElementSibling.textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            universityName.nextElementSibling.textContent = "";
        }, 3000);
        universityNameTrue = false;
    }
    else {
        universityNameTrue = true;
    }
});
// Handle University Subject
let universitySubTrue = false;
universitySub?.addEventListener("blur", () => {
    if (universitySub.value.trim() === "" || universitySub.value.length < 20) {
        universitySub.nextElementSibling.textContent = "Please Enter atleast 20 character";
        setTimeout(() => {
            universitySub.nextElementSibling.textContent = "";
        }, 3000);
        universitySubTrue = false;
    }
    else {
        universitySubTrue = true;
    }
});
// Handle College Period
let universityPeriodTrue = false;
universityPeriod?.addEventListener("blur", () => {
    if (universityPeriod.value.trim() === "" || universityPeriod.value.length < 9) {
        universityPeriod.nextElementSibling.textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            universityPeriod.nextElementSibling.textContent = "";
        }, 3000);
        universityPeriodTrue = false;
    }
    else {
        universityPeriodTrue = true;
    }
});
//Handle Address
let addressTrue = false;
userAddress?.addEventListener("blur", () => {
    if (userAddress.value.trim() === "" || userAddress.value.length < 10) {
        userAddress.nextElementSibling.textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            userAddress.nextElementSibling.textContent = "";
        }, 3000);
        addressTrue = false;
    }
    else {
        addressTrue = true;
    }
});
// Handle Last Job
let lastJobTrue = true;
lastJob?.addEventListener("blur", () => {
    if (lastJob.value.trim() === "" || lastJob.value.length < 10) {
        lastJob.nextElementSibling.textContent = "Please Enter atleast 10 character";
        setTimeout(() => {
            lastJob.nextElementSibling.textContent = "";
        }, 3000);
        lastJobTrue = false;
    }
    else {
        lastJobTrue = true;
    }
});
// Handle Last Company
let lastCompanyTrue = true;
lastCompany?.addEventListener("blur", () => {
    if (lastCompany.value.trim() === "" || lastCompany.value.length < 10) {
        lastCompany.nextElementSibling.textContent = "Please Enter atleast 10 character";
        setTimeout(() => {
            lastCompany.nextElementSibling.textContent = "";
        }, 3000);
        lastCompanyTrue = false;
    }
    else {
        lastCompanyTrue = true;
    }
});
// Handle Last Company Period
let lastCompanyPeriodTrue = true;
periodCompany?.addEventListener("blur", () => {
    if (periodCompany.value.trim() === "" || periodCompany.value.length < 9) {
        periodCompany.nextElementSibling.textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            periodCompany.nextElementSibling.textContent = "";
        }, 3000);
        lastCompanyPeriodTrue = false;
    }
    else {
        lastCompanyPeriodTrue = true;
    }
});
// Handle Last Company Period
let lastCompanyWorkTrue = true;
workExperience?.addEventListener("blur", () => {
    if (workExperience.value.trim() === "" || workExperience.value.length < 20) {
        workExperience.nextElementSibling.textContent = "Please Enter atleast 20 character";
        setTimeout(() => {
            workExperience.nextElementSibling.textContent = "";
        }, 3000);
        lastCompanyWorkTrue = false;
    }
    else {
        lastCompanyWorkTrue = true;
    }
});
// Handle User Language
let userLanguageTrue = true;
userLanguage?.addEventListener("blur", () => {
    if (userLanguage.value.trim() === "" || userLanguage.value.length < 4) {
        userLanguage.nextElementSibling.textContent = "Please Enter atleast 4 character";
        setTimeout(() => {
            userLanguage.nextElementSibling.textContent = "";
        }, 3000);
        userLanguageTrue = false;
    }
    else {
        userLanguageTrue = true;
    }
});
// Handle Last Company Period
let profileTrue = true;
userProfile?.addEventListener("blur", () => {
    if (userProfile.value.trim() === "" || userProfile.value.length < 20) {
        userProfile.nextElementSibling.textContent = "Please Enter atleast 20 character";
        setTimeout(() => {
            userProfile.nextElementSibling.textContent = "";
        }, 3000);
        profileTrue = false;
    }
    else {
        profileTrue = true;
    }
});
// Handle User Portfolio
let portfolioTrue = false;
let portfolioRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;
userPortfolio?.addEventListener("blur", () => {
    if (userPortfolio.value.match(portfolioRegex)) {
        portfolioTrue = true;
    }
    else {
        userPortfolio.nextElementSibling.textContent = "Please Enter correct URL";
        setTimeout(() => {
            userPortfolio.nextElementSibling.textContent = "";
        }, 3000);
        portfolioTrue = false;
    }
});
// Hnadle User Picture
let pictureTrue = false;
userPicture?.addEventListener("blur", () => {
    let files = userPicture.files;
    if (files && files.length > 0) {
        let fileData = files[0].name;
        if (fileData) {
            pictureTrue = true;
        }
        else {
            pictureTrue = false;
        }
    }
    else {
        userPicture.nextElementSibling.textContent = "Please Select Your Image";
        setTimeout(() => {
            userPicture.nextElementSibling.textContent = "";
        }, 3000);
        pictureTrue = false;
    }
});
// Handle Resume Form
// Object for resume data
let resumeData = localStorage.getItem('Resume-Data');
let resumeObj = JSON.parse(resumeData);
resumeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (userTrue && emailTrue && numberTrue && jobTrue && lastJobTrue && lastCompanyTrue && lastCompanyPeriodTrue && lastCompanyWorkTrue && addressTrue && portfolioTrue && pictureTrue && profileTrue && userLanguageTrue && skillTrue && schoolNameTrue && schoolPeriodTrue && collegeNameTrue && collegePeriodTrue && universityNameTrue && universityPeriodTrue && universitySubTrue) {
        alert("Congratulations, Your form has been submitted.");
        resumeObj = {
            name: userName.value,
            number: userNum.value,
            email: userEmail.value,
            jobTitle: userJob.value,
            lastJob: lastJob.value,
            lastCompany: lastCompany.value,
            periodCompany: periodCompany.value,
            work: workExperience.value,
            address: userAddress.value,
            portfolio: userPortfolio.value,
            profile: userProfile.value,
            language: userLanguage.value.split(" "),
            skill: userSkill.value.split(" "),
            schoolName: schoolName.value,
            schoolPeriod: schoolPeriod.value,
            collegeName: collegeName.value,
            collegePeriod: collegePeriod.value,
            university: universityName.value,
            universityPeriod: universityPeriod.value,
            universitySub: universitySub.value,
            img: userPicture.value,
        };
        localStorage.setItem("Resume-Data", JSON.stringify(resumeObj));
        window.location.href = './component/resume.html';
        userName.value = '';
        userEmail.value = '';
        userJob.value = '';
        userNum.value = '';
        schoolName.value = '';
        schoolPeriod.value = '';
        collegeName.value = '';
        collegePeriod.value = '';
        universityName.value = '';
        universitySub.value = '';
        universityPeriod.value = '';
        lastCompany.value = '';
        periodCompany.value = '';
        workExperience.value = '';
        userAddress.value = '';
        userPortfolio.value = '';
        userProfile.value = '';
        userLanguage.value = '';
        userSkill.value = '';
    }
    else {
        alert("Sorry, Your Form has not been Submit.");
    }
});
export {};
