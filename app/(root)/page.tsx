import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams } : {searchParams : Promise <{query?: string}>
}) {
  const query = (await searchParams).query

  return (
    <>
      <section className="pink_container">
        <p className="tag">PITCH, VOTE, AND GROW</p>
        <h1 className="heading">
          PITCH YOUR STARTUP, <br /> 
          CONNECT WITH ENTREPRENEURS
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query}/>
      </section>
    </>
  );
}
