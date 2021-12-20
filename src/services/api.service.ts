class ApiService {

    private BASE_URL = "/"

    async get(endpoint: string, params?: any): Promise<any> {
        const res = await fetch(this.BASE_URL + endpoint)
        return await res.json()
    }

}

export default new ApiService()