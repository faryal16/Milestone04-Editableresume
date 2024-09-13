var _a;
// Listing element
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get refrences to form elements usin Ids 
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addElement = document.getElementById("add");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    // Make a condition to get output
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var add = addElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // /picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Creat Resume Output
        var resumeOutput = " <h1>EditAble Resume <br> By CodeWithFairy</h1>\n  \n     <h2>Personal Information</h2>\n     ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong> Name: </strong><span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span><p>\n        <p><strong> Email: </strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> <p>\n        <p><strong> Contact: </strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> <p>\n        <p><strong> Address: </strong><span id=\"edit-add\" class=\"editable\"> ").concat(add, " </span> <p>\n      \n\n        <h2>Education</h2>\n        <p id=\"edit-education\" class=\"editable\"> ").concat(education, " </p>\n        \n\n        <h2>Experience</h2>\n        <p id=\"edit-experience\" class=\"editable\"> ").concat(experience, " </p>\n        \n\n        <h2>Skills</h2>\n        <p id=\"edit-skills\" class=\"editable\">").concat(skills, " </p>\n      \n\n        <footer>\n       <div class=\"center\">\n         Copyright &copy; reserved by CodeWithFairy\n       </div>\n     </footer>\n\n      ");
        // display The Resume  Output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing!!');
    }
});
//   Make a Function To Edit the Resume
function makeEditable() {
    var editableElement = document.querySelectorAll("editable");
    editableElement.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace Content
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input = document.createElement("input");
                input.type = ' text';
                input.value = currentValue;
                input.classList.add('editing-input');
                currentElement.style.display = 'inline';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
