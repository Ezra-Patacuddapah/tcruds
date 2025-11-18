export type Text = {
    id: string;
    text: string;
    created_at: Date | string;
    updated_at: Date | string | null;
}

export type Admin = {
    id: string;
    name: string;
    password: string;
}