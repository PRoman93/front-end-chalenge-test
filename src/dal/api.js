import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: "http://localhost:3004/authData",
});

export const authApi = {

    login(email, password) {
        return instance.get(`/1?email=${email}&password=${password}`)
            .then(res => {
                debugger
                return{
                    res
                }
            })
    },
    register(email, password) {
        return instance.put('/1', {email, password})
            .then(res => {
                return res.data
            })
            .catch(err => err)


    }

    }

// fetch(…)
// .then(r => r.json())
//         .then(response => {
//             if (response.ага) {
//                 dispatch(“еррор”)
//             } else if (response.неАга) {
//                 dispatch(“диспатчу!”)
//             }
//         })
