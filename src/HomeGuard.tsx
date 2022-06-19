import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./shared/firebase";

type Props = {
    children?: JSX.Element | JSX.Element[];
};

export default function HomeGuard({ children }: Props) {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) navigate("/login");
    }, [user, loading, navigate]);

    return <>{user && children}</>;
}
