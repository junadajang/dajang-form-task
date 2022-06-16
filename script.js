function submitForm(event) {

    event.preventDefault();

    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var bdate = document.getElementById('bdate').value;
    var favcolor = document.getElementById('favcolor').value;
    var submit_btn = document.getElementsByName('submit_btn');

    var user_bdate = new Date(bdate);
    let format_bdate = user_bdate.getDate() + "/" + (user_bdate.getMonth() + 1) + "/" + user_bdate.getFullYear();
    // console.log(format_bdate);

    localStorage.setItem('full_name', fullname);
    localStorage.setItem('email', email);
    localStorage.setItem('bdate', format_bdate);
    localStorage.setItem('favcolor', favcolor);

    var age = bdate;
    var date_submitted = new Date();
    var format_date_sub = date_submitted.getFullYear() + "-" + (date_submitted.getMonth() + 1) + "-" + date_submitted.getDate() + " " +
        date_submitted.getHours() + ":" + date_submitted.getMinutes() + ":" + date_submitted.getSeconds();
    var date = new Date(age);

    if (age !== ' ') {
        var dt = Date.now() - date.getTime();
        var age_df = new Date(dt);
        var year = age_df.getUTCFullYear();
        var age_result = Math.abs(year - 1970);

        localStorage.setItem('age', age_result);
        localStorage.setItem('date_submitted', format_date_sub);

    } else
        return false;

    if (submit_btn) {
        document.getElementById('formInput').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        document.getElementById('res_page').style.display = 'block';

    } else {
        document.getElementById('formInput').style.display = 'block';
        document.getElementById('message').style.display = 'none';
        document.getElementById('res_page').style.display = 'none';
    }
}

document.getElementById('display_fname').innerHTML = localStorage.getItem('full_name');
document.getElementById('display_email').innerHTML = localStorage.getItem('email');
document.getElementById('display_bdate').innerHTML = localStorage.getItem('bdate');
document.getElementById('display_favcolor').innerHTML = localStorage.getItem('favcolor');
document.getElementById('display_age').innerHTML = localStorage.getItem('age') + " years";
document.getElementById('date_submitted').innerHTML = localStorage.getItem('date_submitted');
document.getElementById('color_preview').style.backgroundColor = localStorage.getItem('favcolor');
