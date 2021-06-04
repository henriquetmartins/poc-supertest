const personBody = require('../src/data/personData')
const { personSchema, personSchemaById }  = require('../src/schemas/personSchema')
const PersonService = require('../src/service/personService')

const chai  = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#Person', () => {
    const personService = new PersonService()
    let response 

    describe('#GET', () => {
        describe('Listagem Completa', () => {
    
            beforeAll( async () => {
                response = await personService.getAll() 
            })
    
            it('#status code', async () => {
                assert.equal(response.status, 200)
            })
    
            it('#contract', async () => {
                assert.jsonSchema(response.body, personSchema )
            })
    
            it('#headers', async () => {
                assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
            })
    
            it('#response body', async () => {
                assert.equal(response.body.idTroll, 1231)
                assert.equal(response.body.name, 'Mayke')
            })
        })


        describe('Listagem por Id', () => {    
            beforeAll( async () => {
                const id = 1
                response = await personService.getById(id) 
            })
    
            it('#status code', async () => {
                assert.equal(response.status, 200)
            })
    
            it('#contrato', async () => {
                assert.jsonSchema(response.body, personSchemaById )
            })
    
            it('#headers', async () => {
                assert.equal(response.header['content-type'], 'application/json; charset=utf-8')
            })
    
            it('#response body', async () => {
                assert.equal(response.body.name, 'NomeTroll')
            })
        })
    })

    describe('#POST', () => {
        describe('Criação de Usuario', () => {
            beforeAll( async () => {
                response = await personService.post(personBody)
            })

            it('#Status Code', async () => {
                assert.equal(response.status, 201)
            })

            it('#Response Body', async () => {
                assert.typeOf(response.body.idTroll, 'number')
                assert.equal(response.body.name, personBody.name)
            })
        })
    })
})
