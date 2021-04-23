import Head from "next/head";

import { useRouter } from "next/router";

import homeStyles from "../styles/Home.module.scss";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>StoryChain</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${homeStyles.home}`}>
        <div className={`${homeStyles.home__header}`}>Story Chain</div>
        <div className={`${homeStyles.home__btn}`}>
          <div className={`${homeStyles.home__btn__content}`}>
            <div
              onClick={() => {
                router.push("/memopool");
              }}
            >
              NEW CHAIN
            </div>
          </div>
        </div>
        <div className={`${homeStyles.home__input}`}>
          <input
            type="text"
            placeholder="Chain ID"
            className={`${homeStyles.home__input__content1}`}
          />
          <div className={`${homeStyles.home__input__btn}`}>
            <div className={`${homeStyles.home__input__btn__content}`}>
              JOIN
            </div>
          </div>
        </div>
      </main>
      <div className={`${homeStyles.home__footer}`}>
        <a className={`${homeStyles.home__footer__link}`}>
          Email us for any queries
        </a>
      </div>
    </div>
  );
}
