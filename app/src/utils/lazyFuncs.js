import { ActivationPage, HomePage, LoginPage } from '../routes/lazyComponents'

export const fetchHomePage = () => {
  HomePage.preload()
}
export const fetchActivation = () => {
  ActivationPage.preload()
}
export const fetchLoginPage = () => {
  LoginPage.preload()
}
