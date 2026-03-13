/* eslint-disable react/display-name */
import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import CustomLink from './Link';
import TOCInline from './TOCInline';
import Pre from './Pre';
import { BlogNewsletterForm } from './NewsletterForm';

import AuthorLayout from '../layouts/AuthorLayout';
import ListLayout from '../layouts/ListLayout';
import PostLayout from '../layouts/PostLayout';
import PostSimple from '../layouts/PostSimple';

const layouts: { [key: string]: React.ComponentType<any> } = {
  AuthorLayout,
  ListLayout,
  PostLayout,
  PostSimple,
};

const Wrapper: React.ComponentType<{ layout: string }> = ({
  layout,
  ...rest
}) => {
  const Layout = layouts[layout];
  return <Layout {...rest} />;
};

export const MDXComponents = {
  Image,
  //@ts-ignore
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
};

interface Props {
  layout: string;
  mdxSource: string;
  [key: string]: unknown;
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
