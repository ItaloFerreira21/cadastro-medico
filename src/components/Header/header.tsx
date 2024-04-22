
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <div className="flex flex-col space-y-6 px-8 py-16 ">
      <div className=" space-y-6 px-8">
        {/* Logo svg  */}
        <svg width="138" height="32" viewBox="0 0 138 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M76.0251 9.01514H80.6451L72.1901 31.5151H68.8551L54.7651 0.0900879H59.3851L70.5251 25.0901L76.0251 9.01514Z" fill="#339CFF" />
          <path d="M89.3349 30.6851C87.9551 29.9266 86.8454 28.7576 86.1599 27.3401C85.3912 25.6816 85.018 23.8673 85.0699 22.04V18.3801C85.018 16.5738 85.3914 14.7805 86.1599 13.145C86.8458 11.7354 87.9562 10.5761 89.3349 9.83008C90.8957 9.08217 92.6043 8.69385 94.3349 8.69385C96.0656 8.69385 97.7742 9.08217 99.3349 9.83008C100.714 10.5761 101.824 11.7354 102.51 13.145C103.28 14.7801 103.655 16.5734 103.605 18.3801V22.0901C103.656 23.9033 103.281 25.7031 102.51 27.345C101.819 28.7537 100.71 29.9151 99.3349 30.6702C97.7756 31.423 96.0665 31.814 94.3349 31.814C92.6034 31.814 90.8942 31.423 89.3349 30.6702V30.6851ZM97.9299 26.1851C98.7749 25.2151 99.1949 23.8601 99.1949 22.1101V18.385C99.1949 16.635 98.7733 15.2834 97.9299 14.3301C96.9612 13.4119 95.6772 12.9001 94.3424 12.9001C93.0077 12.9001 91.7237 13.4119 90.7549 14.3301C89.9083 15.2834 89.4866 16.635 89.4899 18.385V22.0901C89.4899 23.8401 89.9099 25.195 90.7549 26.165C91.7178 27.0947 93.004 27.6143 94.3424 27.6143C95.6809 27.6143 96.9671 27.0947 97.9299 26.165V26.1851Z" fill="#339CFF" />
          <path d="M116.87 25.7002C116.842 26.1515 116.967 26.5989 117.225 26.97C117.346 27.1163 117.499 27.2329 117.673 27.3101C117.846 27.3873 118.035 27.4231 118.225 27.415H120.305V31.6201H117.705C116.03 31.6201 114.705 31.1201 113.815 30.0601C112.925 29.0001 112.44 27.5602 112.44 25.6602V0H116.86L116.87 25.7002Z" fill="#339CFF" />
          <path d="M133.685 25.7002C133.655 26.1523 133.783 26.6006 134.045 26.97C134.165 27.1175 134.318 27.2347 134.492 27.312C134.666 27.3893 134.855 27.4247 135.045 27.415H137.125V31.6201H134.525C133.802 31.6625 133.078 31.5446 132.406 31.2749C131.733 31.0052 131.129 30.5905 130.635 30.0601C129.72 29.0201 129.26 27.5602 129.26 25.6602V0H133.68L133.685 25.7002Z" fill="#339CFF" />
          <path d="M48.2752 7.09009L52.2752 9.14014L36.0052 26.4502L32.9102 25.1602L33.7852 2.18506H38.0602L36.9752 19.8301L48.2752 7.09009Z" fill="#339CFF" />
          <path d="M25.405 2.18506H29.695L30.425 25.55L27.33 26.8252L10.895 9.15503L15.18 7.39502L26.42 20.2102L25.405 2.18506Z" fill="#339CFF" />
          <path d="M6.545 16.24L8.33 11.9602L25.905 28.4951L24.61 31.5852L0.5 31.55L2.285 27.2751L19.285 27.55L6.545 16.24Z" fill="#339CFF" />
          <path d="M43.8651 27.4851L60.8651 27.3L62.6251 31.5901L38.5051 31.49L37.2351 28.3901L54.9001 11.9551L56.6601 16.2451L43.8651 27.4851Z" fill="#339CFF" />
        </svg>
        <h1 className=" pb-2 text-base font-bold leading-5 text-blue-950">Gerenciando Sua Clinica</h1>
      </div>

      <div className=" space-y-6 py-11 px-9 pb-2 text-base font-bold leading-5">
        <h2>Escolha qual seção deseja iniciar:</h2>
      </div>
      <div className=" space-y-4 px-8 " >
        <Link to={"/medicos"} 
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold w-72 h-[120px] py-3 
        px-8 rounded-xl shadow-lg 
        transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        >
          Médicos(as)
        </Link>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold w-72 h-[120px] py-3 
          px-8 rounded-xl shadow-lg 
          transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        >
          Pacientes
        </button>
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold w-72 h-[120px] py-3 
          px-8 rounded-xl shadow-lg 
          transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
        >
          Consultas
        </button>
      </div>
    </div>
  );
}
