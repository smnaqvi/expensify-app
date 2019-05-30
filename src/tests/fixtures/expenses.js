import moment from "moment";

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt:0
},{
    id: '12',
    description: 'Gumee',
    note: '',
    amount: 1951,
    createdAt:moment(0).subtract(4,"days").valueOf()
},
{
    id: '123',
    description: 'CeCe',
    note: '',
    amount: 12951,
    createdAt:moment(0).add(4,"days").valueOf()
}]