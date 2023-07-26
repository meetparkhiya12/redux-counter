


const counting = {
    count: 0
}

const counterReducer = (state = counting, action) => {

    switch (action.type) {
        case 'inc':
        return{
            count : state.count + 1
        }

        case 'dsc' :
        return {
            count : state.count - 1
        }

        default :
        return state
    }

}

export default counterReducer;