import { User } from "@supabase/auth-helpers-nextjs"

import { Subscription, UserDetails } from "@/types"
import { createContext } from "react"

type UserContextType = {
    accesToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subsscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>;