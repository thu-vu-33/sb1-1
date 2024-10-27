import { http, HttpResponse } from 'msw'
import { Movie } from './types'

const movies: Movie[] = [
  {
    id: 1,
    title: 'Transformers One',
    image: '/transformers.jpg',
    views: 125000,
    genre: 'Action'
  },
  {
    id: 2,
    title: 'Alien: Romulus',
    image: '/alien.jpg',
    views: 98000,
    genre: 'Action'
  },
  {
    id: 3,
    title: 'The Wild Robot',
    image: '/wild-robot.jpg',
    views: 85000,
    genre: 'Sci-Fi'
  },
  {
    id: 4,
    title: 'The Substance',
    image: '/substance.jpg',
    views: 76000,
    genre: 'Drama'
  },
  {
    id: 5,
    title: 'The Platform 2',
    image: '/platform.jpg',
    views: 112000,
    genre: 'Thriller'
  }
]

export const handlers = [
  http.get('/api/movies', () => {
    return HttpResponse.json(movies)
  }),

  http.get('/api/movies/:id', ({ params }) => {
    const { id } = params
    const movie = movies.find(m => m.id === Number(id))
    
    if (!movie) {
      return new HttpResponse(null, { status: 404 })
    }

    return HttpResponse.json(movie)
  }),

  http.get('/api/movies/genre/:genre', ({ params }) => {
    const { genre } = params
    const filteredMovies = movies.filter(m => 
      m.genre.toLowerCase() === String(genre).toLowerCase()
    )
    
    return HttpResponse.json(filteredMovies)
  })
]