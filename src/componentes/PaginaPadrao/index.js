import { Outlet } from "react-router-dom";

export default function PaginaPadrao({ escuro }){
    return(
        <main>
            <Outlet />
        </main>
    )
}