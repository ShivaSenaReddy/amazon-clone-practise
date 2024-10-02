import React from 'react'
let cart = []
function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            cart.find(e => e.name === action.item.name)
            cart = [...state, {
                name: action.item.name,
                price: action.item.price,
                id: action.item.id,
                image: action.item.image,
                rating: action.item.rating

            }]
            console.log(cart)

            return [...state, {
                name: action.item.name, price: action.item.price, id: action.item.id, image: action.item.image,
                rating: action.item.rating
            }];

        case 'REMOVE_FROM_BASKET':
            console.log(cart.filter(e => e.id != action.id))
            return [...state.filter(e => e.id != action.item.id)]
    }
}

export default reducer
