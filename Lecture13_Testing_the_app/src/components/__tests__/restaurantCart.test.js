import {render} from "@testing-library/jest-dom"
import { RestaurantComponent } from "../Body"
import Mock_data from "../mocks/resCardmock.json"
import "@testing-library/jest-dom"

it("should render rest card with data", ()=>{
    render(<RestaurantComponent resData = {Mock_data}/>)

    const nameOfres = screen.getByText("Nandhana Palace")

    expect(nameOfres).toBeInTheDocument();
})