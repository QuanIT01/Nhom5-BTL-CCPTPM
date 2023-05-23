import axios from "./axios";
const getBookApi = async () => {
    // axios.get('/v1/api/books')
    //     .then(res => {
    //         console.log("data: ", res);
    //     })
    return await axios.get('/v1/api/books');
    // fetch('http://localhost:8888/v1/api/books')
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         return data
    //     })
    // }
    // const getUserApi = () => {
    //     return axios.get(`/api/get-all-user?id=All`);
}
export {
    getBookApi//, getUserApi
}
// class Book extends React.Component {
//     state = {
//         listBooks: []
//     }
//     async componentDidMount() {
//         let data = await axios.get('/v1/api/books');
//         this.setState({
//             listBooks: data
//         })
//         console.log("data: ", data);
//     }
//     render() {
//         return (
//             <div></div>
//         )
//     }
// }
// export default Book;