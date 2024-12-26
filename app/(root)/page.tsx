import { StartupCard } from "@/components/StartupCard";
import { SearchForm } from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      createdAt: new Date(),
      views: 100,
      author: { id: 1, name: "John Doe" },
      id: 1,
      description: "A new way to connect with people",
      image: "https://unsplash.com/photos/a-view-of-a-city-with-tall-buildings-Y7mCzoMVHZ4",
      category: "Social",
      title: "Connectify",
    },
  ];
  return (
    <main>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entreprenuers
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtial Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => <StartupCard key={post.id} post={post}/>)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </main>
  );
}