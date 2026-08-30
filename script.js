const toggleButton = document.getElementById("toggleButton");
const form = document.getElementById("form");
let amPm = false;

toggleButton.addEventListener("click", () => {
    amPm = !amPm;

    if (amPm) {
        toggleButton.textContent = "PM"
    } else {
        toggleButton.textContent = "AM"
    }

});

form.addEventListener("submit", (event) => {

    //Collecting Input Data
    event.preventDefault();
    birthdateValue = document.getElementById("birthdateInput").value;
    birthtimeValue = document.getElementById("birthtimeInput").value;
    const birthtimeArrayText = birthtimeValue.split(":");
    const birthtimeArray = birthtimeArrayText.map(Number);
    hours = birthtimeArray[0];
    minutes = birthtimeArray[1];


    //12 Hour Conversion
    if (amPm && (hours < 12)) {
        hours = hours + 12;
    };

    if (!amPm && (hours === 12)) {
        hours = 0;
    };

    console.log(hours, minutes);

    //Date Conversion
    birthdateArray = birthdateValue.split(" ");
    monthText = birthdateArray[1];
    day = Number(birthdateArray[0]);
    year = Number(birthdateArray[2]);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month = months.findIndex(m => m.toLowerCase() === monthText?.toLowerCase());

    console.log(month,year, day)


    //Constructing Final Date
    const birthDate = new Date (year, month, day, hours, minutes);
    console.log(birthDate)
});


