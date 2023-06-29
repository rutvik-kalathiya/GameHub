import axios from 'axios';
// 2e38ef2948f94eefbc1d2b01ff92f7aa

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '2e38ef2948f94eefbc1d2b01ff92f7aa'
    }
})