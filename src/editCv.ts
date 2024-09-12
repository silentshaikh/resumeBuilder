import { Resume } from "./type.js";
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
let resumeForm = document.querySelector("#form-edit-resume") as HTMLFormElement;

//Handle Name
let userTrue = true;
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
let emailTrue = true;
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
let numberTrue = true;
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
let jobTrue = true;
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
let skillTrue = true;
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
let schoolNameTrue = true;
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
let schoolPeriodTrue = true;
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
let collegeNameTrue = true;
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
let collegePeriodTrue = true;
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
let universityNameTrue = true;
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
let universitySubTrue = true;
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
let universityPeriodTrue = true;
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
let addressTrue = true;
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
let lastJobTrue = true;
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
let lastCompanyTrue = true;
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
let lastCompanyPeriodTrue = true;
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
let lastCompanyWorkTrue = true;
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
let userLanguageTrue = true;
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
let profileTrue = true;
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
let portfolioTrue = true;
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

//Handle Image for show in cv
const handleImg = () => {
    return new Promise((resolve,reject) => {
        let imgFile = userPicture.files ? userPicture.files[0] : null;
    if(imgFile){
        let fileReader = new FileReader();
        fileReader.onloadend = () => {
            let base64Str = fileReader.result as string;
            resolve(base64Str)
        };
        fileReader.readAsDataURL(imgFile);
    }else{
        reject("Image had not selected")
    }
    })
};

// Handle Form For Edit Resume

// Object for resume data

//Get CV Container for show and hide
let cvContainer = document.getElementById("cv-container") as HTMLElement;

//Get Edit CV Container for show and hide 
let updateCv = document.getElementById("edit-resume-form") as HTMLElement;

resumeForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    let resumeData = localStorage.getItem('Resume-Data');
    let resumeObj:Resume = JSON.parse(resumeData as string);
    if(userTrue && emailTrue && numberTrue && jobTrue && lastJobTrue && lastCompanyTrue && lastCompanyPeriodTrue && lastCompanyWorkTrue && addressTrue && portfolioTrue && pictureTrue && profileTrue && userLanguageTrue && skillTrue && schoolNameTrue && schoolPeriodTrue && collegeNameTrue && collegePeriodTrue && universityNameTrue && universityPeriodTrue && universitySubTrue) {
      try {
        let baseEdit64Img = await handleImg();
        let resumeObjEdit = {
            name: userName.value,
            email: userEmail.value,
            jobTitle: userJob.value,
            number: userNum.value,
            schoolName: schoolName.value,
            schoolPeriod: schoolPeriod.value,
            collegeName: collegeName.value,
            collegePeriod: collegePeriod.value,
            university: universityName.value,
            universitySub: universitySub.value,
            universityPeriod: universityPeriod.value,
            lastCompany: lastCompany.value,
            lastJob: lastJob.value,
            work: workExperience.value,
            address: userAddress.value,
            portfolio: userPortfolio.value,
            profile: userProfile.value,
            language: userLanguage.value.split(" "),
            skill: userSkill.value.split(" "),
            img: baseEdit64Img,
            periodCompany: periodCompany.value,
        };
        console.log(resumeObjEdit)
        localStorage.setItem("Resume-Data", JSON.stringify(resumeObjEdit));
        alert("Congratulations, Your form has been Edit Successfully.");
            cvContainer.classList.remove("hide");
            updateCv.classList.add("hide");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
      } catch (error) {
        console.log(error)
      }
            // updateJsonData();
            
            // window.location.href = './component/resume.html';
            // emptyInput();
    } else {
        alert("Sorry, Your Form has not been Submit.");
    }
});

//  Set Input Value from Local Storage
const editCv = () => {
    let getItem = localStorage.getItem("Resume-Data");
    let convObj:Resume = JSON.parse(getItem as string);
    userName.value = convObj.name;
    userEmail.value = convObj.email;
    userJob.value = convObj.jobTitle;
    userNum.value = convObj.number;
    schoolName.value = convObj.schoolName;
    schoolPeriod.value = convObj.schoolPeriod;
    collegeName.value = convObj.collegeName;
    collegePeriod.value = convObj.collegePeriod;
    universityName.value = convObj.university;
    universitySub.value = convObj.universitySub;
    universityPeriod.value = convObj.universityPeriod;
    lastCompany.value = convObj.lastCompany;
    periodCompany.value = convObj.periodCompany;
    workExperience.value = convObj.work;
    userAddress.value = convObj.address;
    userPortfolio.value = convObj.portfolio;
    userProfile.value = convObj.profile;
    userLanguage.value = convObj.language.join(" ");
    userSkill.value = convObj.skill.join(" ");
    lastJob.value = convObj.lastJob;
    userPicture.value = convObj.img;
    console.log(userPicture.value);
};

// For Edit the Resume

let editBtn = document.querySelector(".editbtn") as HTMLElement;
editBtn.addEventListener("click",() => {
    // console.log(editBtn);
    cvContainer.classList.add("hide");
    updateCv.classList.remove("hide");
    editCv();
});

//Generate Url For Resume Button
let generateResumeUrl = document.querySelector(".generate-url") as HTMLElement;
const generateLinkForShareCv = () => {
    let resumeDataForShare = localStorage.getItem("Resume-Data");
    if(resumeDataForShare){
        let strToObjectResume = JSON.parse(resumeDataForShare);
        let searchPram = new URLSearchParams({
            name: strToObjectResume.name,
            email: strToObjectResume.email,
            jobTitle: strToObjectResume.jobTitle,
            number: strToObjectResume.number,
            schoolName: strToObjectResume.schoolName,
            schoolPeriod: strToObjectResume.schoolPeriod,
            collegeName: strToObjectResume.collegeName,
            collegePeriod: strToObjectResume.collegePeriod,
            university: strToObjectResume.university,
            universitySub: strToObjectResume.universitySub,
            universityPeriod: strToObjectResume.universityPeriod,
            lastCompany: strToObjectResume.lastCompany,
            lastJob: strToObjectResume.lastJob,
            work: strToObjectResume.work,
            address: strToObjectResume.address,
            portfolio: strToObjectResume.portfolio,
            profile: strToObjectResume.profile,
            language: strToObjectResume.language.join(" "),
            skill: strToObjectResume.skill.join(" "),
            img: strToObjectResume.img,
            periodCompany: strToObjectResume.periodCompany,
        });
        //Generate Shareable Link
        const baseUrl = `${window.location.origin}/component/resume.html`;
        // console.log(baseUrl)
        const shareAbleUrl = `${baseUrl}?${searchPram.toString()}`;
        console.log(shareAbleUrl)

        //Copy the Url when click on Generate Button
        navigator.clipboard.writeText(shareAbleUrl).then(() => {
            alert(`Url has Copied`)
        }).catch((error) => {
            console.log(`Failed to Copy the URL ${error}`)
        });
        window.history.replaceState(null, '', `?${searchPram.toString()}`)
    }else{
        console.log("No Resume was Found From local Storage");
    }
}
generateResumeUrl.addEventListener("click",() => {
    generateLinkForShareCv()
})