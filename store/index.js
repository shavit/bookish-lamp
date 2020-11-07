const mockVideo = i => ({
  id: 'ID' + i,
  title: 'Video ' + i,
  thumbnail: 'https://img.youtube.com/vi/wWADpP_CGoU/0.jpg',
  url: null
})

export const state = () => ({
  comments: [{ id: 1, name: 'comment' }, { id: 2, name: 'comment' }],
  featuredVideo: {
    title: 'Video Title',
    thumbnail: 'https://img.youtube.com/vi/wWADpP_CGoU/0.jpg',
    url: null
  },
  videos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => mockVideo(i))
})
