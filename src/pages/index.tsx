import React from "react";
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Menu } from "../components/Menu";
import { HomePage } from "../components/Home";
import { NameGeralProvider } from "../context/NameGeralContext";

import { NameProvider } from "../context/NameContext";
// This is the main and start page of the App

interface HomeProps {
  variable: number;
  isActive: boolean;
  consoleAlert: () => {};
}

export default function Home(props) {
  return (
    
    <NameGeralProvider 
    variable={props.variable}
    isActive={props.isActive}
    >

      <div>
        
        <Head>
          <title>Will Mascarello | Creative Developer</title>
        </Head>
        
        <NameProvider>
          <Menu />
          <HomePage />
        </NameProvider>


      </div>

    </NameGeralProvider>
  )
}

