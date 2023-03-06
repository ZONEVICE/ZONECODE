(() =>{
    // let isActive:boolean = null // Will cause an error.
    // let isActive2:boolean = undefined // Will cause an error.

    // You must use the union type to allow null, undefined, or boolean or any other type.

    let isActive3:(boolean|undefined) = undefined
    let isActive4:(boolean|null) = null
    let isActive5:(boolean|null|undefined) = undefined

    // let foo:null = undefined; // Will cause an error.
})();