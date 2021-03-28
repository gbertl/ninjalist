import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {ninjas: data},
  };
};

function ninjas({ninjas}) {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
      </Head>

      <div>
        <h1>All Ninjas ({ninjas.length})</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ninjas;
