import { SVGProps } from "react"

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
    {...props}
  >
    <path d="m413.248 304.619-128.363-88.171-3.563-3.435c-3.989-3.733-3.989-3.733-3.989-10.368 0-9.643 6.571-15.253 17.237-23.595 11.329-8.853 25.43-19.882 25.43-40.405 0-29.397-23.936-53.333-53.333-53.333s-53.333 23.936-53.333 53.333c0 5.888 4.779 10.667 10.667 10.667s10.667-4.779 10.667-10.667c0-17.643 14.357-32 32-32s32 14.357 32 32c0 9.643-6.571 15.253-17.237 23.595-11.33 8.853-25.431 19.883-25.431 40.405 0 14.272 3.435 19.072 10.709 25.899l134.208 93.461c5.803 4.245 4.416 10.197 3.861 11.925-.576 1.728-2.965 7.381-10.155 7.381H117.376c-7.211 0-9.6-5.653-10.155-7.381-.555-1.707-1.941-7.68 3.861-11.904l108.501-78.741c4.757-3.456 5.824-10.133 2.368-14.891s-10.133-5.845-14.891-2.368L98.539 304.789c-11.413 8.299-15.979 22.336-11.605 35.776 4.373 13.419 16.32 22.101 30.443 22.101h277.248c14.123 0 26.069-8.683 30.464-22.123 4.351-13.439-.214-27.476-11.841-35.924z" />
    <path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm0 490.667c-129.387 0-234.667-105.28-234.667-234.667S126.613 21.333 256 21.333 490.667 126.613 490.667 256 385.387 490.667 256 490.667z" />
  </svg>
)

export default Logo