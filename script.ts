// Listing element
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

// Get refrences to form elements usin Ids 


const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addElement = document.getElementById("add") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    

    // Make a condition to get output
    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      addElement &&
      educationElement &&
      experienceElement &&
      skillsElement 
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const add = addElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
// /picture element
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :'';


    // Creat Resume Output
    const resumeOutput =
     ` <h1>EditAble Resume <br> By CodeWithFairy</h1>
  
     <h2>Personal Information</h2>
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ''}
        <p><strong> Name: </strong><span id="edit-name" class="editable"> ${name} </span><p>
        <p><strong> Email: </strong><span id="edit-email" class="editable"> ${email} </span> <p>
        <p><strong> Contact: </strong><span id="edit-phone" class="editable"> ${phone} </span> <p>
        <p><strong> Address: </strong><span id="edit-add" class="editable"> ${add} </span> <p>
      

        <h2>Education</h2>
        <p id="edit-education" class="editable"> ${education} </p>
        

        <h2>Experience</h2>
        <p id="edit-experience" class="editable"> ${experience} </p>
        

        <h2>Skills</h2>
        <p id="edit-skills" class="editable">${skills} </p>
      

        <footer>
       <div class="center">
         Copyright &copy; reserved by CodeWithFairy
       </div>
     </footer>

      `;
    

// display The Resume  Output
    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      makeEditable();
    }
    }else{
        console.error('one or more output elements are missing!!')
    }
  });

//   Make a Function To Edit the Resume
function makeEditable() {
    const editableElement = document.querySelectorAll("editable");
    editableElement.forEach(element => {
        element.addEventListener("click", function() {
            const currentElement = element as HTMLElement;
            const currentValue =currentElement.textContent || "" ;

            // Replace Content
            if(currentElement.tagName === "P" || currentElement.tagName === "SPAN"){
                const input = document.createElement("input")
                input.type =' text';
                input.value = currentValue;
                input.classList.add('editing-input')

                currentElement.style.display = 'inline';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus()

            }
        })
    })
}

  