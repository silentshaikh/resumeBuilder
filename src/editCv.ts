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
//   let workExperience = document.getElementById("work-experience") as HTMLTextAreaElement;
  let userSkill = document.getElementById("skill") as HTMLInputElement;
  let userLanguage = document.getElementById("language") as HTMLInputElement;
  let userAddress = document.getElementById("address") as HTMLInputElement;
  let userPortfolio = document.getElementById("portfolio") as HTMLInputElement;
  let userPicture = document.getElementById("picture") as HTMLInputElement;
  let userProfile = document.getElementById("profile") as HTMLTextAreaElement;
  let birthDate = document.getElementById('birth-date') as HTMLInputElement;
  let nationality = document.getElementById('nationality') as HTMLInputElement;
  let collegeSub = document.getElementById('college-sub') as HTMLInputElement;
  let schoolSub = document.getElementById('school-sub') as HTMLInputElement;
// HTML Form
let resumeForm = document.querySelector("#edit-form") as HTMLFormElement;

//Form Error
let formError = document.querySelector('.error') as HTMLElement;
let errorBtn = document.querySelector('.error button') as HTMLButtonElement;

//Form Submit Successfully
let formSuccess = document.querySelector('.success') as HTMLElement;
let successBtn = document.querySelector('.success button') as HTMLButtonElement;

