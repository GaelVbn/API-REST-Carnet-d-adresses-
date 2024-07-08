const Contact = require('../models/Contact');
const mongoose = require('mongoose');


const create = async (req, res) => {
    console.log("req.body = ", req.body)
    const contact = await Contact.create(req.body);
    res.send(contact);
};

const getAll = async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
};

const getById = async (req, res) => {

    console.log("req.params = ", req.params)
    const contact = await Contact.findById(req.params.id);
    
    if(contact) {
        res.send(contact);
    } else {
        res.status(404).send("contact introuvable");
    }
};

const updateById = async (req, res) => {

    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if(contact){
        res.send(contact);
    } else {
        res.status(404).send("contact introuvable");
    }
};

const deleteById = async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    console.log("contact supp = ", contact)
    if(contact) {
        res.send(contact);
    } else {
        res.status(404).send("contact introuvable");
    }
};

module.exports = { create, getAll, getById, updateById, deleteById }