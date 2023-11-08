new Vue({
    el: "#userMessage",
    data: {
        msg: "hellow",
        user: {
            "name": "ll",
            "username": "20213460",
            "phone": "15934715895",
            "department": "技术中心开发部",
            "grade": "大三",
            "sno": "20213460",
            "major": "计科2101",
            "sex": "男",
            "image": "ll"
        }
    },
    mounted() {
        // axios.defaults.headers.common['Authorization'] = document.cookie;
        axios.get("http://127.0.0.1:8080/user/", {
            headers: {
                'token': document.cookie,
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function(resposne) {
            console.log(resposne);
        })
    }
})