import type { Resume } from "./type.js";
 let userName = document.getElementById("username") as HTMLInputElement;
 let userEmail = document.getElementById("useremail") as HTMLInputElement;
   let userJob = document.getElementById("userjob") as HTMLInputElement;
   let lastJob = document.getElementById("job") as HTMLInputElement;
   let userNum = document.getElementById("usernumber") as HTMLInputElement;
   let schoolName = document.getElementById("schoolname") as HTMLInputElement;
   let schoolPeriod = document.getElementById("schoolperiod") as HTMLInputElement;
   let collegeName = document.getElementById("collegename") as HTMLInputElement;
   let collegePeriod = document.getElementById("collegeperiod") as HTMLInputElement;
   let universityName = document.getElementById("university") as HTMLInputElement;
   let universitySub = document.getElementById("universitysub") as HTMLInputElement;
   let universityPeriod = document.getElementById("universityperiod") as HTMLInputElement;
   let lastCompany = document.getElementById("company") as HTMLInputElement;
   let periodCompany = document.getElementById("period") as HTMLInputElement;
   let workExperience = document.getElementById("work-experience") as HTMLTextAreaElement;
   let userSkill = document.getElementById("skill") as HTMLInputElement;
   let userLanguage = document.getElementById("language") as HTMLInputElement;
   let userAddress = document.getElementById("address") as HTMLInputElement;
   let userPortfolio = document.getElementById("portfolio") as HTMLInputElement;
   let userPicture = document.getElementById("picture") as HTMLInputElement;
   let userProfile = document.getElementById("profile") as HTMLTextAreaElement;
// HTML Form
let resumeForm = document.querySelector(".resume-form") as HTMLFormElement;



//Set Input Field Empty
const emptyInput = () => {
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
    lastJob.value = '';
    userPicture.value = '';
}

//Handle Name
let userTrue = false;
userName?.addEventListener("blur", (e) => {
    if (userName.value.trim() === "" || userName.value.length < 10) {
        // console.log(userName.nextElementSibling);
      (userName.nextElementSibling as HTMLElement).textContent = "Please Enter a username atleast 8 character";
      setTimeout(() => {
        (userName.nextElementSibling as HTMLElement).textContent = "";
      }, 3000);
        userTrue = false;
    }
    else {
        userTrue = true;
    };
});

