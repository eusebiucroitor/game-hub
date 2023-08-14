import axios from "axios";

export default axios.create({
baseURL:'https://api.rawg.io/api',
params:{
    key:'f63d2a50731449969cef017c30844a3b'
}

})