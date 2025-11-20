import { useParams, Link } from 'react-router-dom'

// TODO: 테스트 Only. 변경할 것
const song = {
  "id": "69149cde71914f6a424fd013",
  "title": "Golden",
  "singer": "HUNTR/X",
  "rating": 3,
  "lyrics": "I'm done hidin', now I'm shinin' like I'm born to be\nWe dreamin' hard, we came so far, now I'll believe\nWe're goin' up, up, up, it's our moment\nYou know together we're glowing\nGonna be, gonna be golden\nOh, up, up, up with our voices\n영원히 깨질 수 없는\nGonna be, gonna be golden"
}

const renderRatingStars = (rating, maxRating = 5) => {
  const stars = []

  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating
    
    stars.push(
      <span 
        key={i} 
        className={`text-xl ${isFilled ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        {isFilled ? '★' : '☆'}
      </span>
    )
  }
  
  return (
    <div className="flex justify-center items-center space-x-0.5" title={`${rating} / ${maxRating}`}>
      {stars}
    </div>
  )
}

const SongDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full">
        {renderRatingStars(song.rating)}

        <div className="flex justify-center mb-6">
          <img 
            src={`https://picsum.photos/192/192?random=${song.id}`} 
            alt={`${song.title} 앨범 이미지`}
            className="w-32 h-32 object-cover rounded-2xl shadow-xl border-4 border-indigo-100 transform hover:scale-105 transition duration-300"
          />
        </div>

        <div className="text-center mb-8 border-b pb-4 border-gray-100">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1 leading-tight">
            {song.title}
          </h1>
          <p className="text-xl font-medium text-indigo-600 mb-3">
            {song.singer}
          </p>

          <a
            href={`https://www.youtube.com/results?search_query=노래방 ${song.title + ' ' + song.singer}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-150"
          >
            Youtube 노래방
          </a>
          
        </div>

        <div className="mb-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <p className="text-gray-600 whitespace-pre-wrap leading-relaxed italic">
              {song.lyrics}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            리스트
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default SongDetail