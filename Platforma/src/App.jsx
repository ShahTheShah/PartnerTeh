import { observer } from "mobx-react-lite";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";

const App = observer(() => {
    return <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>;
});

export default App;
