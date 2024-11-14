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
let resumeForm = document.querySelector(".resume-form") as HTMLFormElement;

//Form Error
let formError = document.querySelector('.error') as HTMLElement;
let errorBtn = document.querySelector('.error button') as HTMLButtonElement;

//Form Submit Successfully
let formSuccess = document.querySelector('.success') as HTMLElement;
let successBtn = document.querySelector('.success button') as HTMLButtonElement;


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
    // workExperience.value = '';
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
userName?.addEventListener("input", (e) => {
    if (userName.value.trim() === "" || userName.value.length < 3) {
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
let emailTrue = false;
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
let numberTrue = false;
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
let jobTrue = false;
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
let skillTrue = false;
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
let schoolNameTrue = false;
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
let schoolPeriodTrue = false;
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
let collegeNameTrue = false;
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
let collegePeriodTrue = false;
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
let universityNameTrue = false;
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
let universitySubTrue = false;
universitySub?.addEventListener("input",() => {
    if(universitySub.value.trim() === "" || universitySub.value.length<10){
        (universitySub.nextElementSibling as HTMLElement).textContent = "Please Enter atleast 10 character";
        setTimeout(() => {
            (universitySub.nextElementSibling as HTMLElement).textContent = "";
          }, 3000);
        universitySubTrue = false;
    }else{
        universitySubTrue = true;
    }
});

// Handle College Subject
let collegeSubTrue = false;
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
let schoolSubTrue = false;
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
let universityPeriodTrue = false;
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

// Handle College Period
let birthDateTrue = false;
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

//Handle Address
let addressTrue = false;
userAddress?.addEventListener("input",() => {
    if(userAddress.value.trim() === "" || userAddress.value.length < 9){
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
let lastCompanyTrue = false;
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
let lastCompanyPeriodTrue = false;
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

// Handle User Language
let userLanguageTrue = false;
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
let profileTrue = false;
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
// Handle Nationality
let nationalityTrue = false;
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
let portfolioTrue = false;
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



// Handle Resume Form

// Object for resume data

// let resumeData = localStorage.getItem('Resume-Data');
let resumeObj:Resume;
resumeForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    if(userTrue && emailTrue && numberTrue && jobTrue && lastJobTrue && lastCompanyTrue && lastCompanyPeriodTrue && schoolSubTrue && collegeSubTrue && birthDateTrue && nationalityTrue && addressTrue && portfolioTrue && pictureTrue && profileTrue && userLanguageTrue && skillTrue && schoolNameTrue && schoolPeriodTrue && collegeNameTrue && collegePeriodTrue && universityNameTrue && universityPeriodTrue && universitySubTrue) {
        try {
            let base64Image = await handleImg();
            // alert("Congratulations, Your form has been submitted.");
            resumeObj = {
                name: userName.value,
                number: userNum.value,
                email: userEmail.value,
                jobTitle: userJob.value,
                lastJob: lastJob.value,
                lastCompany: lastCompany.value,
                periodCompany: periodCompany.value,
                // work: workExperience.value,
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
                img: base64Image as string,
                birthDate:birthDate.valueAsDate,
                collegeSub:collegeSub.value,
                schoolSub:schoolSub.value,
                nationality:nationality.value
            };

            localStorage.setItem("Resume-Data", JSON.stringify(resumeObj));
            formSuccess.classList.add('show');
        formSuccess.classList.remove('hide');
        successBtn.addEventListener('click',() => {
            formSuccess.classList.add('hide');
        formSuccess.classList.remove('show');
        window.location.href = '../component/resume.html';
        });
            emptyInput();
        } catch (error) {
            console.log(error)
        }
           
    } else {
        formError.classList.add('show');
        formError.classList.remove('hide');
        errorBtn.addEventListener('click',() => {
            formError.classList.add('hide');
        formError.classList.remove('show');
        });
    }
});

