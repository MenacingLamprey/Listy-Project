import React from "react";
import { screen, render, within } from "@testing-library/react";
import  LogoutButton from '.'

describe('log out button' ,() => {
  test('display content in options when loaded and authenticated', () => {
    render(<LogoutButton  isAuthenticated ={true} logout ={()=>console.log('auth')}/>)
    screen.getByText(/Logout/);

  })

  test('doesnt display log out options when not authenticated', () => {
    render(<LogoutButton  isAuthenticated ={false} logout ={()=>console.log('auth')}/>)
    const logoutButton = screen.queryByTestId('logout-button')
    expect(logoutButton).toBeNull
  })

})