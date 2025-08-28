import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao({ escuro }){
    return(
        <main>
            <Banner escuro={escuro} />

            <Outlet />
        </main>
    )
}