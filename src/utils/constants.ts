//------------------Enums--------------------
export enum ResponseStatus {
    RS200 = 200,
    RS300 = 300,
    RS400 = 400,
    RS404 = 404,
    RS401 = 401,
    RS500 = 500,
}
export enum Dropdowns {
    User = "User",
}

//-------------------Data------------------------
export const selectDefaultValue = {
    _id: "00",
    label: 'Select'
}
export const selectAllDefaultValue = {
    _id: "00",
    label: 'All'
}

export const tooltipLength = 20

//---------Functions----------------------
export const splitDescription = (description: string, length?: number) => {
    const maxCharac = length ? length : 15
    if (description.length > maxCharac) {
        return description.slice(0, maxCharac).concat('...')
    } else {
        return description
    }
}