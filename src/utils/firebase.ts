import {
  FirebaseApp,
  FirebaseOptions,
  getApp,
  initializeApp,
} from 'firebase/app'
import {
  IdTokenResult,
  UserProfile,
  getAuth,
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  signOut,
  AuthCredential,
  UserCredential,
  FacebookAuthProvider,
} from 'firebase/auth'
import env from 'core/env'

class Firebase {
  public auth: Auth = getAuth()
  public app: FirebaseApp = getApp()

  constructor(config: FirebaseOptions) {
    if (!this.app) {
      this.app = initializeApp(config)
    }
    this.auth = getAuth()
  }

  public register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        return userCredential.user
      })
      .catch(({ code, message }) => {
        return { code, message }
      })
  }

  public async signIn(email: string, password: string) {
    const user: UserCredential = await signInWithEmailAndPassword(
      this.auth,
      email,
      password,
    )
    return this.auth.currentUser
      ?.getIdTokenResult(true)
      .then((data: IdTokenResult) => {
        const { claims } = data
        if (!claims.isActive) throw { code: 'auth/not_verify' }
        return user
      })
  }

  public logout() {
    return signOut(this.auth)
  }

  /**
   *
   * @param {displayName?: String, photoURL?: String} input
   */
  public updateProfile(input: UserProfile) {
    const user: any = this.auth?.currentUser
    return updateProfile(user, input)
  }

  public getAccessToken() {
    const user = this.auth.currentUser
    return user?.getIdToken(true)
  }

  public fetchSignInMethodsForEmail(email: string) {
    return fetchSignInMethodsForEmail(this.auth, email)
  }

  public getCurrentUser() {
    return this.auth.currentUser
  }

  public verifyCredential(email: string, password: string) {
    const user = this.auth.currentUser
    if (user) {
      const credential: AuthCredential = EmailAuthProvider.credential(
        email,
        password,
      )
      return reauthenticateWithCredential(user, credential)
    }
    throw new Error('User not signed in')
  }

  public forgotPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email)
  }

  public signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    provider.addScope('openid')
    provider.addScope('profile')
    provider.addScope('email')
    return signInWithPopup(this.auth, provider)
  }
  public signInWithFacebook() {
    const provider = new FacebookAuthProvider()
    provider.addScope('openid')
    provider.addScope('profile')
    provider.addScope('email')
    return signInWithPopup(this.auth, provider)
  }
}

const config: FirebaseOptions = {
  apiKey: env('VITE_FIREBASE_API_KEY', ''),
  authDomain: env('VITE_FIREBASE_AUTH_DOMAIN', ''),
}
export default new Firebase(config)
