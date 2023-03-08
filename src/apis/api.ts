//ToDo: switch case for each url to prevent duplicate

export async function deployGemJoinContract(requestOptions: any): Promise<any> {
  // POST request using fetch with async/await
  const url = "http://localhost:8080/deployGem";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function requestFund(requestOptions: any): Promise<any> {
  // POST request using fetch with async/await
  const url = "http://localhost:8080/requestFund";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function requestAuth(requestOptions: any): Promise<any> {
  // POST request using fetch with async/await
  const url = "http://localhost:8080/requestAuth";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  console.log(data);
  return data;
}
