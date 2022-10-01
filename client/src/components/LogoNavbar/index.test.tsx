import React from "react";
import { screen, render, within } from "@testing-library/react";
import { LogoNavbar } from '.'

describe('Logo nav bar' ,() => {

  test('display content in options when loaded and authenticated', () => {
    render(<LogoNavbar  isAuthenticated ={true} logout ={()=>console.log('auth')}/>)
    const content = screen.getByTestId('content')
    expect(content.children.length).toBe(2)
  })

  test('doesnt display log in options when not authenticated', () => {
    render(<LogoNavbar  isAuthenticated ={false} logout ={()=>console.log('auth')}/>)
    const content = screen.queryByTestId('content')
    expect(content).toBeNull
  })

})