export async function POST(req) {
    const data = await req.json();

    const response = await fetch("https://script.google.com/macros/s/AKfycbxnQS8fpaYvefnnNdKetjEJAKnAS6NLZjK1O68VT30jGl91qte6bWKRj4YTGC-OAC_R/exec", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    const text = await response.text();
    return new Response(text);
}