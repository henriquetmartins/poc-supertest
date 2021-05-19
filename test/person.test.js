const env = require('../src/config/config')
const request = require('supertest')(env.url)
const assert = require('assert')
const personBody = require('../src/data/personData.json')

describe('GET', () => {
    it('get all /// promise async await', async () => {
        const res = await request.get('/person')
        assert(res.status == 200)
        assert(res.header['content-type'] == 'application/json; charset=utf-8')
        assert(res.body.name == 'Mayke')
        assert(res.body.idTroll == 1231)
    })

    it('endpoint inexistente', async () => {
        const res = await request.get('/batata')
        assert(res.status == 404)
    })

    it('get all /// promise com then', (done) => {
        request.get('/person')
        .expect(200)
        .expect('content-type', 'application/json; charset=utf-8')
        .then(res => {
            assert(res.body.idTroll == 1231)
            assert(res.body.name == 'Mayke')
            done()
        })
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