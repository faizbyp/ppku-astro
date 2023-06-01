function CardList() {
  const cards = [
    {
      title: 'Card 1',
      desc: 'This is a card'
    },
    {
      title: 'Number 2',
      desc: 'lorem ipsum'
    },
    {
      title: 'Three',
      desc: '33333'
    }
  ]

  return (
    <div className="container my-5">
      <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cards && cards.map((card) => (
          <div className="col">
            <div className="card text-bg-primary mb-3 text-center">
              <div className="card-header">React Card</div>
              <div className="card-body">
                <h4 className="card-title fw-bold">{card.title}</h4>
                <p className="card-text">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CardList