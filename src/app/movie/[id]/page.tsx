import Link from 'next/link'
import Image from 'next/image'

export default function MoviePage({ params }: { params: { id: string } }) {
  // This would normally fetch from an API
  const movie = {
    id: params.id,
    title: 'Sample Movie',
    description: 'Movie description goes here...',
    image: '/transformers.jpg',
    episodes: [
      { id: 1, title: 'Episode 1' },
      { id: 2, title: 'Episode 2' },
      { id: 3, title: 'Episode 3' }
    ]
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-video">
          <Image
            src={movie.image}
            alt={movie.title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-300 mb-6">{movie.description}</p>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Episodes</h2>
            <div className="grid grid-cols-2 gap-4">
              {movie.episodes.map((episode) => (
                <Link
                  key={episode.id}
                  href={`/movie/${movie.id}/play/${episode.id}`}
                  className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
                >
                  {episode.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}