import http from '@/http-common'

class ArtistsDataService {
	getAll(params) {
		return http.get('/v2/artists/verified', { params });
	}
	// other CRUD methods
}

export default new ArtistsDataService();