import { render, screen } from "@testing-library/react"
import ContactUsComponent from "../Contact"
import "@testing-library/jest-dom"

describe("Contact-us Page test cases", ()=>{
    //All the test cases here
})

it("should load contact-us component", ()=>{
    // ideally the contact-us hould be rendered to jsdom
    render(<ContactUsComponent/>);

    //But what to check? Lets say we want to check for heading

    //screen is also an object that comes from the testing-library
    // will find all the heading inside the contact-component and return
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

})

test("should load-button inside contact-us component", ()=>{
   
    render(<ContactUsComponent/>);

    
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

})

test("should text inside contact-us component", ()=>{
   
    render(<ContactUsComponent/>);

    
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();

})

test("should load two input boxes", ()=>{
   
    render(<ContactUsComponent/>)

    const InputBoxes = screen.getAllByRole("textbox")
    // console.log(InputBoxes[0]) //=>this is basically react-element
    expect(InputBoxes.length).toBe(2);

})