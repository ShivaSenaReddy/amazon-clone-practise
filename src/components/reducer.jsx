import React from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            let index = state.findIndex(ele => ele.id === action.item.id)
            console.log('index', index)
            if (index > -1) {
                state[index].quantity = state[index].quantity + 1;
                console.log(state)
                return state
            }
            console.log([...state, {
                name: action.item.name, price: action.item.price, id: action.item.id, image: action.item.image,
                rating: action.item.rating, quantity: 1
            }])
            return [...state, {
                name: action.item.name, price: action.item.price, id: action.item.id, image: action.item.image,
                rating: action.item.rating, quantity: 1
            }];

        case 'REMOVE_FROM_BASKET':
            // console.log(cart.filter(e => e.id != action.id))
            return [...state.filter(e => e.id != action.item.id)]
    }
}

export default reducer
