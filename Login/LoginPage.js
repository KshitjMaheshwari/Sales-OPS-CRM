function check(form) {

    if (form.userid.value == "salesops@gmail.com" && form.pswrd.value == "123456") {
        window.open('../index.html')
    } else {
        alert("Error Password or Email Address")
    }
}