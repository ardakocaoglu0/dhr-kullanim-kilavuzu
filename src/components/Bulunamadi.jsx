import { Link } from 'react-router-dom'

export default function Bulunamadi() {
  return (
    <article className="makale">
      <h1>Sayfa bulunamadı</h1>
      <p>Aradığınız bölüm kılavuzda yok. <Link to="/">Ana sayfaya dönün</Link> ya da soldaki aramayı kullanın.</p>
    </article>
  )
}
