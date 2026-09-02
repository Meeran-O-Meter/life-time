const toggleButton = document.getElementById("toggleButton");
const form = document.getElementById("form");
let amPm = false;
let liveTimer = null;

toggleButton.addEventListener("click", () => {
    amPm = !amPm;

    if (amPm) {
        toggleButton.textContent = "PM"
    } else {
        toggleButton.textContent = "AM"
    }

    toggleButton.classList.toggle("is-pm", amPm)
});

form.addEventListener("submit", (event) => {

    //Collecting Input Data
    event.preventDefault();

    form.style.display = "none";

    if (liveTimer){
        clearInterval(liveTimer)
    };

    birthdateValue = document.getElementById("birthdateInput").value;
    birthtimeValue = document.getElementById("birthtimeInput").value;
    
    //Splitting birthtime into integer values
    const birthtimeArrayText = birthtimeValue.split(":");
    const birthtimeArray = birthtimeArrayText.map(Number);
    let hours = birthtimeArray[0];
    const minutes = birthtimeArray[1];


    //12 Hour Conversion
    if (amPm && (hours < 12)) {
        hours = hours + 12;
    };

    if (!amPm && (hours === 12)) {
        hours = 0;
    };



    //Date Conversion
    const birthdateArray = birthdateValue.split(" ");
    const monthText = birthdateArray[1];
    const day = Number(birthdateArray[0]);
    const year = Number(birthdateArray[2]);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months.findIndex(m => m.toLowerCase() === monthText?.toLowerCase());

    //Constructing Final Date
    const birthDate = new Date (year, month, day, hours, minutes);

    liveTimer = setInterval(() => {
        const now = new Date();
        const timeElapsed = now - birthDate;

        //Rouding and calculating final time in different units
        const finalHours = Math.floor((timeElapsed / 3600000));
        const finalMinutes = Math.floor((timeElapsed / 60000) % 60)
        const finalSeconds = Math.floor(timeElapsed/(1000) % 60 );  

        //Adding an extra zero to give it a stopwatch look
        const formattedFinalHours = String(finalHours).padStart(2, 0);
        const formattedFinalMinutes = String(finalMinutes).padStart(2,0);
        const formattedFinalSeconds = String(finalSeconds).padStart(2,0);

        //AHHHH OUTPUTTING FINAL VALUES FINALLYYY
        document.getElementById("hours").textContent = formattedFinalHours;
        document.getElementById("minutes").textContent = formattedFinalMinutes;
        document.getElementById("seconds").textContent = formattedFinalSeconds;

    }, 1000);

});
