export default function Footer() {
    return (
      <footer style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
        <p>© {new Date().getFullYear()} MyTrends. Tous droits réservés.</p>
      </footer>
    );
  }