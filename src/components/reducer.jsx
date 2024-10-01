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
                image: action.item.image
            }]
            console.log(cart)

            return [...state, {
                name: action.item.name, price: action.item.price, id: action.item.id, image: action.item.image
            }];
    }
}

export default reducer
