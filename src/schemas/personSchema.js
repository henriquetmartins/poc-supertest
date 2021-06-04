const personSchema = {
    type: "object",
    required: ['idTroll', 'name'],
    properties: {
        idTroll: {
            type: 'number'
        },
        name: {
            type: 'string'
        }
    }
}

const personSchemaById = {
    type: 'object',
    required: ['name'],
    properties: {
        name: {
            type: 'string'
        }
    }
}

module.exports = { personSchema, personSchemaById }