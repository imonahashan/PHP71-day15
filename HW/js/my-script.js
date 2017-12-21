// IMAGE PREVIEW

// FIRST NAME
function checkFirstName(){
    var firstNameLength = $ ('#firstName').val().length;

    if(firstNameLength >= 2 && firstNameLength <= 15){
        $('#firstNameError').text('');
        return true;
    }
    else{
        $('#firstNameError').text('*Should be between 2-15 characters');
        return false;
    }
};



$('#firstName').blur(function () {
    checkFirstName();
});
$('#firstName').keyup(function () {
    checkFirstName();
});


// MIDDLE NAME
function checkMiddleName(){
    var firstNameLength = $ ('#middleName').val().length;

    if(firstNameLength >= 2 && firstNameLength <= 15){
        $('#middleNameError').text('');
        return true;
    }
    else{
        $('#middleNameError').text('*Should be between 2-15 characters');
        return false;
    }
}


$('#middleName').blur(function () {
    checkMiddleName();
});
$('#middleName').keyup(function () {
    checkMiddleName();
});

// LAST NAME
function checkLastName(){
    var lastNameLength = $ ('#lastName').val().length;

    if(lastNameLength > 6 && lastNameLength <= 15){
        $('#lastNameError').text('');
        return true;
    }
    else{
        $('#lastNameError').text('*Should be between 2-15 characters');
        return false;
    }
}

$('#lastName').blur(function () {
    checkLastName();
});

$('#lastName').keyup(function () {
    checkLastName();
});

// FATHERS NAME
function checkfatherName(){
    var lastNameLength = $ ('#fatherName').val().length;

    if(lastNameLength > 6 && lastNameLength <= 15){
        $('#fatherNameError').text('');
        return true;
    }
    else{
        $('#fatherNameError').text('*Should be between 2-15 characters');
        return false;
    }
}

$('#fatherName').blur(function () {
    checkfatherName();
});

$('#fatherName').keyup(function () {
    checkfatherName();
});

// EMAIL
function checkEmailAddress(){
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/i);
    if(pattern.test($('#emailAddress').val())){
        $('#emailAddressError').text('');
        return true;
    }
    else{
        $('#emailAddressError').text('Email address is invalid');
        return false;
    }
}


$('#emailAddress').blur(function () {
    checkEmailAddress();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});



// PASSWORD
function checkPassword(){
    var passwordlength = $('#password').val().length;
    if(passwordlength > 8 ){
        $('#passwordError').text('');
        return true;
    }
    else{
        $('#passwordError').text('Password length at least 8 character');
        return false;
    }
}

$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    checkPassword();
});

$('#checkBox').click(function () {
    if(this.checked){
        $('#password').attr('type', 'text')
    }
    else{

    }
});


function checkConfirmPassword(){
    var passwordValue = $('#password').val();
    var confirmPasswordValue = $('#confirmPassword').val();
    if(confirmPasswordValue==passwordValue ){
        $('#confirmPasswordError').text('Password matched');
        return true;
    }
    else{
        $('#confirmPasswordError').text('Password unmatched');
        return false;
    }
}

$('#confirmPassword').blur(function () {
    checkConfirmPassword();
    return true;
});

$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
    return false;
});

// GENDER
function checkGender(){
    var genderValue = $ ('ínput[type="radio"]').checked();
    if(genderValue){
        $('#genderError').text('');
        return true;
    }
    else{
        $('#genderError').text('Please select a gender');
        return false;
    }
}

$('ínput[type="radio"]').blur(function () {
    checkGender();
})



// District
function checkDistrictName() {
    var districtName = $ ('#districtName').val();

    if (districtName == ''){
        $('#districtNameError').text('Please select a valid district name.');
        return false;
    }
    else{
        $('#districtNameError').text(' ');
        return true;
    }
};
$('#districtName').change(function () {
    checkDistrictName();
})




$('#reg').submit(function () {
    if (checkFirstName() == true && checkLastName() == true && checkPassword() == true && checkConfirmPassword() == true && checkDistrictName() == true && checkEmailAddress() == true && checkGender() == true)
    {
        return true;
    }
    else{
        return false;
    }
});


