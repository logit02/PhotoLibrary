interface Texts {
  lookupKey: string,
  translations: { title: string, lang: string }[]
}

export const CORE_TEXTS: Texts[] = [
  {
    lookupKey: 'photos',
    translations: [
      {
        title: 'Photos',
        lang: 'en'
      }
    ]
  },
  {
    lookupKey: 'favorites',
    translations: [
      {
        title: 'Favorites',
        lang: 'en'
      }
    ]
  },
  {
    lookupKey: 'remove_from_favorites',
    translations: [
      {
        title: "Remove from favorites",
        lang: "en"
      }
    ]
  }
]
