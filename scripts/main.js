async function fetchData() {
    try {
      const response = await fetch("http://localhost:8000/api/v1/images")
      if (!response.ok) {
        throw new Error("Erreur : " + response.statusText)
      }
      const jsonData = await response.json()
      return jsonData;
    } catch (error) {
      console.error("Erreur fetch: " + error)
    }
  }
  
  // Appeler la fonction et utiliser les données
  fetchData().then(data => {
    console.log("Resultat :", data)
  });
  