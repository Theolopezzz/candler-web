function AnnouncementBar() {
  const message =
    'Envío gratis en compras mayores a $40.000 · Paraná y alrededores'

  return (
    <div className="announcement-bar">
      <div className="announcement-bar__track">
        <div className="announcement-bar__group">
          <span>{message}</span>
          <span>{message}</span>
          <span>{message}</span>
        </div>

        <div
          className="announcement-bar__group"
          aria-hidden="true"
        >
          <span>{message}</span>
          <span>{message}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar