import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    const client = await clientPromise;
    const db = client.db("shrinkly");
    const collection = db.collection("urls");

    let doc = await collection.findOne({ shortUrl: body.shortUrl });
    if (doc) {
      return Response.json({
        success: false,
        message: "Short URL already exists.",
        status: 400,
      });
    }

    let result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    });

    return Response.json({
      success: true,
      message: "Short URL created successfully.",
      status: 200,
    });
  } catch (error) {
    console.error("Error in /api/generate:", error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
