function calculate() {
    const name = document.getElementById('name').value;
    const packetWeight = parseFloat(document.getElementById('packetWeight').value);
    const scoopWeight = parseFloat(document.getElementById('scoopWeight').value);
    const proteinPerScoop = parseFloat(document.getElementById('proteinPerScoop').value);
    const price = parseFloat(document.getElementById('price').value);

    const proteinPerGram = proteinPerScoop / scoopWeight;
    const pricePerGram = price / packetWeight;
    const pricePerGramProtein = pricePerGram / proteinPerGram;

    const result = `
        <h2>${name}</h2>
        <p>Protein per gram: ${proteinPerGram.toFixed(2)} g</p>
        <p>Price per gram: ₹${pricePerGram.toFixed(2)}</p>
        <p>Price per gram of protein: ₹${pricePerGramProtein.toFixed(2)}</p>
    `;

    document.getElementById('results').innerHTML = result;
}
