import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react'
import React from 'react'
import './styles.css'
import { Plugins } from '@capacitor/core'

import { isPlatform } from '@ionic/react'

const ANDROID = isPlatform('android')
const IOS = isPlatform('ios')

const Home: React.FC = () => {
	async function signIn() {
		console.log('Google res', Plugins.GoogleAuth.signIn())
	}

	async function signInWithApple() {
		const { SignInWithApple } = Plugins

		SignInWithApple.Authorize()
			.then((response: any) => {
				console.log(response)
			})
			.catch((response: any) => {
				console.error(response)
			})
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Hello World!</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Hello World</IonTitle>
					</IonToolbar>
				</IonHeader>
				{IOS && <IonButton onClick={signInWithApple}>Login With Apple</IonButton>}
				{ANDROID && <IonButton onClick={signIn}>Login With Google</IonButton>}
			</IonContent>
		</IonPage>
	)
}

export default Home
