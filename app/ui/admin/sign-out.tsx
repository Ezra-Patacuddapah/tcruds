import { signOut } from "@/auth";
import { Button } from "../button";

export default function SignOut() {
    return (
            <form action={async () => {
                'use server'
                await signOut({ redirectTo: '/'})
            }}
            >
                <Button className="">Sign Out</Button>
            </form>

    )
}
