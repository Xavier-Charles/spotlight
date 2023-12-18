import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { profileDetails, socialHandles, socialLinks } from '@/config'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    `I’m ${profileDetails.name}. I live in New York City, where I design the future.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m {profileDetails.name}. I live in Lagos, Nigeria, where I dev &
            design.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve love making things, beautiful and useful things. For as long
              as I can remember, it's always been exciting to figure out how
              things work. I've always been fascinated electronics and
              computers. But it would take until January, 2018 to save enough to
              buy my very first laptop. I cried when I got it. I was so happy.
            </p>
            <p>
              From then on,I spent the next few years learning everything I
              could about Data Analysis, Machine Learning, Mobile Development,
              Content Writing, Web Development, Product Management, and Graphic
              Design and more. Yeah I tried everything. I had to make up for the
              lost years. fter this period of extensive exploration, I knew I
              wanted to be a developer.
            </p>
            <p>
              Today, I’m a developer at Alphaday, where we’re developing the
              ultimate crypto dashboard for staying up to date with all things
              crypto and interacting with your favorite DApps.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={socialLinks.twitter} icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href={socialLinks.github}
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={socialLinks.linkedIn}
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href={socialLinks.mail}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {socialHandles.mail}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
