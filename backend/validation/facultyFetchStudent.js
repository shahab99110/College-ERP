
const Validator = require('validator');
const isEmpty = require('./is-empty');


const validateFetchStudentsInput = (data) => {
    console.log(data.department, data.semister, data.section)
    let errors = {}
    data.department = !isEmpty(data.department) ? data.department : '';
    data.semister = !isEmpty(data.semister) ? data.semister : '';
    data.section = !isEmpty(data.section) ? data.section : '';


    if (Validator.isEmpty(data.department)) {
        errors.department = 'Department field is required';
    }

    if (Validator.isEmpty(data.semister)) {
        errors.semister = 'Year semister is required';
    }

    if (Validator.isEmpty(data.section)) {
        errors.section = 'Section field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

}


module.exports = validateFetchStudentsInput