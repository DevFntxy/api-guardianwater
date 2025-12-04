import Report from "../models/Report.js";

class ReportsDAO {

    async create(data) {
        return await Report.create(data);
    }

    async findAll() {
        return await Report.find();
    }

    async findById(id) {
        return await Report.findById(id);
    }

    async update(id, data) {
        data.dateUpdate = Date.now();
        return await Report.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Report.findByIdAndDelete(id);
    }
}

export default new ReportsDAO();
