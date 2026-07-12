function Login() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let mail = "gtech@gmail.com";
        let pass = "12345678";
        if (email === "" || password === "") {
          alert("please Enter Creditails");
        } else if (email !== mail && password !== pass) {
          alert("email &password inncorect");
        } else if (password.length < 8) {
          alert("password must be 8 character");
        } else if (password.length > 10) {
          alert("password less than 10 character");
        } else if (password !== pass) {
          alert("password is inncorrect");
        } else if (email !== mail) {
          alert("email is inncorrect");
        } else if (!/^[^\s@]+@[^\s@]+\./.test(email)) {
          alert("plese enter a valid email");
        } else if (email === mail && password === pass) {
          alert("logged in");
        } else {
          alert("user not found");
        }
      }