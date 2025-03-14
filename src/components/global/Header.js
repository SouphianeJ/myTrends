import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <nav>
        <Link href="/"><a style={{ marginRight: '15px' }}>Accueil</a></Link>
        <Link href="/articles"><a style={{ marginRight: '15px' }}>Articles</a></Link>
        <Link href="/category"><a>Catégories</a></Link>
      </nav>
    </header>
  );
}