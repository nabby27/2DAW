import { Cycle } from './cycle';

export interface Student {
    name: string,
    dni: string,
    date_of_birth: string,
    email: string,
    telephon: string,
    cycles: Cycle[]
}
