import React from "react";
import { screen, render, within } from "@testing-library/react";
import LoginButton from '.'

describe('log in button' ,() => {
  test('display button when not authenticated', () => {
    render(<LoginButton isAuthenticated ={false} loginWithRedirect ={()=>console.log('auth')}/>)
    screen.getByText(/Log In/);
  })

  test('display button when authenticated', () => {
    render(<LoginButton isAuthenticated ={true} loginWithRedirect ={()=>console.log('auth')}/>)
    const text = screen.queryByText('Log In')
    expect(text).toBeNull()
  })

})