import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Share } from '@capacitor/share'

// import ionic
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react'
import { Capacitor } from '@capacitor/core'

export default function Home() {

	const share = async () => {
		// if share is cancelled, it will return null
		await Share.share({
			title: 'Share',
			text: 'Hello World',
			url: 'https://example.com',
			dialogTitle: 'Share with buddies'
		}).then((res) => {
			console.log(res)
		})
	}
	return (
		<IonApp>
			<IonHeader>
				<IonToolbar
					color="tertiary"
				>
					<IonTitle>Share</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonButton onClick={() => share()}>Share</IonButton>
			</IonContent>
		</IonApp >
	)
}
