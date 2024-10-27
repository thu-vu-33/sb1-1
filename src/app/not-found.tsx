import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="text-gray-400 mb-6">Could not find the requested resource</p>
      <Link 
        href="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
      >
        Return Home
      </Link>
    </div>
  )
}