//Handle Name
let userTrue = true;
userName?.addEventListener("input", (e) => {
   if (userName.value.trim() === "" || userName.value.length < 3) {
       // console.log(userName.nextElementSibling);
     (userName.nextElementSibling as HTMLElement).textContent = "Please Enter a username atleast 3 character";
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
userEmail?.addEventListener("input",() => {
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
userNum?.addEventListener("input",() => {
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
userJob?.addEventListener("input",() => {
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
userSkill?.addEventListener("input",() => {
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
schoolName?.addEventListener("input",() => {
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
schoolPeriod?.addEventListener("input",() => {
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
collegeName?.addEventListener("input",() => {
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
collegePeriod?.addEventListener("input",() => {
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
universityName?.addEventListener("input",() => {
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
universitySub?.addEventListener("input",() => {
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
universityPeriod?.addEventListener("input",() => {
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
userAddress?.addEventListener("input",() => {
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
lastJob?.addEventListener("input",() => {
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
lastCompany?.addEventListener("input",() => {
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
periodCompany?.addEventListener("input",() => {
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
// let lastCompanyWorkTrue = true;
// workExperience?.addEventListener("input",() => {
//    if(workExperience.value.trim() === "" || workExperience.value.length < 20){
//        (workExperience.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 20 character";
//        setTimeout(() => {
//            (workExperience.nextElementSibling as HTMLElement).textContent = "";
//          }, 3000);
//        lastCompanyWorkTrue = false;
//    }else{
//        lastCompanyWorkTrue = true;
//    }
// });

// Handle User Language
let userLanguageTrue = true;
userLanguage?.addEventListener("input",() => {
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
userProfile?.addEventListener("input",() => {
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

// Handle College Subject
let collegeSubTrue = true;
collegeSub?.addEventListener("input",() => {
    if(collegeSub.value.trim() === "" || collegeSub.value.length<4){
        (collegeSub.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 4 character";
        setTimeout(() => {
            (collegeSub.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        collegeSubTrue = false;
    }else{
        collegeSubTrue = true;
    }
});

// Handle School Subject
let schoolSubTrue = true;
schoolSub?.addEventListener("input",() => {
    if(schoolSub.value.trim() === "" || schoolSub.value.length<4){
        (schoolSub.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 4 character";
        setTimeout(() => {
            (schoolSub.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        schoolSubTrue = false;
    }else{
        schoolSubTrue = true;
    }
});

// Handle College Period
let birthDateTrue = true;
birthDate?.addEventListener("change",() => {
    if(birthDate.value.trim() === "" || birthDate.value.length === 0){
        (birthDate.nextElementSibling as HTMLElement).textContent = "Please Enter Birth Date";
        setTimeout(() => {
            (birthDate.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        birthDateTrue = false;
    }else{
        birthDateTrue = true;
    }
});

// Handle Nationality
let nationalityTrue = true;
nationality?.addEventListener("input",() => {
    if(nationality.value.trim() === "" || nationality.value.length < 4){
        (nationality.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 4 character";
        setTimeout(() => {
            (nationality.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        nationalityTrue = false;
    }else{
        nationalityTrue = true;
    }
});

// Handle User Portfolio
let portfolioTrue = true;
let portfolioRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*\/?$/;
userPortfolio?.addEventListener("input",() => {
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
userPicture?.addEventListener("input",() => {
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
let cvContainer = document.querySelector(".resume-container") as HTMLElement;

//Get Edit CV Container for show and hide 
let updateCv = document.querySelector(".edit-sec") as HTMLElement;

resumeForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    let resumeData = localStorage.getItem('Resume-Data');
    let resumeObj:Resume = JSON.parse(resumeData as string);
    if(userTrue && emailTrue && numberTrue && jobTrue && lastJobTrue && lastCompanyTrue && lastCompanyPeriodTrue && birthDateTrue && schoolSubTrue && nationalityTrue && collegeSubTrue && addressTrue && portfolioTrue && pictureTrue && profileTrue && userLanguageTrue && skillTrue && schoolNameTrue && schoolPeriodTrue && collegeNameTrue && collegePeriodTrue && universityNameTrue && universityPeriodTrue && universitySubTrue) {
      try {
        let baseEdit64Img = await handleImg();
        let resumeObjEdit:Resume = {
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
            // work: workExperience.value,
            address: userAddress.value,
            portfolio: userPortfolio.value,
            profile: userProfile.value,
            language: userLanguage.value.split(" "),
            skill: userSkill.value.split(" "),
            img: baseEdit64Img as string,
            periodCompany: periodCompany.value,
            birthDate:birthDate.valueAsDate,
            collegeSub:collegeSub.value,
            schoolSub:schoolSub.value,
            nationality:nationality.value
        };
        console.log(resumeObjEdit)
        localStorage.setItem("Resume-Data", JSON.stringify(resumeObjEdit));
        // form edit success
        formSuccess.classList.add('show');
        formSuccess.classList.remove('hide');
        successBtn.addEventListener('click',() => {
            formSuccess.classList.add('hide');
        formSuccess.classList.remove('show');
        cvContainer.classList.remove("hide-content");
            updateCv.classList.add("hide-content");
        });
            
            setTimeout(() => {
                window.location.reload();
            }, 4000);
      } catch (error) {
        console.log(error)
      }
    } else {
        // alert("Sorry, Your Form has not been Submit.")
        formError.classList.add('show');
        formError.classList.remove('hide');
        errorBtn.addEventListener('click',() => {
            formError.classList.add('hide');
        formError.classList.remove('show');
    })
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
    userAddress.value = convObj.address;
    userPortfolio.value = convObj.portfolio;
    userProfile.value = convObj.profile;
    userLanguage.value = convObj.language.join(" ");
    userSkill.value = convObj.skill.join(" ");
    lastJob.value = convObj.lastJob;
    nationality.value = convObj.nationality;
    schoolSub.value = convObj.schoolSub;
    collegeSub.value = convObj.collegeSub;
     // Parse birthDate into a Date object and assign it
     if (convObj.birthDate) {
        const birthDateValue = new Date(convObj.birthDate); // Convert string to Date
        birthDate.valueAsDate = birthDateValue; // Assign Date object to input
    } else {
        birthDate.value = ""; // Clear the input if no date is available
    }
    userPicture.value = convObj.img;
    console.log(userPicture.value);
};

// For Edit the Resume

let editBtn = document.querySelector(".edit-btn") as HTMLElement;
editBtn.addEventListener("click",() => {
    // console.log(editBtn);
    cvContainer.classList.add("hide-content");
    updateCv.classList.remove("hide-content");
    editCv();
});

// share the Resume
let downloadResumeBtnDisbl = document.querySelector(".download-btn") as HTMLElement;
let generateResumeUrl = document.querySelector(".share-resume-btn") as HTMLElement;

//remove button when we shared the link
const btnIsDisabled = () => {
    editBtn.style.display = 'none';
    downloadResumeBtnDisbl.style.display = 'none';
    generateResumeUrl.style.display = 'none';
};

//only resume show
const viewOnlyResume = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeId = urlParams.get("id");
    if (resumeId) {
        let sharedResumeData = localStorage.getItem(`ResumeData-${resumeId}`);
        if (sharedResumeData) {
          // Call the function here to hide buttons
            btnIsDisabled(); 
        }
    }
}

//Generate a Unique Url For Each Resume 
const generateLinkForShareCv = () => {
    let resumeDataForShare = localStorage.getItem("Resume-Data");
    if (resumeDataForShare) {
        // Generate a unique identifier 
        const uniqueId = Date.now(); 

        // Save the data with the unique identifier
        localStorage.setItem(`ResumeData-${uniqueId}`, resumeDataForShare);

        // Generate a short URL with the unique identifier
        const baseUrl = `${window.location.origin}/component/resume.html`;
        const shareAbleUrl = `${baseUrl}?id=${uniqueId}`;

        // Copy the URL when clicked
        navigator.clipboard.writeText(shareAbleUrl).then(() => {
            alert(`URL has been copied`);
        }).catch((error) => {
            console.log(`Failed to copy the URL: ${error}`);
        });
    } else {
        console.log("No resume data found in local storage");
    }
}

//Generate a link
generateResumeUrl?.addEventListener("click", () => {
    generateLinkForShareCv();
});

//show only resume on the share link page
window.addEventListener("DOMContentLoaded", () => {
    viewOnlyResume();
});