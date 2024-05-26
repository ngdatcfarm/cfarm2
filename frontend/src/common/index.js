import { current } from "@reduxjs/toolkit"
import SignUp from "../pages/Sign_up"

const backendDomin = "http://localhost:5000"

const SummaryApi = {
    current_user : {
        url: '$(backendDomin)/register/v1/auth/user-details',
        method : "get"
    }
}

export default SummaryApi