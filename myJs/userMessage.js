const vm = new Vue({
    el: "#userMessage",
    data: {
        msg: "hellow",
        user: {

        }
    },
    mounted() {
        axios.get("http://127.0.0.1:8080/user", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "token": document.cookie
                }
            })
            .then(res => {
                console.log(res)
                vm.user = res.data.data
                console.log(vm.user);
            })
            .catch(err => {
                console.error(err);
            })
    },
})