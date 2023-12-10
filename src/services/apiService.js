
const ApiService = {

    async api(endpoint, method = "GET", data = null, authToken = false) {
        try {

            const url = `${import.meta.env.VITE_API_BASE_URL}/${endpoint}`;
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...(authToken ? { 'Authorization': authToken } : {})
                },
            };

            if (data) {
                options.body = JSON.stringify(data);
            }

            const response = await fetch(url, options);
            const result = await response.json();

            if (result && result.success === false || result.statusCode > 200) {
                return Promise.reject(result);
            }

            return result;


        } catch (error) {
            throw error;
        }
    }
}

export default ApiService;
