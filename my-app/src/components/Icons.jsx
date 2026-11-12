export function ArrowRight({ size = 21, strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size - 1} viewBox="0 0 21 20" fill="none" aria-hidden="true">
      <path d="M3.625 10H17.375" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.75 4.375L17.375 10L11.75 15.625" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowLeft({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.25 12H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronDown({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13 6L8 11L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRight({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4.5 2.25L8.25 6L4.5 9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SearchIcon({ size = 21 }) {
  return (
    <svg width={size} height={size - 1} viewBox="0 0 21 20" fill="none" aria-hidden="true">
      <path d="M9.5625 15.625C13.1869 15.625 16.125 12.6869 16.125 9.0625C16.125 5.43813 13.1869 2.5 9.5625 2.5C5.93813 2.5 3 5.43813 3 9.0625C3 12.6869 5.93813 15.625 9.5625 15.625Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.2031 13.7031L18 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CartIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M10 29C11.1046 29 12 28.1046 12 27C12 25.8954 11.1046 25 10 25C8.89543 25 8 25.8954 8 27C8 28.1046 8.89543 29 10 29Z" fill="currentColor" />
      <path d="M23 29C24.1046 29 25 28.1046 25 27C25 25.8954 24.1046 25 23 25C21.8954 25 21 25.8954 21 27C21 28.1046 21.8954 29 23 29Z" fill="currentColor" />
      <path d="M5.2875 9H27.7125L24.4125 20.55C24.2948 20.9692 24.0426 21.3381 23.6948 21.6001C23.3471 21.862 22.9229 22.0025 22.4875 22H10.5125C10.0771 22.0025 9.65293 21.862 9.30515 21.6001C8.95738 21.3381 8.70524 20.9692 8.5875 20.55L4.0625 4.725C4.0027 4.51594 3.8764 4.33207 3.70271 4.20125C3.52903 4.07042 3.31744 3.99977 3.1 4H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HeartIcon({ size = 32, filled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99737 4.02062 8.54114 4.97328 7.37908C5.92593 6.21703 7.25178 5.42093 8.72525 5.12624C10.1987 4.83154 11.7288 5.05646 13.0551 5.76272C14.3814 6.46898 15.4221 7.61296 16 9.00001C16.5779 7.61296 17.6186 6.46898 18.9449 5.76272C20.2712 5.05646 21.8013 4.83154 23.2748 5.12624C24.7482 5.42093 26.0741 6.21703 27.0267 7.37908C27.9794 8.54114 28.5 9.99737 28.5 11.5C28.5 20 16 27 16 27Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={filled ? 'currentColor' : 'none'} />
    </svg>
  )
}

