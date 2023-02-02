import axios from 'axios'

export default axios.create({
	baseURL: "https://api.artistfinder.world/api",
	headers: {
		"Content-type": "application/json"
	}
  });