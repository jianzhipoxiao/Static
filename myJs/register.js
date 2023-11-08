var userRegister = new Vue({
    el: "#userRegister",
    data: {
        userName: "2021",
        passWord: "123456",

    },
    methods: {
        register: function() {
            console.log(userRegister.userName);
            axios.post("http://127.0.0.1:8080/user", {
                username: userRegister.userName,
                password: userRegister.passWord,
                sno: userRegister.sno
            }).then(function(resposne) {
                var user = resposne.data.data;
                if (user != null) {

                    setTimeout(function() {
                        alert("注册成功3秒后跳转到登录页面~")
                        window.location.href = "http://127.0.0.1:8080/pages/login.html"
                    }, 3000)
                }
                console.log(resposne.data.data);
            })
        },

    }
})

// function $(id) {
//     return document.querySelector("#" + id);
// }

// function determinePsd(psd1, psd2) {
//     var psd = $(psd1);
//     var psdAdgin = $(psd2);
//     if (psd.value != psd.value) {
//         return 2;
//     }

// }