import { render, screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"

import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
it("should render Header with an login-button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header/>
            </Provider>
        </BrowserRouter>
        );

    const LoginButton = screen.getByRole("button", {name:"Login"})
    expect(LoginButton).toBeInTheDocument();
})