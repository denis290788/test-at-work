export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
    };
    phone: string;
    company: {
        name: string;
    };
}

export interface UserCard extends User {
    status: "active" | "archived" | "hidden";
    avatar: string;
}

export interface UserFormData {
    name: string;
    username: string;
    email: string;
    city: string;
    phone: string;
    companyName: string;
}
