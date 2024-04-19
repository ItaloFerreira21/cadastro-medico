import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">404 - Página não encontrada</h2>
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-600">A página que você está procurando não foi encontrada.</p>
          <p className="mt-2 text-sm text-gray-500">Verifique se o endereço da URL está correto ou retorne a página <Link to={"/"} className="underline text-blue-500 font-semibold"> inicial.</Link></p>
        </div>
      </div>
    </div>
  )
} 