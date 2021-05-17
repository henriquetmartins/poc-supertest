const env = require('../src/config/config')
const request = require('supertest')(env.url)
const assert = require('assert')
const personBody = require('../src/data/personData.json')

describe('GET', () => {
    it('get all', async () => {
        const res = await request.get('/person')
        assert(res.body.name == 'Mayke')
    })

    it('endpoint inexistente', async () => {
        const res = await request.get('/batata')
        assert(res.status == 404)
    })

})

describe('POST', () => {
    it('post person', async () => {
        personBody.name = 'xaxa'

        const res = await request
        .post('/person')
        .send(personBody)

        assert(res.status ==  201)
        assert(res.body.name == personBody.name)
    })
})