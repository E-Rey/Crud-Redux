import { createSlice } from '@reduxjs/toolkit';



export interface User {
    name: string;
    email: string;
    github: string;
}


export interface UserWithId extends User {
    id: string;

}

const initialState: UserWithId[] = [
    {
        id: "1",
        name: "Peter Doe",
        email: "peter@gmail.com",
        github: "peter",

    },
    {
        id: "2",
        name: "John Doe",
        email: "JonhDoe@gmail.com",
        github: "JohnDoe",
    },
    {
        id: "3",
        name: "Max Doe",
        email: "MaxDoe@gmail.com",
        github: "MaxDoe",
    },
    {
        id: "4",
        name: "Joe Doe",
        email: "joeDoe@gmail.com",
        github: "joeDoe",
    },
    {
        id: "5",
        name: "Peter Doe",
        email: "PeterDoe@gmail.com",
        github: "PeterDoe",
    },
    {
        id: "6",
        name: "Carlos Doe",
        email: "CarlosDoe@gmail.com",
        github: "CarlosDoe",
    },
    {
        id: "7",
        name: "Juan Doe",
        email: "JuanDoe@gmail.com",
        github: "JuanDoe",
    },
];

export const userSlice = createSlice({
    name: 'users',
    initialState ,
    reducers: {},
})

export default userSlice.reducer;