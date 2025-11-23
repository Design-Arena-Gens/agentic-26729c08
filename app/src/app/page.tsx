import {
  LOGO_NAME,
  LOGO_TAGLINE,
  LogoArtwork,
  LogoDownloadPanel,
} from "@/components/Logo";
import styles from "./page.module.css";

const detailCards = [
  {
    title: "Core Symbol",
    description:
      "Nested ellipses suggest perpetual motion and focus, capturing the pulse of high-energy teams.",
  },
  {
    title: "Color Language",
    description:
      "Iridescent gradients shift from cyan to fuchsia for a futuristic glow that reinforces innovation.",
  },
  {
    title: "Typography",
    description:
      "Wide geometric spacing balances the dense icon, creating runway-style confidence in the wordmark.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.logo}>
            <LogoArtwork />
          </div>
          <div className={styles.copy}>
            <span className={styles.badge}>Visual Identity System</span>
            <h1>{LOGO_NAME}</h1>
            <p>{LOGO_TAGLINE}</p>
            <LogoDownloadPanel />
          </div>
        </section>

        <section className={styles.details}>
          {detailCards.map((card) => (
            <article key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </article>
          ))}
        </section>

        <section className={styles.usage}>
          <h2>Usage Notes</h2>
          <ul>
            <li>Prefer dark backgrounds to preserve the glow and depth.</li>
            <li>Scale the logomark independently for avatar or icon use.</li>
            <li>Apply 24px minimum padding around the full lock-up.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
