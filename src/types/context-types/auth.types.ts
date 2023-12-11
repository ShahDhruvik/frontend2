export type AuthParams = {
    isAuth: boolean
    role: string
}

export type User = {
    id: number
    countryId: number
    roleId: string
    type: string
    name: string
    email: string
    password: string
    contactNo: string
    dob: string
    resetPasswordOtp: null
    resetPasswordUuid: null
    resetPasswordOtpTime: null
    createdAt: string
    updatedAt: string
    deletedAt: null
    createdBy: null
    updatedBy: null
    deletedBy: null
    isActive: boolean
    systemAdmin: boolean
    isDeleted: boolean
    role: null
}