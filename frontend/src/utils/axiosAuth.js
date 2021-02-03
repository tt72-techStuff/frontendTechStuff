import axios from 'axios';

const axiosAuth = () => {
	const token = window.localStorage.getItem("token") ?? JSON.stringify("not-logged-in");

	return axios.create({
		headers: {
			"Authorization": "Bearer " + JSON.parse(token),
			"Content-Type": "application/json"
		},
		baseURL: "https://tech-stuff-tt72.herokuapp.com/api"
	})
}

export default axiosAuth;


export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://tech-stuff-tt72.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    });
}