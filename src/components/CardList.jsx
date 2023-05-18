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
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cards && cards.map((card) => (
          <div className="col">
            <div class="card text-bg-primary mb-3 text-center">
              <div class="card-header">React Card</div>
              <div class="card-body">
                <h4 class="card-title fw-bold">{card.title}</h4>
                <p class="card-text">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CardList