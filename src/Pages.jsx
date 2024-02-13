import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

function Pages(){
    return(
        <div className="pages">
            <div className="page">
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                </Routes>
            </div>

        </div>
    )
}

export default Pages;