import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function RedirectPage({ params }) {
  const slug = (await params).slug;

  const client = await clientPromise;
  const db = client.db("shrinkly");
  const collection = db.collection("urls");

  let doc = await collection.findOne({ shortUrl: slug });
  if (doc) {
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
}
