import "bootstrap/dist/css/bootstrap.min.css";
import loginpage from "./login page";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import MainLayout from "./mainLayout";

function () {
    return (
        <div>
            <Router>
                <Routes>
                    <Route index path="/" element={<loginpage />} />
                    <Route path="*" element={<MainLayout/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;