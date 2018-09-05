import C from './constants'
import { errors } from './store/reducers'
import {allSkiDays} from './store/reducers'

const state = [
    {
        "resorts": "Kirkwood",
         "date" : "2016-12-15",
         "powder": true,
         "backcountry": false

    },
    {
        "resort": "Boreal",
        "date": "2016-12-15",
        "powder": false,
        "backcountry": false
    }
]

const action = {
    type: C.REMOVE_DAY,
    payload: "2016-12-15"
}

const nextState = allSkiDays(state, action)

console.log(`

    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);