import React from "react";
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Menu } from "../components/Menu";
import { NameGeralProvider } from "../context/NameGeralContext";

import styles from "../styles/pages/Home.module.css"
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

      <div className={styles.container}>
        
        <Head>
          <title>Will Mascarello | Creative Developer</title>
        </Head>
        
        <NameProvider>
          <Menu />
          <Home />
        </NameProvider>


      </div>

    </NameGeralProvider>
  )
}

