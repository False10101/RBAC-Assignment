export type Role = "ADMIN" | "USER";

export interface User {
    id : string,
    name : string,
    role : string,
    email : string
}

export interface ApiResponse {
    data?: any,
    error?: string
}