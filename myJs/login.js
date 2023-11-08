var app = new Vue({
    el: "#loginUser",
    data: {
        token: null,
        userName: "",
        passWord: ""
    },
    methods: {
        login: function() {
            axios.post("http://127.0.0.1:8080/user/login", {
                userName: app.userName,
                passWord: app.passWord
            }).then(function(resposne) {
                this.token = resposne.data.data;
                document.cookie = this.token;
                console.log(document.cookie);
                if (this.token != null) {
                    window.location.href = "http://127.0.0.1:8080/pages/index.html"
                } else {
                    alert("账号或密码错误请检查一下哦~")
                }
            })
        },

    }
})