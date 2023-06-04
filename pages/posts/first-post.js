import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout'

export default function FirstPost(){
	// Linkはaより高速
	// Head内でタイトルを設定する
	// Script内でサードパーティのjavascriptを入れる。headだと重くなるよ
	// strategy: サードパーティのjavascriptをいつロードするか設定している
	// onLoad: スクリプトの読み込みが終わった後に行われること。今回は読み込みが終わったよと表示
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnLoad"
				onLoad={() => 
					console.log(`script loaded correctly, window.FB has been populated`)
				}
			/> 
			<div>
				<h1>ヤッホー</h1>
				<Link href="/">back to home</Link>
			</div>
		</Layout>
		
	)
}