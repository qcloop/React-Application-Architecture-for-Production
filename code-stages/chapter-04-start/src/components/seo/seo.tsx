import Head from 'next/head';
import React from 'react';

export type SeoProps = {
  title: String;
};

export const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
