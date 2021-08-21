import{ stock } from "../Data/stock"

export const pedirdatos = () => {
    return new Promise ((resolve, rejected) => {
        
        setTimeout(()=> {
            resolve(stock)
            //se puede meter un Spinner
        }, 2000)
})
}