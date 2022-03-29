let enroll = document.getElementById('enroll');
enroll.addEventListener("click", displayStudentDetails);

let clear = document.getElementById('clear');
clear.addEventListener("click", clearInputs);

var row = 1;

function displayStudentDetails(e) {
    let name = document.getElementById('studentName').value;
    let email = document.getElementById('studentEmail').value;
    let website = document.getElementById('studentWebsite').value;
    let imglink = document.getElementById('studentImgLink').value;
    let gendermale = document.getElementById('genderMale');
    let genderfemale = document.getElementById('genderFemale');
    let language = document.getElementById('StudentSkills');
    


    if (!name || !email || !website || !imglink) {
        alert("Please fill all the data");
        return;
    }

    let display = document.getElementById('displayTable');

    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
 
    
        if (gendermale.checked == true) {
            var genderval = gendermale.value;
           
             
    } else if (genderfemale.checked == true)
        var genderval = genderfemale.value;

    
    
    else
    alert('Please fill all the data')


    var skillvalues = [];

    var checkBox = document.getElementsByName('Skills');
    for (var i = 0; i< checkBox.length; i++) {
        if (checkBox[i].checked == true) {
            skillvalues.push(checkBox[i].value);
        }
    }

    cell1.innerHTML = name +"<br>"+ genderval +"<br>"+ email +"<br>"+ website +"<br>"+ imglink  +"<br>"+ skillvalues;
    cell2.innerHTML = "<img src = 'img/profile.png.jpg' width= '140px' height ='120px' >"


    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    document.getElementById('studentWebsite').value = '';
    document.getElementById('studentImgLink').value = '';
    document.getElementById('genderMale').checked = false;
    document.getElementById('genderFemale').checked = false;
    document.getElementById('skillsJava').checked = false;
    document.getElementById('skillsHtml').checked = false;
    document.getElementById('skillsCss').checked = false;

}

function clearInputs() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentEmail').value = '';
    document.getElementById('studentWebsite').value = '';
    document.getElementById('studentImgLink').value = '';
    document.getElementById('genderMale').checked = false;
    document.getElementById('genderFemale').checked = false;
    document.getElementById('skillsJava').checked = false;
    document.getElementById('skillsHtml').checked = false;
    document.getElementById('skillsCss').checked = false;

}