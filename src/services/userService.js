const UserService = {


    async parseData(fields, apiData) {

        try {

            fields.map((item) => {
                item.value = apiData[item.name]
            })

            return fields;

        } catch (err) {

        }
    }

}
export default UserService;