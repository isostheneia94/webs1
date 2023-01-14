const db = require('../db')

class OfficesController {

    async getOffices(req, res){
        const offices = await db.query(`SELECT * FROM offices`)
        res.json(offices.rows)

    }

    async deleteOffices(req, res){
        const id = req.params.id
        const office = await db.query(`DELETE FROM offices WHERE id=$1`, [id])
        res.json(office.rows[0])
    }

    async updateOffices(req, res){
        const {id, title, content, user_id} = req.body
        const office = await db.query(`UPDATE offices SET title=$1, content=$2, user_id=$3 WHERE id = $4 RETURNING *`, [title, content, user_id, id])
        res.json(office.rows[0])

    }

    async createOffices(req, res){
        const {id, title, content, user_id} = req.body
        const newOffice = await db.query(`INSERT INTO offices VALUES ($1, $2, $3, $4) RETURNING *`, [id, title, content, user_id])
        res.json(newOffice.rows[0])

    }
}

module.exports = new OfficesController()

