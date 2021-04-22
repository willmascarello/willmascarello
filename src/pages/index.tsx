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

  let title = 'Will Mascarello | Creative Developer';
  let description = 'Olá, sou o William Mascarello. Um desenvolvedor criativo, criando conteúdos e experiências digitais! Conheça um pouco sobre mim :)';
  let img = "workspace.jpg";

  return (
    
    <NameGeralProvider 
    variable={props.variable}
    isActive={props.isActive}
    >

      <div>
        
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="robots" content="index" />
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={img} />
          <meta property="og:url" content="https://willmascarello.com" />
          <meta property="og:site_name" content={title} />

          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={img} />
          <meta name="twitter:site" content="@will_mascarello" />
          <meta name="twitter:creator" content="@will_mascarello" />

        </Head>
        
        <NameProvider>
          <Menu />
          <HomePage />
        </NameProvider>


      </div>

    </NameGeralProvider>
  )
}

