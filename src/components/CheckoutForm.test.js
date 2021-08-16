import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test ('renders the CheckoutForm component without errors', () => {
    render(<CheckoutForm />)
  })
  
  
  test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toBeVisible();
  })
  
  test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const checkoutButton = screen.getByRole('button', { name: /checkout/i });
    
  
    userEvent.type(firstNameInput, 'Brandon');
    userEvent.type(lastNameInput, 'Brooks');
    userEvent.type(addressInput, '123 Easy St');
    userEvent.type(cityInput, 'Somewhere');
    userEvent.type(stateInput, 'TN');
    userEvent.type(zipInput, '97123')
    userEvent.click(checkoutButton);
  
    const successMessage = await screen.queryByText(/you have ordered some plants/i);
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toBeTruthy();
    expect(successMessage).toBeVisible();
  
  
})