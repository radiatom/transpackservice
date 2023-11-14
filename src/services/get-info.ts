import { AllSettingsQuery, AllTextsInSiteQuery } from '@/graphql/generated'

export const getTelephones = (
  settings: AllSettingsQuery,
  textInSite: AllTextsInSiteQuery,
  lang: string,
) => {
  const phoneNumbers = settings?.allSettings?.data
    ?.map(
      (el) => el?.key.includes('phone') && { key: el?.key?.replace('phone', ''), value: el?.value },
    )
    ?.filter((item) => item !== false)
  return phoneNumbers?.map((number) => {
    return {
      telephone: number && number?.value,
      name: `${number && number?.value} - ${
        textInSite?.allTextsInSite?.data &&
        textInSite.allTextsInSite.data.find((el) => el?.key === `name${number && number?.key}`)
          ?.textAll
          ? JSON.parse(
              textInSite.allTextsInSite.data.find(
                (el) => el?.key === `name${number && number?.key}`,
              )!.textAll,
            )[`${lang}`]
          : ''
      }`,
    }
  })
}

export const getEmail = (settings: AllSettingsQuery) => {
  return (
    settings?.allSettings?.data
      ?.filter((el) => el?.key?.includes('email'))
      ?.map((el) => el?.value) || []
  )
}

export const getAddress = (textInSite: AllTextsInSiteQuery, lang: string) => {
  return textInSite?.allTextsInSite?.data &&
    textInSite.allTextsInSite.data.find((el) => el?.key === 'address')?.textAll
    ? JSON.parse(textInSite.allTextsInSite.data.find((el) => el?.key === 'address')!.textAll)[
        `${lang}`
      ]
    : ''
}

export const getTimeWork = (textInSite: AllTextsInSiteQuery, lang: string) => {
  return textInSite?.allTextsInSite?.data &&
    textInSite.allTextsInSite.data.find((el) => el?.key === 'time-work')?.textAll
    ? JSON.parse(textInSite.allTextsInSite.data.find((el) => el?.key === 'time-work')!.textAll)[
        `${lang}`
      ]
    : ''
}

// export const footerCategoriesInfo = [[
//     getAddress()
// ]]
