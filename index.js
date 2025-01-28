// Define arrays for male and female Akan names
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Days of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Function to calculate day of the week using the formula
function calculateDayOfWeek(dateOfBirth) {
    const dateParts = dateOfBirth.split("-"); 
    const CC = Math.floor(dateParts[0] / 100); 
    const YY = dateParts[0] % 100; 
    const MM = parseInt(dateParts[1], 10); 
    const DD = parseInt(dateParts[2], 10); 

    // Adjust month and year for January and February
    if (MM === 1 || MM === 2) {
        MM += 12;
        if (YY === 0) {
            CC -= 1;
            YY = 99;
        } else {
            YY -= 1;
        }
    }

    // Apply the formula
    const dayOfWeek = Math.floor((((CC / 4) - 2 * CC - 1) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7);
    return (dayOfWeek + 7) % 7;
}

// Function to get Akan name
function getAkanName(dateOfBirth, gender) {
    const dayIndex = calculateDayOfWeek(dateOfBirth);

    if (isNaN(dayIndex)) {
        return "Invalid date. Please provide a valid date of birth.";
    }

    // Determine Akan name based on gender
    if (gender.toLowerCase() === "male") {
        return `You were born on a ${daysOfWeek[dayIndex]}. Your Akan name is ${maleNames[dayIndex]}.`;
    } else if (gender.toLowerCase() === "female") {
        return `You were born on a ${daysOfWeek[dayIndex]}. Your Akan name is ${femaleNames[dayIndex]}.`;
    } else {
        return "Invalid gender. Please specify 'male' or 'female'.";
    }
}

// Function to handle form submission
function generateAkanName() {
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("gender").value;

    if (!dateOfBirth || !gender) {
        document.getElementById("result").innerText = "Please fill out all fields.";
        return;
    }

    const result = getAkanName(dateOfBirth, gender);
    document.getElementById("result").innerText = result;
}


