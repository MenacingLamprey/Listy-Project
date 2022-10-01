import React from "react";
import { screen, render, within } from "@testing-library/react";
import { LoginPage } from '.'

describe('log in page' ,() => {
  test('display loading when loading', () => {
    render(<LoginPage isLoading ={true} isAuthenticated ={true} loginWithRedirect ={()=>console.log('auth')}/>)
    screen.getByText(/Loading/);
  })

  test('display log in options when loaded not authenticated', () => {
    render(<LoginPage isLoading ={false} isAuthenticated ={false} loginWithRedirect ={()=>console.log('auth')}/>)
    const loginContainer = screen.getByTestId('logged-in')
    expect(loginContainer.children.length).toBe(3)
  })

  test('doesnt display log in options when loaded and authenticated', () => {
    render(<LoginPage isLoading ={false} isAuthenticated ={true} loginWithRedirect ={()=>console.log('auth')}/>)
    const loginContainer = screen.queryByTestId('logged-in')
    expect(loginContainer).toBeNull
  })

})