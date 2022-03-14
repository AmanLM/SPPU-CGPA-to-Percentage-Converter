let button = document.getElementById("clicked");
button.addEventListener('click', function (e) {
    var cgpa = document.getElementById("cgpa").value;
    console.log(cgpa);
    let element = document.getElementById("result");
    var percentage;
    if (cgpa > 10) {
        alert("Enter Valid CGPA");
        element.innerHTML = `CGPA cannot be greater than 10`;
        return;
    }
    else if (cgpa >= 9.50 && cgpa <= 10) {
        percentage = (cgpa * 20 - 100).toFixed(2);
    }
    else if (cgpa >= 8.25 && cgpa <= 9.49) {
        percentage = (cgpa * 12 - 25).toFixed(2);
    }
    else if (cgpa >= 6.75 && cgpa <= 8.24) {
        percentage = (cgpa * 10 - 7.5).toFixed(2);
    }
    else if (cgpa >= 5.75 && cgpa <= 6.74) {
        percentage = (cgpa * 5 + 26.25).toFixed(2);
    }
    else if (cgpa >= 4.75 && cgpa <= 5.74) {
        percentage = (cgpa * 10 - 2.50).toFixed(2);
    }
    else if (cgpa >= 4.00 && cgpa <= 4.74) {
        percentage = (cgpa * 6.6 + 13.6).toFixed(2);
    }
    else {
        alert("Invalid CGPA!")
        element.innerHTML = `CGPA cannot be less than 4.00`;
        return;
    }
    element.innerHTML = `Your Pecentage is ${percentage}%`;
})


