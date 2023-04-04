import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Yuta.Horiuchi'
export const siteTitel = 'Next.js Chutorial Site'

export default function Layout({
  children: React.ReactNode
  home?: boolean
})