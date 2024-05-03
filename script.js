function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var now = new Date();
    var age = now.getFullYear() - dob.getFullYear();
    if (now.getMonth() < dob.getMonth() || (now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById('result').innerHTML = 'Your age is ' + age;
}