// Handle Email
let emailTrue = false;
userEmail?.addEventListener("blur",() => {
    if(userEmail.value.match(/^[a-zA-Z0-9\_\.\%\+\-]+\@[a-zA-Z0-9\.\-]+\.[a-z]{2,7}$/)){
        emailTrue = true;
    }else{
        (userEmail.nextElementSibling as HTMLElement).textContent = "Please Enter a correct email";
        setTimeout(() => {
            (userEmail.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
          emailTrue = false;
    };
});

// Handle Phone Number
let numberTrue = false;
userNum?.addEventListener("blur",() => {
    if(userNum.value.match(/^[0-9]{11}$/)){
        numberTrue = true;
    }else{
        (userNum.nextElementSibling as HTMLElement).textContent = "Please Enter Number only 11 Digits";
        setTimeout(() => {
            (userNum.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
          numberTrue = false;
    }
});

// Handle Job Title
let jobTrue = false;
userJob?.addEventListener("blur",() => {
    if(userJob.value.trim() === "" || userJob.value.length<10){
        (userJob.nextElementSibling as HTMLElement).textContent = "Please Enter Job Name atleast 10 character";
        setTimeout(() => {
            (userJob.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        jobTrue = false;
    }else{
        jobTrue = true;
    }
});

// Handle Skill
let skillTrue = false;
userSkill?.addEventListener("blur",() => {
    if(userSkill.value.trim() === "" || userSkill.value.length<3){
        (userSkill.nextElementSibling as HTMLElement).textContent = "Please Enter a skill atleast ";
        setTimeout(() => {
            (userSkill.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        skillTrue = false;
    }else{
        skillTrue = true;
    }
});

// Handle School Name
let schoolNameTrue = false;
schoolName?.addEventListener("blur",() => {
    if(schoolName.value.trim() === "" || schoolName.value.length<9){
        (schoolName.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            (schoolName.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        schoolNameTrue = false;
    }else{
        schoolNameTrue = true;
    }
});

// Handle School Period
let schoolPeriodTrue = false;
schoolPeriod?.addEventListener("blur",() => {
    if(schoolPeriod.value.trim() === "" || schoolPeriod.value.length<9){
        (schoolPeriod.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            (schoolPeriod.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        schoolPeriodTrue = false;
    }else{
        schoolPeriodTrue = true;
    }
});

// Handle College Name
let collegeNameTrue = false;
collegeName?.addEventListener("blur",() => {
    if(collegeName.value.trim() === "" || collegeName.value.length<9){
        (collegeName.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            (collegeName.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        collegeNameTrue = false;
    }else{
        collegeNameTrue = true;
    }
});

// Handle College Period
let collegePeriodTrue = false;
collegePeriod?.addEventListener("blur",() => {
    if(collegePeriod.value.trim() === "" || collegePeriod.value.length<9){
        (collegePeriod.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            (collegePeriod.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        collegePeriodTrue = false;
    }else{
        collegePeriodTrue = true;
    }
});

// Handle University Name
let universityNameTrue = false;
universityName?.addEventListener("blur",() => {
    if(universityName.value.trim() === "" || universityName.value.length<9){
        (universityName.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            (universityName.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        universityNameTrue = false;
    }else{
        universityNameTrue = true;
    }
});

// Handle University Subject
let universitySubTrue = false;
universitySub?.addEventListener("blur",() => {
    if(universitySub.value.trim() === "" || universitySub.value.length<20){
        (universitySub.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 20 character";
        setTimeout(() => {
            (universitySub.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        universitySubTrue = false;
    }else{
        universitySubTrue = true;
    }
});

// Handle College Period
let universityPeriodTrue = false;
universityPeriod?.addEventListener("blur",() => {
    if(universityPeriod.value.trim() === "" || universityPeriod.value.length<9){
        (universityPeriod.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            (universityPeriod.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        universityPeriodTrue = false;
    }else{
        universityPeriodTrue = true;
    }
});

//Handle Address
let addressTrue = false;
userAddress?.addEventListener("blur",() => {
    if(userAddress.value.trim() === "" || userAddress.value.length < 10){
        (userAddress.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            (userAddress.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        addressTrue = false;
    }else{
        addressTrue = true;
    }
})

// Handle Last Job
let lastJobTrue = false;
lastJob?.addEventListener("blur",() => {
    if(lastJob.value.trim() === "" || lastJob.value.length < 10){
        (lastJob.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 10 character";
        setTimeout(() => {
            (lastJob.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        lastJobTrue = false;
    }else{
        lastJobTrue = true;
    }
});

// Handle Last Company
let lastCompanyTrue = false;
lastCompany?.addEventListener("blur",() => {
    if(lastCompany.value.trim() === "" || lastCompany.value.length < 10){
        (lastCompany.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 10 character";
        setTimeout(() => {
            (lastCompany.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        lastCompanyTrue = false;
    }else{
        lastCompanyTrue = true;
    }
});
// Handle Last Company Period
let lastCompanyPeriodTrue = false;
periodCompany?.addEventListener("blur",() => {
    if(periodCompany.value.trim() === "" || periodCompany.value.length < 9){
        (periodCompany.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 9 character";
        setTimeout(() => {
            (periodCompany.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        lastCompanyPeriodTrue = false;
    }else{
        lastCompanyPeriodTrue = true;
    }
});

// Handle Last Company Period
let lastCompanyWorkTrue = false;
workExperience?.addEventListener("blur",() => {
    if(workExperience.value.trim() === "" || workExperience.value.length < 20){
        (workExperience.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 20 character";
        setTimeout(() => {
            (workExperience.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        lastCompanyWorkTrue = false;
    }else{
        lastCompanyWorkTrue = true;
    }
});

// Handle User Language
let userLanguageTrue = false;
userLanguage?.addEventListener("blur",() => {
    if(userLanguage.value.trim() === "" || userLanguage.value.length < 4){
        (userLanguage.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 4 character";
        setTimeout(() => {
            (userLanguage.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        userLanguageTrue = false;
    }else{
        userLanguageTrue = true;
    }
});
// Handle Last Company Period
let profileTrue = false;
userProfile?.addEventListener("blur",() => {
    if(userProfile.value.trim() === "" || userProfile.value.length < 20){
        (userProfile.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 20 character";
        setTimeout(() => {
            (userProfile.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        profileTrue = false;
    }else{
        profileTrue = true;
    }
});

// Handle User Portfolio
let portfolioTrue = false;
let portfolioRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;
userPortfolio?.addEventListener("blur",() => {
    if(userPortfolio.value.match(portfolioRegex)){
        portfolioTrue = true;
    }else{
        (userPortfolio.nextElementSibling as HTMLElement).textContent = "Please Enter correct URL";
        setTimeout(() => {
            (userPortfolio.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        portfolioTrue = false;
    }
});

// Hnadle User Picture
let pictureTrue = false;
userPicture?.addEventListener("blur",() => {
    let files:FileList | null = userPicture.files;
    if(files && files.length>0){
        let fileData = files[0].name;
        if(fileData){
            pictureTrue = true;
            
        }else{
      
        pictureTrue = false;
        }
    }else{
        (userPicture.nextElementSibling as HTMLElement).textContent = "Please Select Your Image";
        setTimeout(() => {
            (userPicture.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        pictureTrue = false;

    }
});

// Handle Resume Form

// Object for resume data

// let resumeData = localStorage.getItem('Resume-Data');
let resumeObj:Resume;
resumeForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    if(userTrue && emailTrue && numberTrue && jobTrue && lastJobTrue && lastCompanyTrue && lastCompanyPeriodTrue && lastCompanyWorkTrue && addressTrue && portfolioTrue && pictureTrue && profileTrue && userLanguageTrue && skillTrue && schoolNameTrue && schoolPeriodTrue && collegeNameTrue && collegePeriodTrue && universityNameTrue && universityPeriodTrue && universitySubTrue) {
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
            emptyInput();
           
    } else {
        alert("Sorry, Your Form has not been Submit.");
    }
});

