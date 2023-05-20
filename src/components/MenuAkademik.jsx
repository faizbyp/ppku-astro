import MenuImg from "../assets/img/menu.png";

function MenuAkademik() {
  const data = [
    {
      title: "Peraturan Akademik",
      link: "/"
    },
    {
      title: "Beasiswa",
      link: "/"
    },
    {
      title: "Jadwal Ujian",
      link: "/"
    },
    {
      title: "Timeline Akademik",
      link: "/"
    },
    {
      title: "Jadwal Kuliah",
      link: "/"
    },
  ]

  return (
    <>
      <div className="row justify-content-center g-4">
        {data && data.map((item) => (
          <div className="col-12 col-md-4">
            <div class="card border-black">
              <img src={MenuImg} class="card-img-top object-fit-cover" alt="..." height={300} />
              <div class="card-body">
                <h5 class="card-title my-3">{item.title}</h5>
                <div className="text-end">
                  <a href={item.link} class="btn btn-primary rounded-pill px-3 mb-3">See more</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default MenuAkademik