export function UserIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M3.875 27.0001C5.10367 24.8716 6.87104 23.104 8.99944 21.875C11.1278 20.646 13.5423 19.999 16 19.999C18.4577 19.999 20.8722 20.646 23.0006 21.875C25.129 23.104 26.8963 24.8716 28.125 27.0001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function EyeIcon({ size = 24, stroke = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon({ filled = true, size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.75L14.85 8.53L21.23 9.46L16.62 13.96L17.71 20.31L12 17.31L6.29 20.31L7.38 13.96L2.77 9.46L9.15 8.53L12 2.75Z" fill={filled ? '#FA8232' : 'none'} stroke={filled ? '#FA8232' : '#ADB7BC'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CloseIcon({ size = 16, stroke = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M12.5 3.5L3.5 12.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 12.5L3.5 3.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CalendarIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 2.25V5.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 2.25V5.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.75 8.25H20.25" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function UserCircleIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15C14.0711 15 15.75 13.3211 15.75 11.25C15.75 9.17893 14.0711 7.5 12 7.5C9.92893 7.5 8.25 9.17893 8.25 11.25C8.25 13.3211 9.92893 15 12 15Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.98126 18.6938C6.54555 17.5823 7.4066 16.6488 8.46896 15.9967C9.53132 15.3446 10.7535 14.9995 12 14.9995C13.2465 14.9995 14.4687 15.3446 15.5311 15.9967C16.5934 16.6488 17.4545 17.5823 18.0188 18.6938" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CommentIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.25626 16.5938C3.13959 14.7098 2.74899 12.483 3.1578 10.3314C3.5666 8.17983 4.74669 6.25146 6.47652 4.90832C8.20636 3.56517 10.367 2.89961 12.5527 3.0366C14.7385 3.17358 16.7991 4.10368 18.3477 5.65229C19.8963 7.20089 20.8264 9.26151 20.9634 11.4473C21.1004 13.6331 20.4349 15.7937 19.0917 17.5235C17.7486 19.2533 15.8202 20.4334 13.6686 20.8422C11.5171 21.251 9.29025 20.8604 7.40626 19.7438L4.29376 20.625C4.16624 20.6623 4.03103 20.6646 3.90231 20.6317C3.77359 20.5988 3.6561 20.5318 3.56215 20.4379C3.4682 20.3439 3.40126 20.2264 3.36833 20.0977C3.33541 19.969 3.33771 19.8338 3.37501 19.7063L4.25626 16.5938Z" stroke="#FA8232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.25 21.75H18.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CompareIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.48125 9.34668H2.98125V4.84668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.8312 6.16885C17.0659 5.40236 16.1569 4.79429 15.1563 4.37941C14.1557 3.96453 13.0832 3.75098 12 3.75098C10.9168 3.75098 9.84425 3.96453 8.84367 4.37941C7.84309 4.79429 6.93412 5.40236 6.16875 6.16885L2.98125 9.34698" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5188 14.6533H21.0188V19.1533" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.16875 17.8314C6.93412 18.5979 7.84309 19.206 8.84367 19.6209C9.84425 20.0358 10.9168 20.2493 12 20.2493C13.0832 20.2493 14.1557 20.0358 15.1563 19.6209C16.1569 19.206 17.0659 18.5979 17.8312 17.8314L21.0187 14.6533" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SupportIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21.1406 12.7503H18.1406C17.7428 12.7503 17.3613 12.9083 17.08 13.1897C16.7987 13.471 16.6406 13.8525 16.6406 14.2503V18.0003C16.6406 18.3981 16.7987 18.7797 17.08 19.061C17.3613 19.3423 17.7428 19.5003 18.1406 19.5003H19.6406C20.0384 19.5003 20.42 19.3423 20.7013 19.061C20.9826 18.7797 21.1406 18.3981 21.1406 18.0003V12.7503Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.1406 12.7503C21.1407 11.5621 20.9054 10.3856 20.4484 9.28875C19.9915 8.1919 19.3218 7.1964 18.4781 6.35969C17.6344 5.52297 16.6334 4.86161 15.5328 4.41375C14.4322 3.96589 13.2538 3.74041 12.0656 3.75031C10.8782 3.74165 9.70083 3.96805 8.60132 4.41647C7.5018 4.86488 6.50189 5.52645 5.6592 6.36304C4.81651 7.19963 4.1477 8.19471 3.69131 9.29094C3.23492 10.3872 2.99997 11.5629 3 12.7503V18.0003C3 18.3981 3.15804 18.7797 3.43934 19.061C3.72064 19.3423 4.10218 19.5003 4.5 19.5003H6C6.39782 19.5003 6.77936 19.3423 7.06066 19.061C7.34196 18.7797 7.5 18.3981 7.5 18.0003V14.2503C7.5 13.8525 7.34196 13.471 7.06066 13.1897C6.77936 12.9083 6.39782 12.7503 6 12.7503H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HelpIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.25 11.25H12V16.5H12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function PhoneIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M17.4343 4.375C18.9185 4.77332 20.2718 5.55499 21.3584 6.64159C22.445 7.72818 23.2266 9.08147 23.625 10.5656" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5266 7.75488C17.4192 7.99195 18.2333 8.46077 18.8864 9.11384C19.5395 9.7669 20.0083 10.581 20.2454 11.4736" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.1172 13.6504C11.0176 15.5098 12.5211 17.0095 14.3828 17.9051C14.5201 17.9701 14.672 17.9983 14.8235 17.9868C14.975 17.9752 15.1209 17.9245 15.2469 17.8395L17.9812 16.0129C18.1021 15.931 18.2417 15.881 18.387 15.8676C18.5324 15.8542 18.6788 15.8778 18.8125 15.9363L23.9312 18.1348C24.1062 18.2076 24.2524 18.3359 24.3472 18.4999C24.4421 18.664 24.4804 18.8546 24.4562 19.0426C24.294 20.3089 23.6759 21.4726 22.7177 22.3162C21.7594 23.1597 20.5266 23.6251 19.25 23.6254C15.3049 23.6254 11.5214 22.0582 8.73179 19.2686C5.94218 16.479 4.375 12.6955 4.375 8.7504C4.37529 7.47377 4.84073 6.24099 5.68425 5.28273C6.52776 4.32447 7.69153 3.70639 8.95781 3.54415C9.14576 3.52001 9.33643 3.55832 9.50047 3.65319C9.66451 3.74805 9.79281 3.89421 9.86562 4.06915L12.0641 9.19884C12.1212 9.33047 12.1451 9.47414 12.1337 9.61719C12.1223 9.76024 12.0758 9.89829 11.9984 10.0192L10.1719 12.7973C10.0906 12.9229 10.0428 13.0673 10.0333 13.2167C10.0237 13.3661 10.0526 13.5154 10.1172 13.6504Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function GooglePlayIcon({ size = 30 }) {
  return (
    <svg width={size} height={size + 2} viewBox="0 0 30 32" fill="none" aria-hidden="true">
      <path d="M19.087 14.813L5.29175 0.979426L22.8438 11.0562L19.087 14.813ZM1.69015 0.166626C0.877351 0.592226 0.333351 1.36663 0.333351 2.37463V29.9586C0.333351 30.9666 0.877351 31.741 1.69015 32.1666L17.7334 16.1634L1.69015 0.166626ZM28.271 14.269L24.5894 12.1378L20.4822 16.1698L24.5894 20.2018L28.3462 18.0706C29.471 17.1762 29.471 15.1634 28.271 14.269ZM5.29175 31.3602L22.8438 21.2834L19.087 17.5266L5.29175 31.3602Z" fill="currentColor" />
    </svg>
  )
}

export function AppStoreIcon({ size = 32 }) {
  return (
    <svg width={size} height={size + 1} viewBox="0 0 32 33" fill="none" aria-hidden="true">
      <path d="M29.056 25.438C28.5893 26.5249 28.013 27.5614 27.336 28.5313C26.4307 29.8213 25.69 30.714 25.1193 31.21C24.2347 32.0233 23.286 32.4407 22.2707 32.464C21.542 32.464 20.6633 32.2567 19.64 31.836C18.6133 31.4173 17.67 31.2093 16.8073 31.2093C15.9027 31.2093 14.9327 31.4173 13.8947 31.836C12.8553 32.2567 12.018 32.476 11.378 32.4973C10.4047 32.5393 9.43401 32.1107 8.46468 31.21C7.84668 30.67 7.07401 29.746 6.14735 28.4367C5.15335 27.038 4.33601 25.4167 3.69601 23.5673C3.01068 21.5707 2.66668 19.6367 2.66668 17.7647C2.66668 15.62 3.13001 13.7707 4.05801 12.2207C4.78801 10.9753 5.75801 9.994 6.97268 9.27267C8.16433 8.55956 9.52403 8.17581 10.9127 8.16067C11.686 8.16067 12.7 8.4 13.9607 8.87C15.2173 9.34133 16.024 9.58067 16.378 9.58067C16.642 9.58067 17.5387 9.30067 19.058 8.74333C20.4953 8.226 21.708 8.012 22.7013 8.09667C25.394 8.314 27.4167 9.37533 28.7613 11.2873C26.354 12.746 25.1627 14.7893 25.1867 17.4107C25.208 19.4527 25.9487 21.152 27.4047 22.5007C28.0647 23.1273 28.8013 23.6113 29.6207 23.9547C29.4489 24.4552 29.2606 24.9499 29.056 25.438ZM22.8813 1.14067C22.8813 2.74067 22.2967 4.23533 21.1313 5.618C19.7247 7.26267 18.024 8.21267 16.1793 8.06267C16.1546 7.86139 16.1421 7.65879 16.142 7.456C16.142 5.92 16.8107 4.276 17.9987 2.93133C18.592 2.25067 19.3453 1.68467 20.26 1.23333C21.1733 0.788667 22.036 0.542667 22.848 0.5C22.8713 0.714 22.8813 0.928 22.8813 1.14V1.14067Z" fill="currentColor" />
    </svg>
  )
}
