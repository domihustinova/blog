export const BREAKPOINTS = {
  MOBILE_SMALL: '375',
  TABLET: '768',
  LAPTOP: '1024',
  LAPTOP_LARGE: '1440',
}

export const DEVICES_MIN = {
  MOBILE_SMALL: `(min-width: ${BREAKPOINTS.MOBILE_SMALL}px)`,
  TABLET: `(min-width: ${BREAKPOINTS.TABLET}px)`,
  LAPTOP: `(min-width: ${BREAKPOINTS.LAPTOP}px)`,
  LAPTOP_LARGE: `(min-width: ${BREAKPOINTS.LAPTOP_LARGE}px)`,
}

export const DEVICES_MAX = {
  MOBILE_SMALL: `(max-width: ${BREAKPOINTS.MOBILE_SMALL}px)`,
  TABLET: `(max-width: ${BREAKPOINTS.TABLET}px)`,
  LAPTOP: `(max-width: ${BREAKPOINTS.LAPTOP}px)`,
  LAPTOP_LARGE: `(max-width: ${BREAKPOINTS.LAPTOP_LARGE}px)`,
}
