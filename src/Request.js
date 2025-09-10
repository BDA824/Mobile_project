import axios from 'axios';

const Back_api = axios.create({
    baseURL: "http://localhost:8000"
});

export const registerUser = (data) =>{
    return Back_api.post('/register/', data)
}

export const loginUser = (data) =>{
    return Back_api.post('/login/', data)
}

export const searchUser = (id) =>{
    return Back_api.get(`/bank-service/api/users/${id}/`)
}

export const makeTransaction = (data) =>{
    return Back_api.post('/make-transaction/', data)
}

export const transactionForUser = (id) =>{
    return Back_api.get(`/transactions-for-user/${id}/`)
}

export const applyLoan = (data) =>{
    return Back_api.post('/apply-loan/', data)
}

export const searchHistory = (identification) =>{
    return Back_api.post('/financial-history/', identification)
}

export const loanForUser = (id) =>{
    return Back_api.get(`/loans-for-user/${id}/`)
}

export const searchInfoLoan = (id) =>{
    return Back_api.get(`/bank-service/api/info-loan/${id}/`)
}