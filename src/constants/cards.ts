const imagens = [
  'javascript.png',
  'nextjs.png',
  'nodejs.png',
  'reactjs.png',
  'typescript.png',
  'vitejs.png',
]

const UniqueCard = imagens.map((image, indice) => ({
  image,
  idImage: `${indice + 1}`,
}))

export const MockedCard = [...UniqueCard, ...UniqueCard].map(
  (props, indice) => ({
    ...props,
    id: `${indice + 1}`,
  }),
)
