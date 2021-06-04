const env = require('../settings/config')
const request = require('supertest')(env.url)

class PersonService {

    async getAll() {
        const res = await request.get('/person')
        return res
    }

    async getById(id) {
        const res = await request.get(`/person/${id}`)
        return res
    }

    async post(body) {
        const res = await request.post('/person')
        .send(body)

        return res
    }

}

module.exports = PersonService