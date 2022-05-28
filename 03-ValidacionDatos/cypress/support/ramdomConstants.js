import {faker} from '@faker-js/faker'

export const randomMail = faker.internet.email()
export const randomPassword = faker.random.alphaNumeric(10)

export const randomShortTitle = faker.animal.type()
export const randomPhrase = faker.fake('Hi, my name is {{name.firstName}} {{name.lastName}}!')
export const randomParagraph = faker.lorem.paragraph()
export const randomLargeString = faker.random.words(70)
export const randomImage = faker.image.nature()


export const videoUrl = 'https://www.youtube.com/watch?v=QtXby3twMmI'
export const Url = 'https://museodeantioquia.co/sitio/'
export const fakeUrl = 'http://www.falsaurl.com/'
export const imageUrl ='https://commons.wikimedia.org/wiki/File:Abejorral_2a.jpg'
export const twitterUrl = 'https://twitter.com/BarackObama?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
export const vimeoUrl = 'https://vimeo.com/710119524'
export const spotifyUrl = 'https://www.spotify.com/co/'