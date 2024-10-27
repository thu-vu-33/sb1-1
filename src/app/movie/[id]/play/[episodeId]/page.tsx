import { notFound } from 'next/navigation'

export default function PlayMovie({ 
  params 
}: { 
  params: { id: string; episodeId: string } 
}) {
  // This would normally fetch from an API
  const movie = {
    id: params.id,
    title: 'Sample Movie',
    episodes: [
      { id: '1', title: 'Episode 1', videoUrl: '#' },
      { id: '2', title: 'Episode 2', videoUrl: '#' },
      { id: '3', title: 'Episode 3', videoUrl: '#' }
    ]
  }

  const episode = movie.episodes.find(ep => ep.id === params.episodeId)
  
  if (!episode) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{movie.title} - {episode.title}</h1>
        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
          <p className="text-gray-400">Video Player Placeholder</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movie.episodes.map((ep) => (
            <button
              key={ep.id}
              className={`p-3 rounded-lg text-center transition ${
                ep.id === episode.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {ep.title}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}