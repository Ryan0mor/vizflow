export default function SpaceIcon (props) {

  switch (props.type) {
    case "Living room":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M33 11L48 11V10C48 6.68629 45.3137 4 42 4L39 4C35.6863 4 33 6.68629 33 10V11ZM50 13V10C50 5.58172 46.4183 2 42 2H39C34.5817 2 31 5.58172 31 10V13L42 13L42 45H39V47H47V45H44L44 13L50 13Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M19 16C15.5595 16 12.1152 17.0547 9.5078 18.7929C7.12291 20.3829 5.30896 22.6438 5.0357 25.3026C3.93059 25.6656 3.05632 26.3256 2.41139 27.1194C1.44791 28.3052 1 29.7803 1 31C1 32.1682 1.29365 33.3816 2.06127 34.4562C2.72064 35.3794 3.6897 36.144 5 36.6926V47H13V45H26V47H34V36.6926C35.3103 36.144 36.2794 35.3794 36.9387 34.4562C37.7063 33.3816 38 32.1682 38 31C38 29.7803 37.5521 28.3052 36.5886 27.1194C35.9448 26.3271 35.0725 25.668 33.9702 25.3046C33.6989 22.1712 31.6037 19.872 28.9249 18.3768C26.0579 16.7767 22.382 16 19 16ZM26 34.1535V43H13V34.1535C13.0275 34.1314 13.067 34.1025 13.1227 34.0674C13.3811 33.9045 13.8213 33.7208 14.4544 33.552C15.7058 33.2183 17.4901 33 19.5 33C21.5099 33 23.2942 33.2183 24.5456 33.552C25.1787 33.7208 25.6189 33.9045 25.8773 34.0674C25.933 34.1025 25.9725 34.1314 26 34.1535ZM28 34V45H32V35.2792L32.6838 35.0513C34.0213 34.6055 34.8305 33.9668 35.3113 33.2938C35.7937 32.6184 36 31.8318 36 31C36 30.2197 35.6979 29.1948 35.0364 28.3806C34.4001 27.5975 33.4278 27 32 27C30.5722 27 29.5999 27.5975 28.9636 28.3806C28.3021 29.1948 28 30.2197 28 31V34ZM26 31.9182V31C26 29.7803 26.4479 28.3052 27.4114 27.1194C28.3865 25.9193 29.8858 25.0249 31.9146 25.0005C31.5586 22.9622 30.1096 21.3285 27.9501 20.1232C25.4421 18.7233 22.118 18 19 18C15.9405 18 12.8848 18.9453 10.6172 20.4571C8.7085 21.7295 7.46398 23.3219 7.10638 25.0008C9.12452 25.0311 10.6169 25.9234 11.5886 27.1194C12.5521 28.3052 13 29.7803 13 31V31.9182C13.2936 31.8065 13.6095 31.7074 13.939 31.6196C15.4021 31.2294 17.3678 31 19.5 31C21.6322 31 23.5979 31.2294 25.061 31.6196C25.3905 31.7074 25.7064 31.8065 26 31.9182ZM11 34V31C11 30.2197 10.6979 29.1948 10.0364 28.3806C9.40011 27.5975 8.42785 27 7 27C5.57215 27 4.59989 27.5975 3.96361 28.3806C3.30209 29.1948 3 30.2197 3 31C3 31.8318 3.20635 32.6184 3.68873 33.2938C4.16946 33.9668 4.97866 34.6055 6.31623 35.0513L7 35.2792V45H11V34Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M27 44H12V46H6V44V36C3 35 2 33 2 31C2 29.202 3.21225 26.5959 6 26.0877V26C6 21 12.5 17 19 17C25.5 17 33 20 33 26V26.0877C35.7878 26.5959 37 29.202 37 31C37 33 36 35 33 36V44V46H27V44Z" fill="currentColor" fillOpacity="0.25"/>
          <path d="M50 13L31 13L31 10C31 5.58172 34.5817 2 39 2L42 2C46.4183 2 50 5.58172 50 10L50 13Z" fill="currentColor" fillOpacity="0.25"/>
        </svg>

      )
    case "Dinning room":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19 13C17.8954 13 17 13.8954 17 15V24H12V26L24 26V44H21V46H29V44H26V26L35 26L38 26V24H35V20C35 18.8954 34.1046 18 33 18H32V15C32 13.8954 31.1046 13 30 13H19ZM30 18V15L19 15V24H24V20C24 18.8954 24.8954 18 26 18L30 18ZM26 24L33 24V20L26 20V24ZM3.99996 18.0001V25.615C3.99996 25.7422 4.02423 25.8682 4.07148 25.9863L5.67694 30H15C16.1046 30 17 30.8954 17 32L17 34C17 35.1046 16.1046 36 15 36L15 46H13L13 36H5.76382L2.96481 46.2631L1.03528 45.7368L3.79985 35.6C3.31416 35.2351 3 34.6543 3 34L3 32C3 31.3865 3.27624 30.8375 3.71113 30.4706L2.21453 26.7291C2.07278 26.3748 1.99996 25.9966 1.99996 25.615V18.0001H3.99996ZM15 34H5L5 32H15L15 34ZM35 36C33.8954 36 33 35.1046 33 34V32C33 30.8954 33.8954 30 35 30H44.3231L45.9285 25.9863C45.9758 25.8682 46 25.7422 46 25.615V18.0001H48V25.615C48 25.9966 47.9272 26.3748 47.7855 26.7291L46.2889 30.4706C46.7238 30.8375 47 31.3865 47 32V34C47 34.6543 46.6858 35.2351 46.2001 35.6L48.9647 45.7368L47.0352 46.2631L44.2362 36H37V46H35V36ZM35 34H45V32H35V34Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M26 24L33 24V20H26V24ZM15 34L5 34V32L15 32V34ZM45 34L35 34V32L45 32V34Z" fill="currentColor" fillOpacity="0.25"/>
        </svg>
      )
    case "Bed room":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7 23.1L7 14C7 11.2386 9.23858 9 12 9L38 9C40.7614 9 43 11.2386 43 14V23.1C45.2822 23.5633 47 25.581 47 28V41L3 41V28C3 25.581 4.71776 23.5633 7 23.1Z" fill="currentColor" fillOpacity="0.25"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M37 23L26 23V21C26 19.3431 27.3431 18 29 18L34 18C35.6569 18 37 19.3431 37 21V23ZM39 23V21C39 18.2386 36.7614 16 34 16L29 16C27.3644 16 25.9122 16.7853 25 17.9995C24.0878 16.7853 22.6356 16 21 16L16 16C13.2386 16 11 18.2386 11 21V23H9L9 14C9 12.3431 10.3431 11 12 11L38 11C39.6569 11 41 12.3431 41 14V23H39ZM24 21C24 19.3431 22.6569 18 21 18L16 18C14.3431 18 13 19.3431 13 21V23L24 23V21ZM43 23.1V14C43 11.2386 40.7614 9 38 9L12 9C9.23858 9 7 11.2386 7 14L7 23.1C4.71776 23.5633 3 25.581 3 28V41V46H5V41H45V46H47V41V28C47 25.581 45.2822 23.5633 43 23.1ZM8 25C6.34315 25 5 26.3431 5 28L5 39L45 39V28C45 26.3431 43.6569 25 42 25L39 25H26L24 25H11L8 25Z" fill="currentColor"/>
        </svg>
      )

    case "Office":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 16L21 16L21 5L5 5L5 16ZM21 18C22.1046 18 23 17.1046 23 16L23 5C23 3.89543 22.1046 3 21 3H5C3.89543 3 3 3.89543 3 5L3 16C3 17.1046 3.89543 18 5 18L10 18V23H5C3.34315 23 2 24.3431 2 26V47H4L4 41H13C14.6569 41 16 39.6569 16 38V25L26 25L26 27H24C22.3431 27 21 28.3431 21 30V33H19V35H31V43H26.9989C25.3413 43 24 44.3439 24 46V47H26V46C26 45.447 26.4473 45 26.9989 45H31V47H33V45H37.0035C37.5535 45 38 45.4454 38 46V47H40V46C40 44.3454 38.6627 43 37.0035 43H33V35H37C40.3137 35 43 32.3137 43 29V25H45C45.5523 25 46 25.4477 46 26L46 47H48L48 26C48 24.3431 46.6569 23 45 23H43V16C43 14.3431 41.6569 13 40 13H29C27.3431 13 26 14.3431 26 16L26 23L16 23V18H21ZM14 23V18H12V23H14ZM14 25H5C4.44772 25 4 25.4477 4 26V31H14V25ZM4 33L4 39H13C13.5523 39 14 38.5523 14 38V33H4ZM29 15C28.4477 15 28 15.4477 28 16V33H37C39.2091 33 41 31.2091 41 29V16C41 15.4477 40.5523 15 40 15H29ZM23 33H26V29H24C23.4477 29 23 29.4477 23 30V33ZM7 27H11V29H7V27ZM7 35H11V37H7V35Z" fill="currentColor"/>
          <rect x="21" y="16" width="16" height="11" transform="rotate(-180 21 16)" fill="currentColor" fillOpacity="0.25"/>
          <path d="M27 14V34H37C39.7614 34 42 31.7614 42 29V14L27 14Z" fill="currentColor" fillOpacity="0.25"/>
        </svg>
      )

    case "Bath room":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 8.68629 8.68629 6 12 6H12.5C15.394 6 17.7659 8.23511 17.9837 11.0732C14.9257 11.518 12.5086 13.9397 12.0709 17C12.0242 17.3266 12 17.6605 12 18V19L26 19V18C26 17.6605 25.9758 17.3266 25.9291 17C25.49 13.9303 23.0593 11.503 19.9878 11.0692C19.7646 7.12751 16.4975 4 12.5 4H12C7.58172 4 4 7.58172 4 12V31H2V33H4V36C4 41.5228 8.47715 46 14 46H36C41.5228 46 46 41.5228 46 36V33H48V31H46H6V12ZM44 33V36C44 40.4183 40.4183 44 36 44H14C9.58172 44 6 40.4183 6 36V33H44ZM23.9 17C23.4367 14.7178 21.419 13 19 13C16.581 13 14.5633 14.7178 14.1 17L23.9 17ZM13 21V27H15V21H13ZM23 27V21H25V27H23ZM18 21V27H20V21H18Z" fill="currentColor"/>
          <path d="M26 19L12 19L12 18C12 14.134 15.134 11 19 11V11C22.866 11 26 14.134 26 18L26 19Z" fill="currentColor" fillOpacity="0.25"/>
          <path d="M4 31H46V36C46 41.5228 41.5228 46 36 46H14C8.47715 46 4 41.5228 4 36V31Z" fill="currentColor" fillOpacity="0.25"/>
        </svg>
      )
    
    case "Outdoor":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M38.9585 9.2889L39.143 10.857L40.7111 11.0415C43.6888 11.3918 46 13.9275 46 17C46 20.0582 43.7102 22.5847 40.7525 22.9535L40.3795 23H34V22.4142L39.7071 16.7072L38.2929 15.293L34 19.5858V10H32V16.5858L28.7072 13.293L27.2929 14.7072L32 19.4142V23H24C20.6863 23 18 20.3137 18 17C18 13.6863 20.6863 11 24 11H26.828L27.0465 9.24748C27.4154 6.28979 29.9418 4 33 4C36.0726 4 38.6082 6.31124 38.9585 9.2889ZM32 25H24C19.5817 25 16 21.4183 16 17C16 12.5817 19.5817 9 24 9H25.0619C25.554 5.05369 28.9204 2 33 2C37.0986 2 40.4774 5.0822 40.9448 9.05521C44.9178 9.52265 48 12.9014 48 17C48 21.0796 44.9463 24.446 41 24.9381V25H34V36H39C40.1046 36 41 36.8954 41 38V40C41 41.1046 40.1046 42 39 42H37.8686L40.8321 46.4453L39.168 47.5547L35.4649 42H18C17.6332 42 17.2895 41.9013 16.994 41.7289L12.8137 47.5813L11.1863 46.4188L15.9863 39.6988L14.9624 40.3202C14.0182 40.8933 12.7881 40.5924 12.215 39.6482L5.03775 27.8227C4.46465 26.8785 4.76553 25.6484 5.70979 25.0753L7.41952 24.0376C8.36378 23.4645 9.59385 23.7654 10.167 24.7096L13.9848 31H24C25.6569 31 27 32.3431 27 34L27 36H32V25ZM15.1986 33L17.1377 36.1949C17.3988 36.07 17.6912 36 18 36H25L25 34C25 33.4477 24.5523 33 24 33H15.1986ZM18 40H39V38H18L18 40ZM13.9247 38.6105L6.74748 26.785L8.45722 25.7473L15.6345 37.5728L13.9247 38.6105Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M33.0001 2C37.0987 2 40.4774 5.0822 40.9449 9.05521C44.9179 9.52265 48.0001 12.9014 48.0001 17C48.0001 21.0796 44.9464 24.446 41.0001 24.9381V25H40.0001H25.0001L24.0001 25C19.5818 25 16.0001 21.4183 16.0001 17C16.0001 12.5817 19.5818 9 24.0001 9H25.062C25.5541 5.05369 28.9204 2 33.0001 2ZM8.75274 24.7949L16.4214 38.0774L13.5365 39.7429L5.86792 26.4605L8.75274 24.7949ZM18.0001 38H39.0001V40H18.0001V38Z" fill="currentColor" fillOpacity="0.25"/>
        </svg>
      )
    
    case "Kitchen":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19 17C18.6312 17 18.2923 16.797 18.1183 16.4719C17.9443 16.1467 17.9634 15.7522 18.168 15.4453L22 9.69722V2H24V10C24 10.1974 23.9416 10.3904 23.8321 10.5547L20.8685 15L25 15L29.1315 15L26.168 10.5547C26.0584 10.3904 26 10.1974 26 10V2H28V9.69722L31.8321 15.4453C32.0366 15.7522 32.0557 16.1467 31.8817 16.4719C31.7077 16.797 31.3688 17 31 17L25 17L19 17ZM4 15L14 15L14 9L4 9L4 15ZM14 17C15.1046 17 16 16.1046 16 15L16 9C16 7.89543 15.1046 7 14 7L4 7C2.89543 7 2 7.89543 2 9L2 15C2 16.1046 2.89543 17 4 17L14 17ZM4 45H16L16 41H4V39H16V35H4V33H16L16 29H4L4 45ZM18 45L18 29L32 29L32 45H18ZM46 45H34V35H46V45ZM46 33H34L34 29H46L46 33ZM4 27L16 27L34 27L46 27C47.1046 27 48 27.8954 48 29L48 45C48 46.1046 47.1046 47 46 47H34H16L4 47C2.89543 47 2 46.1046 2 45L2 29C2 27.8954 2.89543 27 4 27ZM46 15L36 15V9L46 9V15ZM48 15C48 16.1046 47.1046 17 46 17L36 17C34.8954 17 34 16.1046 34 15V9C34 7.89543 34.8954 7 36 7L46 7C47.1046 7 48 7.89543 48 9V15ZM31 41C31 42.1046 30.1046 43 29 43H21C19.8954 43 19 42.1046 19 41V37C19 35.8954 19.8954 35 21 35H29C30.1046 35 31 35.8954 31 37V41ZM22 33H20V31H22V33ZM26 33V31H24V33H26ZM30 33H28V31H30V33ZM29 41H21V37H29V41Z" fill="currentColor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M16 15C16 16.1046 15.1046 17 14 17L4 17C2.89543 17 2 16.1046 2 15V9C2 7.89543 2.89543 7 4 7H14C15.1046 7 16 7.89543 16 9L16 15ZM48 45C48 46.1046 47.1046 47 46 47L4 47C2.89543 47 2 46.1046 2 45L2 29C2 27.8954 2.89543 27 4 27L46 27C47.1046 27 48 27.8954 48 29L48 45ZM46 17C47.1046 17 48 16.1046 48 15V9C48 7.89543 47.1046 7 46 7H36C34.8954 7 34 7.89543 34 9V15C34 16.1046 34.8954 17 36 17L46 17Z" fill="currentColor" fillOpacity="0.25"/>
        </svg>
      )

    case "Hall room":
      return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M35 4L35 46H15L15 4L35 4ZM13 46L13 4C13 2.89543 13.8954 2 15 2H35C36.1046 2 37 2.89543 37 4L37 46H43V48H37H13H7V46H13ZM19 19H31L31 8L19 8L19 19ZM31 21C32.1046 21 33 20.1046 33 19L33 8C33 6.89543 32.1046 6 31 6L19 6C17.8954 6 17 6.89543 17 8L17 19C17 20.1046 17.8954 21 19 21H31ZM31 42H19L19 31H31L31 42ZM33 42C33 43.1046 32.1046 44 31 44H19C17.8954 44 17 43.1046 17 42L17 31C17 29.8954 17.8954 29 19 29H31C32.1046 29 33 29.8954 33 31L33 42ZM17 24H29V26H17V24ZM33 27V23H31V27H33Z" fill="currentColor"/>
          <rect x="35" y="46" width="20" height="42" transform="rotate(-180 35 46)" fill="currentColor" fillOpacity="0.25"/>
        </svg>
      )

    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
  }  
}
