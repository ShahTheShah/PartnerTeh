'use strict';

import models from '../Models/models.js';
import APIError from '../Handlers/APIError.js';

class FacilityControll {
    create = async (req, res, next) => {
        try {
            const {
                name, address, parameters, contractNumber,
                price, customerId, directionId, stages
            } = req.body;
            // console.log(name)
            const facility = await models.Facility.create({
                name, address, parameters, contractNumber,
                price, customerId, directionId, stages
            });

            return res.status(200).json(facility);
        } catch(error) {
            next(APIError.badRequest(error.message));
        }
    };
    checkAll = async (req, res) => {
        const {
            customerName, directionTitle, contractNumber, price
        } = req.body;
        const facilityes = await models.Facility.findAll();
        return res.status(200).json(facilityes);
    };
    check = async (req, res) => {

    };
    delete = async (req, res) => {

    };
};

export default new FacilityControll();
